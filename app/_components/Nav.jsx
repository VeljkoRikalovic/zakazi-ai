"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLoginForm(true);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowRegisterForm(true);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[var(--background)] backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <h4 className="text-[var(--foreground)]">Zakaži AI</h4>
                {/*  <Image
                  src="/zakaziai_logo.png"
                  alt="Zakaži AI Logo"
                  width={120}
                  height={40}
                  className="dark:invert-[0.25]"
                /> */}
              </div>
              <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                <a
                  href="#features"
                  className="border-transparent hover:border-primary-500 text-[var(--foreground)]/80 hover:text-[var(--foreground)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                >
                  Funkcije
                </a>
                <a
                  href="#pricing"
                  className="border-transparent hover:border-primary-500 text-[var(--foreground)]/80 hover:text-[var(--foreground)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                >
                  Cene
                </a>
                <a
                  href="#footer"
                  className="border-transparent hover:border-primary-500 text-[var(--foreground)]/80 hover:text-[var(--foreground)] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                >
                  Kontakt
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
              <ThemeToggle />

              {user ? (
                <>
                  <a
                    href="/dashboard"
                    className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Dashboard
                  </a>
                  {user.role === "admin" && (
                    <button
                      onClick={handleRegisterClick}
                      className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                    >
                      Registruj korisnika
                    </button>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Odjavi se
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLoginClick}
                    className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer"
                  >
                    Prijava
                  </button>
                </>
              )}
            </div>
            <div className="flex items-center sm:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-[var(--foreground)]/80 hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] focus:outline-none transition-colors"
              >
                <span className="sr-only">Otvori glavni meni</span>
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
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
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:hidden bg-[var(--background)]`}
        >
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#features"
              className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-primary-500 text-base font-medium transition-colors"
            >
              Funkcije
            </a>
            <a
              href="#pricing"
              className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-primary-500 text-base font-medium transition-colors"
            >
              Cene
            </a>
            <a
              href="#footer"
              className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-primary-500 text-base font-medium transition-colors"
            >
              Kontakt
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-black/5 dark:border-white/5">
            <div className="flex items-center px-4 space-x-3">
              {user ? (
                <>
                  <a
                    href="/dashboard"
                    className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Dashboard
                  </a>
                  {user.role === "admin" && (
                    <button
                      onClick={handleRegisterClick}
                      className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
                    >
                      Registruj korisnika
                    </button>
                  )}
                  <button
                    onClick={handleLogout}
                    className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    Odjavi se
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleLoginClick}
                    className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
                  >
                    Prijava
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Login Form Modal */}
      {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />}

      {/* Register Form Modal */}
      {showRegisterForm && (
        <RegisterForm
          onClose={() => setShowRegisterForm(false)}
          isAdminCreating={user && user.role === "admin"}
        />
      )}
    </>
  );
}

export default Nav;
