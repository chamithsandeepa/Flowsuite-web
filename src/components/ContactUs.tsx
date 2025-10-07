import { motion } from "framer-motion";

interface CTASectionProps {
  scrollToSection?: (sectionId: string) => void;
}

const CTASection = ({ scrollToSection }: CTASectionProps) => {
  return (
    <section
      id="cta"
      className="relative bg-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <motion.div
          className="relative bg-gradient-to-br from-[#FFE4DE] to-[#FFD4CC] rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Background Ellipse Image - Top Left */}
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 pointer-events-none opacity-40"
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 0.4, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src="images/Elips.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Background Ellipse Image - Bottom Right */}
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 pointer-events-none opacity-40"
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 0.4, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img
              src="images/Elips.png"
              alt=""
              className="w-full h-full object-contain transform rotate-180"
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12">
            {/* Heading */}
            <motion.h2
              className="text-black leading-tight mb-4 sm:mb-6 max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{
                fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                lineHeight: "1.2",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              Ready to Power Up
              <br className="hidden sm:block" />
              Production?
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-black leading-relaxed mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                lineHeight: "1.7",
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.35,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              Get a personalized walkthrough and see how to save time, cut
              costs, and grow your apparel business today.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className="bg-[#FF4757] hover:bg-[#FF3545] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-[15px] px-6 sm:px-10 md:px-12 py-3 sm:py-4"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.5px",
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection && scrollToSection("contact")}
            >
              CONTACT US
            </motion.button>
          </div>

          {/* Subtle Glow Effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 sm:top-28 left-6 sm:left-10 w-12 sm:w-16 h-12 sm:h-16 bg-red-100/30 rounded-full blur-2xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 sm:bottom-28 right-8 sm:right-20 w-14 sm:w-20 h-14 sm:h-20 bg-orange-100/20 rounded-full blur-2xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default CTASection;
