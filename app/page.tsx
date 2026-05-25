import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AlianzaBar from "@/components/AlianzaBar";
import Beneficios from "@/components/Beneficios";
import CanalesKueski from "@/components/CanalesKueski";
import PasosActivacion from "@/components/PasosActivacion";
import Faq from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Beneficios />
      <AlianzaBar />
      <CanalesKueski />
      <PasosActivacion />
      <Faq />
      <CTAFinal />
      <Footer />
    </main>
  );
}
