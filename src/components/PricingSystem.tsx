import { motion } from "framer-motion";
import { Check } from "lucide-react";

const AdvancedPricingSection = () => {
  const features = [
    "Tshirt x Wetlook x Kids Size x XL x (Front x Print + Press) x quantity",
    "Easily manage all pricing details without complex setup.",
  ];

  return (
    <section
      id="advanced-pricing"
      className="relative bg-[#F5F3F0] overflow-hidden min-h-screen"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gray-100 rounded-full blur-3xl opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-red-50 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:flex-1 space-y-8 order-2 lg:order-1 text-center lg:text-left">
            {/* Header */}
            <div className="space-y-4 sm:space-y-5">
              <h2
                className="text-black leading-tight text-2xl sm:text-3xl md:text-[26px] font-bold"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  lineHeight: "1.3",
                }}
              >
                Advanced Pricing System
              </h2>
              <p
                className="text-black leading-relaxed text-base sm:text-[16px] md:text-[17px] font-normal"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: "1.7",
                }}
              >
                Prices for each fabric type and product, including dimensions
                such as Product, Fabric, Type, Size, Peace, and Quantity, are
                displayed in an easy-to-read format. This makes it simple to
                check and manage all pricing details at a glance.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5 pt-3 sm:pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start justify-start gap-3 mx-auto lg:mx-0 max-w-md sm:max-w-none"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-red-500 stroke-[2.5]" />
                    </div>
                  </div>
                  <p
                    className="text-black text-left leading-relaxed text-[15px] sm:text-[16px] font-normal"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: "1.7",
                    }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:flex-1 max-w-2xl order-1 lg:order-2">
            <div className="relative flex justify-center items-center">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-red-100/20 blur-3xl rounded-lg transform scale-105"></div>

              {/* Image */}
              <img
                src="/images/pricing.png"
                alt="FlowSuite Advanced Pricing System"
                className="relative w-full h-auto object-contain drop-shadow-2xl max-w-[90%] sm:max-w-[80%] md:max-w-full"
              />

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-red-200/30 rounded-full blur-xl" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 sm:w-24 sm:h-24 bg-gray-200/40 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedPricingSection;
