import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface StockTransferringSectionProps {}

const StockTransferringSection = ({}: StockTransferringSectionProps) => {
  const features = [
    "Seamless stock movement across branches",
    "Real-time updates to prevent shortages",
  ];

  return (
    <section
      id="stock-transferring"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-red-50 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-gray-100 rounded-full blur-3xl opacity-50"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16 min-h-[calc(100vh-8rem)]">
          {/* Left Image */}
          <div className="lg:flex-1 w-full max-w-xl sm:max-w-2xl order-2 lg:order-1">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-red-100/20 blur-3xl rounded-lg transform scale-105" />

              {/* Stock Transfer Dashboard Image */}
              <img
                src="/images/stock.png"
                alt="FlowSuite Stock Transferring System"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
              />

              {/* Decorative accents */}
              <div className="absolute -top-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-red-200/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-gray-200/40 rounded-full blur-xl" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:flex-1 w-full space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            {/* Header */}
            <div className="space-y-4 sm:space-y-5">
              <h2
                className="text-black font-bold leading-tight"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  fontSize: "26px",
                  lineHeight: "1.3",
                }}
              >
                Stock Transferring
              </h2>
              <p
                className="text-black leading-relaxed mx-auto lg:mx-0 max-w-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.7",
                }}
              >
                Streamline operations with Cutting Stock Transfers. Manage and
                move fabric stock across processes with accuracy and visibility,
                ensuring resources are always available where needed.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group justify-center lg:justify-start"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-red-500 stroke-[2.5]" />
                    </div>
                  </div>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StockTransferringSection;
