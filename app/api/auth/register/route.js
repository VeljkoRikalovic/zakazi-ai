import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongoose";
import User from "../../../../models/User";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    await dbConnect();

    const { name, email, password, businessName, businessType, adminToken } =
      await request.json();

    // Check if this is the first user (no users in DB) or if admin token is provided
    const userCount = await User.countDocuments();
    const isFirstUser = userCount === 0;

    // Verify admin token from request headers or body
    const isAdminRequest =
      adminToken === "admin-token" ||
      request.headers.get("x-admin-token") === "admin-token";

    // If not the first user and not an admin request, reject
    if (!isFirstUser && !isAdminRequest) {
      return NextResponse.json(
        { message: "Nemate dozvolu za registraciju novih korisnika" },
        { status: 403 }
      );
    }

    // Validate input
    if (!name || !email || !password || !businessName || !businessType) {
      return NextResponse.json(
        { message: "Sva polja su obavezna" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Korisnik sa ovom email adresom već postoji" },
        { status: 409 }
      );
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password, // Will be hashed by the pre-save hook in the model
      businessName,
      businessType,
      role: isFirstUser ? "admin" : "user", // First user is admin, others are regular users
    });

    // Save user to database
    await newUser.save();

    // Create user object without password for response
    const userResponse = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      businessName: newUser.businessName,
      businessType: newUser.businessType,
      role: newUser.role,
    };

    // Create JWT token for authentication
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "30d" }
    );

    return NextResponse.json({
      message: "Registracija uspešna",
      user: userResponse,
      token,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Greška na serveru: " + error.message },
      { status: 500 }
    );
  }
}
