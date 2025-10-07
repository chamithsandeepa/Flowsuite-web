import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface AffordablePlansSectionProps {
  scrollToSection?: (sectionId: string) => void;
}

const AffordablePlansSection = ({
  scrollToSection,
}: AffordablePlansSectionProps) => {
  const features = [
    "Customized to match your exact requirements",
    "Flexible to fit within your budget",
    "Scales with your business needs",
    "Easy setup and support",
  ];

  return (
    <section
      id="affordable-plans"
      className="relative bg-[#F5F3F0] overflow-hidden py-16 md:py-20"
    >
      {/* Background Wave Image - Left Side */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-30 hidden sm:block"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src="images/waves2.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Background Wave Image - Right Side */}
      <motion.div
        className="absolute right-0 bottom-0 w-full lg:w-3/5 h-full pointer-events-none opacity-20 hidden sm:block"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 0.2, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src="images/waves.png"
          alt=""
          className="w-full h-full object-cover object-right-bottom"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10 lg:gap-16 min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            className="w-full lg:flex-1 space-y-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Header */}
            <div className="space-y-4 text-center lg:text-left">
              <motion.p
                className="text-[#FF4757] font-bold tracking-wider"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  letterSpacing: "0.05em",
                }}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                PAY ONLY FOR WHAT YOU NEED. MONTHLY OR ANNUAL
              </motion.p>

              <h2
                className="text-black leading-tight max-w-xl mx-auto lg:mx-0"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  fontWeight: 700,
                  fontSize: "38px",
                  lineHeight: "1.2",
                }}
              >
                Affordable Plans That Scale
                <br className="hidden sm:block" />
                With You
              </h2>
            </div>

            {/* Features List */}
            <div className="space-y-5 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group justify-start sm:justify-start text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-red-500 stroke-[2.5]" />
                    </div>
                  </motion.div>
                  <p
                    className="text-black leading-relaxed text-base sm:text-[16px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      lineHeight: "1.7",
                    }}
                  >
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="pt-4 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.button
                className="bg-[#FF4757] hover:bg-[#FF3545] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  padding: "14px 36px",
                  letterSpacing: "0.5px",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection && scrollToSection("contact")}
              >
                CALL US NOW
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:flex-1 flex items-end justify-center lg:justify-end"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-full lg:flex-1 flex items-end justify-center lg:justify-end"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="relative w-full max-w-8xl" // ⬆️ Much larger container
                whileHover={{
                  scale: 1.04, // Slight hover zoom for effect
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  src="images/people.png"
                  alt="Team collaboration"
                  className="w-[150%] md:w-[160%] lg:w-[180%] h-auto object-contain object-bottom mx-auto -mb-12 lg:-mb-20"
                  // ⬆️ Increased image scale + moved closer to bottom
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />

                {/* Glow Effect */}
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-40 bg-gradient-to-t from-red-100/40 to-transparent blur-3xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 sm:right-20 w-16 sm:w-20 h-16 sm:h-20 bg-red-200/20 rounded-full blur-xl pointer-events-none"
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
        className="absolute bottom-20 left-10 sm:left-20 w-20 sm:w-24 h-20 sm:h-24 bg-orange-200/20 rounded-full blur-xl pointer-events-none"
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

export default AffordablePlansSection;
