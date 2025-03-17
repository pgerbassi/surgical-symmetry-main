
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;
