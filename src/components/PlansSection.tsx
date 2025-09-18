import { motion } from "framer-motion";

interface PlansSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const PlansSection = ({ scrollToSection }: PlansSectionProps) => {
  const planTypes = [
    "Starter Plans",
    "Professional Plans",
    "Enterprise Solutions",
    "Custom Integrations",
  ];

  return (
    <section id="plans" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Flexible Plans Tailored To Your
              <span className="text-red-500 block">Business</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Choose from our range of flexible subscription plans designed to
              grow with your business needs and production scale.
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {planTypes.map((plan, index) => (
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
                  <span className="text-gray-700">{plan}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="btn-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Plans Options
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.img
              src="/images/flexible-planes.png"
              alt="Flexible business plans"
              className="w-full h-auto rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
