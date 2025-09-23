import { motion } from "framer-motion";

const WorkflowSection = () => {
  const workflowSteps = [
    { name: "Handles customer order", completed: true },
    { name: "Creative design", completed: true },
    { name: "Cutting section", completed: true },
    { name: " Applies prints", completed: true },
    { name: "Finishing & Pressing", completed: true },
    { name: "Sewing", completed: true },
    { name: "Packaging & Dispatch", completed: true },
  ];

  return (
    <section id="workflow" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Manage Your Business With FlowSuite
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Streamline Your Production
              <span className="text-red-500 block">
                With Dedicated Departments
              </span>
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Our system organizes your apparel production into specialized
              departments, ensuring smooth workflows and clear responsibilities
              at every stage
            </motion.p>

            {/* Workflow checklist */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
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
                  <span className="text-gray-700 font-medium">{step.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.img
              src="/images/production-stream.png"
              alt="Production workflow departments with design, grading, sewing, making patterns, fabric cuts, and finishing stages"
              className="w-full h-auto rounded-lg "
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
