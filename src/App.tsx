import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkflowSection from "./components/WorkflowSection";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import PlansSection from "./components/PlansSection";
import CallToActionSection from "./components/CallToActionSection";
import Footer from "./components/Footer";

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
      <FeatureSection />
      <WorkflowSection />
      <KeyFeaturesSection />
      <PlansSection scrollToSection={scrollToSection} />
      <CallToActionSection scrollToSection={scrollToSection} />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
