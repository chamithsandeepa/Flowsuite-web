import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface AdminControlSectionProps {}

const AdminControlSection = ({}: AdminControlSectionProps) => {
  const features = [
    "View, update and manage orders, payments, and invoices",
    "Generate reports on sales, stock, damages, and transfers",
    "Add, assign, update, or remove staff roles",
    "Access full customer details and update customer types",
    "Track stock, add new items, record issues/damages, and adjust prices",
  ];

  return (
    <section id="admin-control" className="relative bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-gray-50 rounded-full blur-3xl opacity-50"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-red-50 rounded-full blur-3xl opacity-30"
          animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 min-h-[calc(100vh-8rem)]">
          {/* Left Image - Laptop */}
          <motion.div
            className="lg:flex-1 w-full max-w-md sm:max-w-lg lg:max-w-2xl order-2 lg:order-1 mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.85, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Subtle shadow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gray-200/20 to-transparent blur-2xl rounded-lg transform translate-y-4 sm:translate-y-6 md:translate-y-8"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Laptop Image */}
              <motion.img
                src="/images/macbook2.png"
                alt="FlowSuite Admin Dashboard"
                className="relative w-full h-auto object-contain drop-shadow-xl"
                initial={{ filter: "brightness(0.95)" }}
                whileInView={{ filter: "brightness(1)" }}
                transition={{ duration: 0.8 }}
              />

              {/* Corner accent */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-red-100 rounded-full blur-xl opacity-60"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:flex-1 w-full space-y-6 sm:space-y-8 lg:space-y-8 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left px-2 sm:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header */}
            <div className="space-y-4 sm:space-y-5 max-w-md lg:max-w-full">
              <motion.h2
                className="text-black leading-tight text-xl sm:text-2xl md:text-2xl"
                style={{
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  fontWeight: 700,
                  lineHeight: "1.3",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                Powerful Admin Control
              </motion.h2>

              <motion.p
                className="text-black leading-relaxed text-base sm:text-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.7",
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeInOut" }}
              >
                Admins have full visibility and control over the entire apparel
                workflow, empowering them to manage users, orders, inventory,
                and reporting all from one platform.
              </motion.p>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-5 w-full max-w-md lg:max-w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group justify-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  whileHover={{ x: 3 }}
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
                    className="text-black leading-relaxed text-left break-words text-sm sm:text-base"
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

export default AdminControlSection;
