"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessType: "salon", // Default value
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        // Only allow admin users to access the register page directly
        if (user.role === "admin") {
          setIsLoggedIn(true);
          router.push("/dashboard");
        } else {
          // Non-admin users should be redirected to dashboard
          router.push("/dashboard");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
      }
    } else {
      // Non-logged in users should be redirected to login
      router.push("/login");
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Lozinke se ne podudaraju");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          businessName: formData.businessName,
          businessType: formData.businessType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Greška prilikom registracije");
      }

      // Successful registration
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoggedIn) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
      <div className="bg-[var(--surface)] p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">
          Registracija
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--foreground)]/70 mb-1"
            >
              Ime i prezime
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[var(--foreground)]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[var(--background)]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--foreground)]/70 mb-1"
            >
              Email adresa
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[var(--foreground)]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[var(--background)]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[var(--foreground)]/70 mb-1"
            >
              Lozinka
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[var(--foreground)]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[var(--background)]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[var(--foreground)]/70 mb-1"
            >
              Potvrdite lozinku
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[var(--foreground)]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[var(--background)]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-[var(--foreground)]/70 mb-1"
            >
              Naziv biznisa
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[var(--foreground)]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[var(--background)]"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="businessType"
              className="block text-sm font-medium text-[var(--foreground)]/70 mb-1"
            >
              Tip biznisa
            </label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[var(--foreground)]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[var(--background)]"
              required
            >
              <option value="salon">Salon lepote</option>
              <option value="spa">Spa centar</option>
              <option value="medical">Medicinska ustanova</option>
              <option value="fitness">Fitnes centar</option>
              <option value="other">Drugo</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isLoading ? "Registracija u toku..." : "Registruj se"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-[var(--foreground)]/70">
            Već imate nalog?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Prijavite se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
