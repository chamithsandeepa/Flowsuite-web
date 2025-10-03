import { motion } from "framer-motion";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-[#FFE4DE] bg-no-repeat overflow-hidden"
      style={{ paddingTop: 0 }} // remove fixed pt-16
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Left Text Content */}
          <motion.div
            className="max-w-2xl space-y-6 lg:space-y-8 lg:flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.h1
              className="text-black leading-tight"
              style={{
                fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 6vw, 50px)",
                lineHeight: "1.2",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              Smarter <span className="text-[#F94049]">Apparel Management</span>{" "}
              Starts <br className="hidden sm:block" /> Here
            </motion.h1>

            <motion.p
              className="text-black leading-relaxed pr-0 lg:pr-20 mx-auto lg:mx-0"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(14px, 3vw, 16px)",
                lineHeight: "1.7",
                maxWidth: "600px",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Gain full control of your production cycle with advanced
              dashboards, real-time tracking, reporting, and powerful admin
              tools all in one system.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <motion.button
                onClick={() => scrollToSection("features")}
                className="bg-red-500 hover:bg-red-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 text-center shadow-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(14px, 3vw, 16px)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTACT US
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:flex-1 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <img
              src="/images/hero.png"
              alt="Hero Illustration"
              className="w-full h-auto object-contain rounded-lg mt-6 sm:mt-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
