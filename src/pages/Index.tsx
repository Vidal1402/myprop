import MarketTicker from "@/components/landing/MarketTicker";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofBar from "@/components/landing/SocialProofBar";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ProfitSimulator from "@/components/landing/ProfitSimulator";
import PlansSection from "@/components/landing/PlansSection";
import DifferentialSection from "@/components/landing/DifferentialSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import AboutSection from "@/components/landing/AboutSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <main className="overflow-x-hidden">
    <MarketTicker />
    <Header />
    <HeroSection />
    <SocialProofBar />
    <ProblemSection />
    <HowItWorksSection />
    <ProfitSimulator />
    <PlansSection />
    <DifferentialSection />
    <TestimonialSection />
    <AboutSection />
    <ForWhoSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </main>
);

export default Index;
