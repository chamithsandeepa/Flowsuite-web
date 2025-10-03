import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface InvoicingSystemSectionProps {}

const InvoicingSystemSection = ({}: InvoicingSystemSectionProps) => {
  const features = [
    "Automated invoices generate",
    "Create a single invoice for multiple orders/items",
    "Add discounts, manage customer payments, track due orders",
    "Secure and customizable invoicing templates",
  ];

  return (
    <section
      id="invoicing-system"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-6 sm:left-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gray-50 rounded-full blur-3xl opacity-60"
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-6 sm:right-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-red-50 rounded-full blur-3xl opacity-40"
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            KEY FEATURES
          </motion.p>
          <motion.h2
            className="text-black font-bold leading-tight max-w-3xl sm:max-w-4xl mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-[44px]"
            style={{
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              lineHeight: "1.2",
            }}
          >
            Tools That Make Work Faster & Smarter
          </motion.h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
          {/* Left Image */}
          <motion.div
            className="lg:flex-1 w-full max-w-md sm:max-w-lg lg:max-w-2xl order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.85, x: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
                className="absolute inset-0 bg-gradient-to-br from-gray-200/40 to-red-100/20 blur-2xl sm:blur-3xl rounded-lg transform scale-105"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Invoice Image */}
              <motion.div
                className="relative"
                initial={{ rotateY: 5 }}
                whileInView={{ rotateY: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/images/invoice.png"
                  alt="FlowSuite Smart Invoicing System"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Accents */}
              <motion.div
                className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-red-200/30 rounded-full blur-lg sm:blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-gray-200/40 rounded-full blur-lg sm:blur-xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:flex-1 w-full space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
                Smart Invoicing System
              </h3>
              <p
                className="text-black leading-relaxed text-sm sm:text-base md:text-[16px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.7",
                }}
              >
                Streamline billing with our Smart Invoicing system eliminating
                errors, speeding up payments, and ensuring financial
                transparency for smooth cash flow and a better customer
                experience.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 sm:space-y-5 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 justify-start max-w-lg mx-auto lg:mx-0"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
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
        </div>
      </div>
    </section>
  );
};

export default InvoicingSystemSection;
