import { motion } from "framer-motion";

interface CallToActionSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const CallToActionSection = ({ scrollToSection }: CallToActionSectionProps) => {
  const benefits = [
    "Free Consultation & Setup Support",
    "30-Day Money-Back Guarantee",
    "24/7 Customer Support",
    "No Long-Term Contracts Required",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Ready to Optimize Your Workflow?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Get a FREE consultation about how FlowSuite Management System can help
          to grow your production efficiency and business profitability in no
          time.
        </motion.p>

        {/* Benefits list */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center space-x-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.3 + index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-3 h-3 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
              <span className="text-gray-700 font-medium">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          onClick={() => scrollToSection("contact")}
          className="btn-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  );
};

export default CallToActionSection;
