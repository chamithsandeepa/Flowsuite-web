import { motion } from "framer-motion";

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="section-padding bg-gradient-to-br from-red-50 via-red-100/30 to-red-200/50"
    >
      <div className="container-custom ">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.img
            src="/images/logo.png"
            alt="FlowSuite"
            className="h-12 w-auto mx-auto mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative rounded-2xl p-8">
            {/* Additional gradient overlay for more depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-100/20 to-transparent rounded-2xl"></div>

            {/* Computer image */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src="/images/flowsuite-on-computer.png"
                alt="FlowSuite Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-lg text-gray-600 leading-relaxed px-4">
            Empower your production journey with an intuitive interface and
            advanced analytics unlock real-time insights, drive smarter
            decisions, and elevate your operational performance to new heights.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
