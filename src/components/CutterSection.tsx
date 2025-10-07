import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface CutterSectionManagementProps {}

const CutterSectionManagement = ({}: CutterSectionManagementProps) => {
  const features = [
    "Quickly view all cutting orders assigned to you at a glance.",
    "Update status to 'Cutting' and mark when done.",
    "Log damages with quantity and notes.",
    "Track progress in real-time from design to cut.",
    "Cutting stock can be transferred if stock is not available.",
    "Keep workflow smooth and organized.",
  ];

  return (
    <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-6 sm:left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-100 rounded-full blur-3xl opacity-50"
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-6 sm:right-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-orange-100 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className="text-[#FF4757] font-bold tracking-wider mb-3 sm:mb-4"
            style={{
              fontSize: "14px",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            CUTTING
          </motion.p>
          <motion.h2
            className="text-black font-bold leading-tight max-w-3xl sm:max-w-4xl mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-[44px]"
            style={{
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              lineHeight: "1.2",
            }}
          >
            Cutter Section Management
          </motion.h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            className="lg:flex-1 w-full space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Section Header */}
            <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
              <h3
                className="text-black font-bold leading-tight text-xl sm:text-2xl md:text-[26px]"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  lineHeight: "1.3",
                }}
              >
                Cutter's Dashboard
              </h3>
              <p
                className="text-black leading-relaxed text-sm sm:text-base md:text-[16px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.7",
                }}
              >
                Cutter users can track all orders (excluding DTF orders), update
                statuses, and log any damages directly from their dashboard.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 sm:space-y-5 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 justify-start max-w-lg mx-auto lg:mx-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="flex-shrink-0 mt-0.5"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-green-500 stroke-[2.5]" />
                    </div>
                  </motion.div>
                  <p
                    className="text-black leading-relaxed text-left text-sm sm:text-base md:text-[16px]"
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
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:flex-1 w-full max-w-md sm:max-w-lg lg:max-w-2xl order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02, rotateY: -2 }}
              transition={{ duration: 0.3 }}
              style={{ perspective: "1000px" }}
            >
              {/* Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-200/40 to-red-100/30 blur-2xl sm:blur-3xl rounded-lg transform scale-105"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Cutter Image */}
              <motion.div
                className="relative"
                initial={{ rotateY: 5 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/cutter.png"
                  alt="FlowSuite Cutter Section Management"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Accents */}
              <motion.div
                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-red-200/30 rounded-full blur-lg sm:blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-orange-200/40 rounded-full blur-lg sm:blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CutterSectionManagement;
