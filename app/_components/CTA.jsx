function CTA() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-r from-teal-500 to-blue-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Spremni da transformišete Vaše iskustvo zakazivanja?
          </h2>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            Pridružite se hiljadama preduzeća koja su pojednostavila zakazivanje
            termina uz Zakaži AI.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-gray-50"
              >
                Započnite besplatno
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-800/30 hover:bg-teal-800/40"
              >
                Saznajte više
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
