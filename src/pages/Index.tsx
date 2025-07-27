import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ConsultaUnicaSection from "@/components/ConsultaUnicaSection";
import PartnersSection from "@/components/PartnersSection";
import DecorativeSection from "@/components/DecorativeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PricingSection />
      <ConsultaUnicaSection />
      <DecorativeSection />
      <PartnersSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
