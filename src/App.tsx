import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
// import PlansSection from "./components/PlansSection";
// import CallToActionSection from "./components/CallToActionSection";
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

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "features",
        "workflow",
        "key-features",
        "plans",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <FlowSuiteSection />
      <AdminControlSection />
      <Steps />
      <KeyFeaturesSection />
      <InventoryReportingSection />
      <StockTransfer />
      <Automated />
      <DamageFlowSection />
      <AdvancedPricingSection />
      <DTForder />
      <Plans />
      <FAQSection />
      <CTASection />
      {/* <PlansSection scrollToSection={scrollToSection} /> */}
      {/* <CallToActionSection scrollToSection={scrollToSection} /> */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
