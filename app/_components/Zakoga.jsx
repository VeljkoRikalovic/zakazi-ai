import React from "react";

function Zakoga() {
  const businesses = [
    {
      title: "Frizerski saloni",
      description:
        "Automatsko zakazivanje i upravljanje terminima – manje otkazanih, bolje popunjeni raspored",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
        />
      ),
    },
    {
      title: "Kozmetički saloni",
      description:
        "Precizno planiranje tretmana, smanjenje preklapanja termina i besprekorno korisničko iskustvo",
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14s1.5 2 4 2 4-2 4-2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 9h.01M15 9h.01"
          />
        </>
      ),
    },
    {
      title: "Spa / Masaže",
      description:
        "Optimizujte kapacitet kabina i terapeuta, povećajte ponovni dolazak klijenata.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
    },

    {
      title: "Restorani",
      description:
        "Optimizacija popunjenosti stolova, automatsko upravljanje rezervacijama i smanjenje čekanja gostiju",
      icon: (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h18v18H3z"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 6v6c0 1 1 2 2 2h4c1 0 2-1 2-2V6M12 12v6M8 18h8"
          />
          <path strokeLinecap="round" strokeWidth={2} d="M6 10h2M16 10h2" />
        </>
      ),
    },

    {
      title: "Hoteli",
      description:
        "Pojednostavljeno rezervisanje soba, automatski podsjetnici gostima i dodatne usluge na dohvat ruke",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
    },
    {
      title: "Svi biznisi sa rezervacijama",
      description:
        "Svaka usluga koja radi po principu termina može odmah unaprediti svoje poslovanje uz našu platformu",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      ),
    },
  ];

  return (
    <section id="za-koga" className="py-16 sm:py-24 bg-[var(--muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Ko koristi Zakaži AI?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-[var(--foreground)]/70 lg:mx-auto">
            Naša platforma pomaže različitim biznisima da optimizuju svoje
            poslovanje
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business, index) => (
              <div className="pt-6" key={index}>
                <div className="flow-root bg-[var(--surface)] rounded-lg px-6 pb-8 transition-colors">
                  <div className="-mt-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="mt-8 pt-10 text-lg font-medium text-[var(--foreground)] tracking-tight">
                          {business.title}
                        </h3>
                        <p className="mt-5 text-base text-[var(--foreground)]/70">
                          {business.description}
                        </p>
                      </div>
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-blue-600 rounded-md shadow-lg">
                          <svg
                            className="h-6 w-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            {business.icon}
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-20">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 shadow-2xl hover:shadow-xl transform transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Želim demo za moj biznis
          </a>
        </div>
      </div>
    </section>
  );
}

export default Zakoga;
