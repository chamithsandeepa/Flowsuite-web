import { motion } from "framer-motion";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative pt-16 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-image.png')",
      }}
    >
      {/* Gradient mask overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

      {/* Optional: Additional mask for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-[calc(100vh-4rem)]">
          <motion.div
            className="max-w-2xl space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              Streamline Your
              <span className="text-red-400 block">Apparel Workflow</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Optimize your production processes with our comprehensive workflow
              management system designed specifically for the apparel industry.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <motion.button
                onClick={() => scrollToSection("features")}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("workflow")}
                className="border-2 border-white/80 hover:border-red-400 hover:bg-red-400 text-white hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
