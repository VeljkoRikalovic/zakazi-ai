"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm({ onClose, isAdminCreating = false }) {
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
  const router = useRouter();

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
      // If admin is creating, always set the admin token
      let adminToken = null;
      if (isAdminCreating) {
        adminToken = "admin-token"; // In a real app, this would be a JWT or other secure token
      }

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(adminToken ? { "x-admin-token": adminToken } : {}),
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          businessName: formData.businessName,
          businessType: formData.businessType,
          adminToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Greška prilikom registracije");
      }

      // If admin is creating a user, don't log in as that user
      if (isAdminCreating) {
        if (onClose) onClose();
        // Show success message or refresh user list if needed
        alert("Korisnik uspešno registrovan!");
      } else {
        // Regular registration flow
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/dashboard");
        if (onClose) onClose();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[var(--surface)] p-8 rounded-lg shadow-xl max-w-md w-full relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--foreground)]/70 hover:text-[var(--foreground)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">
          {isAdminCreating ? "Registracija novog korisnika" : "Registracija"}
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
              <option value="salon">Frzerski Salon</option>
              <option value="spa">Spa/Masaza centar</option>
              <option value="medical">Manikir/Pedikir</option>
              <option value="fitness">Restoran</option>
              <option value="other">Drugo</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isLoading
              ? "Registracija u toku..."
              : isAdminCreating
              ? "Registruj korisnika"
              : "Registruj se"}
          </button>
        </form>

        {!isAdminCreating && (
          <div className="mt-4 text-center">
            <p className="text-sm text-[var(--foreground)]/70">
              Već imate nalog?{" "}
              <button
                onClick={() => {
                  // Handle login redirect
                  router.push("/login");
                  if (onClose) onClose();
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Prijavite se
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
