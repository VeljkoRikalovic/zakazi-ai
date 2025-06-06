"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RegisterForm from "../_components/RegisterForm";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/");
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem("user");
      router.push("/");
    } finally {
      setLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="bg-[var(--surface)] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            Zakaži AI Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-[var(--foreground)]/70">
              {user?.name} | {user?.businessName}
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md text-[var(--foreground)]/80 hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors"
            >
              Odjavi se
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[var(--surface)] rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4 text-[var(--foreground)]">
            Dobrodošli, {user?.name}!
          </h2>
          <p className="text-[var(--foreground)]/70 mb-6">
            Ovo je vaša kontrolna tabla za upravljanje zakazivanjima.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--background)] p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-[var(--foreground)] mb-2">
                Današnja zakazivanja
              </h3>
              <p className="text-3xl font-bold text-blue-600">0</p>
            </div>
            <div className="bg-[var(--background)] p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-[var(--foreground)] mb-2">
                Ukupno klijenata
              </h3>
              <p className="text-3xl font-bold text-teal-600">0</p>
            </div>
            <div className="bg-[var(--background)] p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-[var(--foreground)] mb-2">
                Ukupno zakazivanja
              </h3>
              <p className="text-3xl font-bold text-purple-600">0</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-4">
              Brze akcije
            </h3>
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-md transition-colors">
                Dodaj novo zakazivanje
              </button>
              <button className="px-4 py-2 bg-[var(--background)] text-[var(--foreground)] border border-[var(--foreground)]/10 rounded-md hover:bg-[var(--surface-hover)] transition-colors">
                Upravljaj uslugama
              </button>
              <button className="px-4 py-2 bg-[var(--background)] text-[var(--foreground)] border border-[var(--foreground)]/10 rounded-md hover:bg-[var(--surface-hover)] transition-colors">
                Podešavanja naloga
              </button>
            </div>
          </div>

          {user?.role === "admin" && (
            <div className="mt-8 bg-[var(--surface)] rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-4">
                Administratorske opcije
              </h3>
              <p className="text-[var(--foreground)]/70 mb-4">
                Kao administrator, možete upravljati korisnicima i njihovim
                nalozima.
              </p>

              <button
                onClick={() => setShowRegisterForm(true)}
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white rounded-md transition-colors"
              >
                Registruj novog korisnika
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Register Form Modal */}
      {showRegisterForm && (
        <RegisterForm
          onClose={() => setShowRegisterForm(false)}
          isAdminCreating={true}
        />
      )}
    </div>
  );
}
