import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongoose";
import User from "../../../../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Function to create a default admin user if no users exist
async function createDefaultAdminIfNeeded() {
  const userCount = await User.countDocuments();
  
  if (userCount === 0) {
    // Create default admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password123", salt);
    
    const defaultAdmin = new User({
      name: "Test User",
      email: "test@example.com",
      password: hashedPassword,
      businessName: "Test Salon",
      businessType: "salon",
      role: "admin",
    });
    
    await defaultAdmin.save();
    console.log("Default admin user created");
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    
    // Create default admin if needed
    await createDefaultAdminIfNeeded();
    
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email i lozinka su obavezni" },
        { status: 400 }
      );
    }

    // Find user - we need to explicitly select the password field since it's excluded by default
    const user = await User.findOne({ email }).select("+password");

    // Check if user exists
    if (!user) {
      return NextResponse.json(
        { message: "Pogrešan email ili lozinka" },
        { status: 401 }
      );
    }
    
    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Pogrešan email ili lozinka" },
        { status: 401 }
      );
    }

    // Create user object without password for response
    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
      businessName: user.businessName,
      businessType: user.businessType,
      role: user.role,
    };

    // Create JWT token for authentication
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "30d" }
    );

    return NextResponse.json({
      message: "Uspešna prijava",
      user: userResponse,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Greška na serveru: " + error.message },
      { status: 500 }
    );
  }
}