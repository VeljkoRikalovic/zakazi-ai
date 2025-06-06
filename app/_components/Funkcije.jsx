function Funkcije() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Sve što vam je potrebno za upravljanje terminima
          </p>
          <p className="mt-4 max-w-2xl text-xl text-[var(--foreground)]/70 lg:mx-auto">
            Naša platforma je dizajnirana da učini zakazivanje termina
            jednostavnim i za Vas i za Vaše klijente.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {/* Feature 1 */}
            <div className="pt-6">
              <div className="flow-root bg-[var(--surface)] rounded-lg px-6 pb-8 transition-colors">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-md shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-[var(--foreground)] tracking-tight">
                    24/7 Online zakazivanje
                  </h3>
                  <p className="mt-5 text-base text-[var(--foreground)]/70">
                    Automatizujte komunikaciju sa klijentima uz inteligentnog
                    agenta koji razume poruke i zakazuje termine umesto vas.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="pt-6">
              <div className="flow-root bg-[var(--surface)] rounded-lg px-6 pb-8 transition-colors">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-md shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-[var(--foreground)] tracking-tight">
                    Automatski podsetnici
                  </h3>
                  <p className="mt-5 text-base text-[var(--foreground)]/70">
                    Smanjite broj propuštenih termina uz automatske SMS i email
                    podsetnike koji se šalju klijentima pre zakazanih termina.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="pt-6">
              <div className="flow-root bg-[var(--surface)] rounded-lg px-6 pb-8 transition-colors">
                <div className="-mt-6 ">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-md shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-[var(--foreground)] tracking-tight">
                    Analitička kontrolna tabla
                  </h3>
                  <p className="mt-5 text-base text-[var(--foreground)]/70">
                    Steknite uvid u svoje poslovanje uz detaljne izveštaje o
                    rezervacijama, prihodima i zadržavanju klijenata.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="pt-6">
              <div className="flow-root bg-[var(--surface)] rounded-lg px-6 pb-8 transition-colors">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-md shadow-lg">
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-[var(--foreground)] tracking-tight">
                    Komunikacija sa klijentima
                  </h3>
                  <p className="mt-5 text-base text-[var(--foreground)]/70">
                    Ostanite u kontaktu sa klijentima putem integrisanih poruka
                    za ažuriranje termina i marketinga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Funkcije;
