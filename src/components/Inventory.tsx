import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface InventoryReportingSectionProps {}

const InventoryReportingSection = ({}: InventoryReportingSectionProps) => {
  const features = [
    "Smart filters with easy customer report generation",
    "Customizable reports by product, date, or department",
    "Actionable insights for smarter strategies",
    "Detailed stock and damage tracking",
    "Easy report export options",
  ];

  return (
    <section
      id="inventory-reporting"
      className="relative min-h-screen bg-[#F5F3F0] overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            className="lg:flex-1 w-full space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="space-y-5">
              <motion.p
                className="text-[#FF4757] font-bold tracking-wider"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  letterSpacing: "0.1em",
                }}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                INVENTORY
              </motion.p>
              <motion.h2
                className="text-black leading-tight"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  fontWeight: 700,
                  fontSize: "26px",
                  lineHeight: "1.3",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Advance Reporting
              </motion.h2>
              <motion.p
                className="text-black leading-relaxed max-w-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.7",
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Turn data into decisions with Advanced Reporting covering sales,
                orders, stock, production, and damages for a 360° business view.
              </motion.p>
            </div>

            {/* Features List */}
            <div className="space-y-5 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 5 }}
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
                    className="text-black leading-relaxed"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
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
            className="lg:flex-1 w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Subtle shadow effect (optional, you can remove this too if not needed) */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-transparent blur-2xl rounded-lg transform translate-y-6 "
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Image only - removed bg/box/shadow */}
              <motion.img
                src="/images/inventory.png"
                alt="FlowSuite Inventory Reporting Dashboard"
                className="w-full h-auto object-contain "
                initial={{ rotateY: -5 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
              />

              {/* Corner accents (still visible, remove if you don’t want them) */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-red-200/40 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-200/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InventoryReportingSection;
