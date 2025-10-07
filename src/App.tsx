import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import Footer from "./components/Footer";
import FlowSuiteSection from "./components/FlowSuite";
import AdminControlSection from "./components/AdminControll";
import Steps from "./components/Steps";
import InventoryReportingSection from "./components/Inventory";
import StockTransfer from "./components/StockTransfer";
import Automated from "./components/Automated";
import DamageFlowSection from "./components/DamageFlow";
import AdvancedPricingSection from "./components/PricingSystem";
import DTForder from "./components/DTForder";
import Plans from "./components/Plans";
import FAQSection from "./components/FAQ";
import CTASection from "./components/ContactUs";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section with navbar offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Height of your fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = ["home", "flowsuite", "features", "pricing", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Buffer for better detection

      // Find the current section by checking which section we're in
      let current = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);

        if (element) {
          const sectionTop = element.offsetTop;

          // If we've scrolled past this section's top, it's the active one
          if (scrollPosition >= sectionTop) {
            current = sectionId;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* HOME SECTION */}
      <div id="home">
        <HeroSection scrollToSection={scrollToSection} />
      </div>

      {/* FLOWSUITE SECTION */}
      <div id="flowsuite">
        <FlowSuiteSection />
        <AdminControlSection />
        <Steps />
      </div>

      {/* FEATURES SECTION */}
      <div id="features">
        <KeyFeaturesSection />
        <InventoryReportingSection />
        <StockTransfer />
        <Automated />
        <DamageFlowSection />
      </div>

      {/* PRICING SECTION */}
      <div id="pricing">
        <AdvancedPricingSection />
        <DTForder />
        <Plans />
        <FAQSection />
      </div>

      {/* CONTACT SECTION */}
      <div id="contact">
        <CTASection />
      </div>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
