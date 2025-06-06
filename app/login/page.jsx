"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "../_components/LoginForm";

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      router.push("/dashboard");
    }
  }, [router]);

  if (isLoggedIn) {
    return null; // Don't render anything while redirecting
  }

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center p-4">
      <div className="bg-[var(--surface)] p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">
          Prijava
        </h2>

        <form>
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
              className="w-full px-3 py-2 border border-[var(--foreground)]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[var(--background)]"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[var(--foreground)]/70 mb-1"
            >
              Lozinka
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-[var(--foreground)]/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[var(--background)]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Prijavi se
          </button>
        </form>

        {/* Registration option removed as per requirements */}
      </div>
    </div>
  );
}
