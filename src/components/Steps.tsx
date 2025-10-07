import { motion } from "framer-motion";
import {
  ArrowRight,
  Package,
  Shirt,
  Scissors,
  Printer,
  Hand,
  Box,
} from "lucide-react";

interface DepartmentsSectionProps {}

const DepartmentsSection = ({}: DepartmentsSectionProps) => {
  const departments = [
    {
      icon: Package,
      title: "Customer Dashboard",
      description: "Customers can easily place orders through the dashboard",
      color: "#FF4757",
      delay: 0.1,
    },
    {
      icon: Shirt,
      title: "Design",
      description: "Job completed, status updated, and passed to the next step",
      color: "#FF4757",
      delay: 0.2,
    },
    {
      icon: Scissors,
      title: "Cutting",
      description: "Track Issues and Transfer Cuts instantly",
      color: "#FF4757",
      delay: 0.3,
    },
    {
      icon: Printer,
      title: "Printing",
      description: "Update print statuses, report damages, and track orders.",
      color: "#FF4757",
      delay: 0.4,
    },
    {
      icon: Hand,
      title: "Pressing",
      description: "Update status, report issues, and track progress.",
      color: "#FF4757",
      delay: 0.5,
    },
    {
      icon: Box,
      title: "Packing",
      description: "Prepare deliveries",
      color: "#FF4757",
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };


  return (
    <section
      id="departments"
      className="relative min-h-screen bg-[#F2F0E9] overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-red-100/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.p
            className="text-[#FF4757] font-bold tracking-wider mb-4"
            style={{
              fontSize: "15px",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.1em",
            }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            EACH STEP, ORGANIZED
          </motion.p>
          <motion.h2
            className="text-black font-bold leading-tight max-w-4xl mx-auto"
            style={{
              fontSize: "44px",
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              lineHeight: "1.2",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Streamline Your Production
            <br />
            With Dedicated Departments
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-red-50 transition-colors duration-300">
                  <dept.icon
                    className="w-8 h-8 text-gray-700 group-hover:text-red-500 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>
              </motion.div>

              {/* Title */}
              <h3
                className="text-[#FF4757] font-bold mb-3"
                style={{
                  fontSize: "22px",
                  fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  lineHeight: "1.3",
                }}
              >
                {dept.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 mb-6"
                style={{
                  fontSize: "16px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.6",
                }}
              >
                {dept.description}
              </p>

              {/* Learn More Link */}
              <motion.div
                className="flex justify-end" // 🔥 Pushes button to right side
              >
                <motion.div
                  className="flex items-center gap-2 text-[#FF4757] font-semibold group/link cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Learn More
                  </span>
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F3F0] to-transparent pointer-events-none" />
    </section>
  );
};

export default DepartmentsSection;
