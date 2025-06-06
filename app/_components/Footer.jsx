import Image from "next/image";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[var(--background)] border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)] tracking-wider uppercase">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors"
                >
                  +381695338913
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-base text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors"
                >
                  zakaziai@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)] tracking-wider uppercase">
              Pravno
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors"
                >
                  Privatnost
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors"
                >
                  Uslovi korišćenja
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors"
                >
                  Politika kolačića
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="mt-12 border-t border-black/5 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <h4 className="text-[var(--foreground)]">Zakaži AI</h4>
            {/*   <Image
              src="/zakaziai_logo.png"
              alt="Zakaži AI Logo"
              width={120}
              height={40}
              className="dark:invert-[0.25]"
            /> */}
          </div>
          <p className="mt-4 md:mt-0 text-base text-[var(--foreground)]/70">
            &copy; {new Date().getFullYear()} Zakaži AI. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
