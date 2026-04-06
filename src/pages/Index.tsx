import MarketTicker from "@/components/landing/MarketTicker";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBar from "@/components/landing/SocialProofBar";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PlansSection from "@/components/landing/PlansSection";
import DifferentialSection from "@/components/landing/DifferentialSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import AboutSection from "@/components/landing/AboutSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import ForWhoDetailSection from "@/components/landing/ForWhoDetailSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <main className="overflow-x-hidden">
    <MarketTicker />
    <Header />
    {/* No mobile: texto e grades centralizados; no desktop o layout original de cada seção prevalece */}
    <div className="max-md:[&_section_.container]:text-center max-md:[&_footer_.container]:text-center max-md:[&_section_.container]:[&_.grid]:justify-items-center max-md:[&_footer_.container_.grid]:justify-items-center">
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <HowItWorksSection />
      <PlansSection />
      <DifferentialSection />
      <TestimonialSection />
      <AboutSection />
      <ForWhoSection />
      <ForWhoDetailSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  </main>
);

export default Index;
