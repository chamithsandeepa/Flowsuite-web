import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface FlowSuiteSectionProps {}

const FlowSuiteSection = ({}: FlowSuiteSectionProps) => {
  const features = [
    {
      text: "Clients sign up and submit orders easily.",
      delay: 0.1,
    },
    {
      text: "The designers get the orders and then send them to the production team to begin the work.",
      delay: 0.2,
    },
    {
      text: "The cutter, printer, and presser take over the task and complete the job.",
      delay: 0.3,
    },
    {
      text: "The accountant handles all the financial aspects",
      delay: 0.4,
    },
    {
      text: "Admins monitor the entire workflow",
      delay: 0.5,
    },
  ];

  return (
    <section id="flowsuite" className="relative bg-[#F94049] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="lg:flex-1 w-full space-y-8 lg:space-y-10 text-center lg:text-left">
            {/* Header */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block font-bold tracking-widest uppercase text-[#FCE864]"
                style={{
                  fontSize: "14px",
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  letterSpacing: "2px",
                }}
              >
                HOW IT WORKS
              </span>
              <h2
                className="text-white leading-tight text-3xl sm:text-4xl md:text-5xl"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  fontWeight: 700,
                  lineHeight: "1.2",
                }}
              >
                Stunning System For
                <br />
                <span className="text-white drop-shadow-lg">
                  Smarter Management
                </span>
              </h2>
            </motion.div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 max-w-md mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 justify-start text-left"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  whileHover={{ x: 6 }}
                >
                  <motion.div
                    className="flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[#F94049] stroke-[2.5]" />
                    </div>
                  </motion.div>
                  <p
                    className="text-white leading-relaxed text-left break-words text-sm sm:text-base"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      lineHeight: "1.7",
                    }}
                  >
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image - Laptop */}
          <motion.div
            className="lg:flex-1 w-full max-w-2xl mb-12 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Glow effect behind laptop */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-white/20 blur-3xl rounded-full transform scale-110"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Laptop Image */}
              <motion.img
                src="/images/macbook.png"
                alt="Laptop"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
                initial={{ filter: "brightness(0.8)" }}
                whileInView={{ filter: "brightness(1)" }}
                transition={{ duration: 0.8 }}
              />

              {/* Centered Logo on Laptop */}
              <motion.img
                src="/images/logo.png"
                alt="Logo"
                className="absolute top-1/2 left-1/2 w-32 md:w-40 lg:w-48 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  );
};

export default FlowSuiteSection;
