import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-[var(--foreground)] sm:text-5xl md:text-6xl">
                <span className="block">Pojednostavite zakazivanje</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                  sa Zakaži AI
                </span>
              </h1>
              <p className="mt-6 text-base text-[var(--foreground)]/70 sm:text-lg md:text-xl">
                Transformišite proces zakazivanja termina uz našu platformu
                zasnovanu na veštačkoj inteligenciji. Savršeno za salone, spa
                centre i uslužne delatnosti.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div
                  className="rounded-md shadow"
                  style={{ pointerEvents: "auto" }}
                >
                  <Link
                    href="#pricing"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 md:py-4 md:text-lg md:px-10 transition-colors cursor-pointer relative z-20"
                  >
                    Započnite besplatno
                  </Link>
                </div>
                <div
                  className="mt-3 sm:mt-0 sm:ml-3"
                  style={{ pointerEvents: "auto" }}
                >
                  <Link
                    href="#pricing"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[var(--foreground)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] md:py-4 md:text-lg md:px-10 transition-colors cursor-pointer relative z-20"
                  >
                    Zakažite demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-[var(--surface)] rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src="/dashboard-preview.svg"
                      alt="Zakaži AI pregled kontrolne table"
                      width={800}
                      height={450}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <svg
                      className="h-20 w-20 text-white"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx="42"
                        cy="42"
                        r="42"
                        fill="white"
                      />
                      <path d="M55 42L35 55V29L55 42Z" fill="#0284c7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
