import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import Funkcije from "./_components/Funkcije";
import Cena from "./_components/Cena";
import CTA from "./_components/CTA";
import Zakoga from "./_components/Zakoga";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <Hero />
      <Zakoga />
      <Funkcije />
      <Cena />
      <CTA />
      <Footer />
    </div>
  );
}
