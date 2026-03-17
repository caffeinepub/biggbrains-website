import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import MarqueeBanner from "./components/MarqueeBanner";
import Navbar from "./components/Navbar";
import PortfolioSection from "./components/PortfolioSection";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import TechMarquee from "./components/TechMarquee";
import TestimonialsSection from "./components/TestimonialsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBanner />
        <TechMarquee />
        <ServicesSection />
        <StatsSection />
        <AboutSection />
        <HowItWorksSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
