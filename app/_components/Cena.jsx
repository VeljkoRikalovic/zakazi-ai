function Cena() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[var(--foreground)] sm:text-5xl bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 inline-block">
            Cene
          </h2>
          <p className="mt-6 text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed">
            Svaki salon ima različite potrebe: broj termina, SMS/Email pakete i
            dodatne AI usluge.{" "}
            <span className="font-semibold text-teal-600 dark:text-teal-400">
              Napravite besplatnu konsultaciju
            </span>{" "}
            i dobićete tačnu kalkulaciju.
          </p>
        </div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="hidden lg:block absolute -top-10 -left-10 w-40 h-40 bg-teal-100 dark:bg-teal-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30"></div>
          <div className="hidden lg:block absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30"></div>

          <div className="relative bg-[var(--surface)] rounded-2xl shadow-xl overflow-hidden border border-black/5 dark:border-white/10">
            {/* Header section */}
            <div className="px-8 py-12 border-b border-black/5 dark:border-white/10 bg-[var(--surface)]">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-[var(--foreground)]">
                    Transparentno formiranje cene
                  </h3>
                  <p className="mt-3 text-lg text-[var(--foreground)]/70 max-w-2xl">
                    Naša cena se formira na osnovu vaših stvarnih potreba, bez
                    skrivenih troškova
                  </p>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="px-8 py-12 bg-[var(--background)]">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[var(--surface)] backdrop-blur-sm p-6 rounded-xl shadow-sm border border-black/5 dark:border-white/10 transform transition-transform hover:scale-[1.02] hover:shadow-md">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-gradient-to-br from-teal-500/10 to-teal-500/20 p-3 rounded-lg">
                      <svg
                        className="h-6 w-6 text-teal-600 dark:text-teal-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-[var(--foreground)]">
                        Broj termina
                      </h4>
                      <p className="mt-2 text-[var(--foreground)]/70">
                        Koliko termina mesečno zakazujete
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--surface)] backdrop-blur-sm p-6 rounded-xl shadow-sm border border-black/5 dark:border-white/10 transform transition-transform hover:scale-[1.02] hover:shadow-md">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-gradient-to-br from-blue-500/10 to-blue-500/20 p-3 rounded-lg">
                      <svg
                        className="h-6 w-6 text-blue-600 dark:text-blue-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-[var(--foreground)]">
                        SMS/Email obaveštenja
                      </h4>
                      <p className="mt-2 text-[var(--foreground)]/70">
                        Koliko podsetnika šaljete klijentima
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--surface)] backdrop-blur-sm p-6 rounded-xl shadow-sm border border-black/5 dark:border-white/10 transform transition-transform hover:scale-[1.02] hover:shadow-md">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-gradient-to-br from-teal-500/10 to-teal-500/20 p-3 rounded-lg">
                      <svg
                        className="h-6 w-6 text-teal-600 dark:text-teal-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-[var(--foreground)]">
                        AI asistent
                      </h4>
                      <p className="mt-2 text-[var(--foreground)]/70">
                        Automatizacija komunikacije sa klijentima
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--surface)] backdrop-blur-sm p-6 rounded-xl shadow-sm border border-black/5 dark:border-white/10 transform transition-transform hover:scale-[1.02] hover:shadow-md">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-gradient-to-br from-blue-500/10 to-blue-500/20 p-3 rounded-lg">
                      <svg
                        className="h-6 w-6 text-blue-600 dark:text-blue-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-[var(--foreground)]">
                        Dodatne usluge
                      </h4>
                      <p className="mt-2 text-[var(--foreground)]/70">
                        Integracije sa drugim sistemima, prilagođavanja
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-12 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 shadow-2xl hover:shadow-xl transform transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Zatražite prilagođenu ponudu
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cena;
