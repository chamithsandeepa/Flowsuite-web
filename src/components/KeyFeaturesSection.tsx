import { motion } from "framer-motion";

const KeyFeaturesSection = () => {
  const features = [
    {
      id: "inventory",
      title: "Stay In Control Of Your",
      titleHighlight: "Inventory With Our Smart Management System",
      description:
        "Track materials, monitor stock levels, and automate reordering processes to ensure your production never stops due to supply shortages.",
      image: "/images/workflow-image.png",
      imageAlt: "Inventory Management System",
      imageFirst: true,
      points: [
        "Unlimited Item & Category Management ",
        "Bill of Materials (BoM) Support",
      ],
    },
    {
      id: "quality",
      title: "Ensure Consistent Quality with",
      titleHighlight: "Built-in Quality Assurance",
      description:
        "Implement systematic quality checks at every stage of production to maintain high standards and reduce defects.",
      image: "/images/quality-ensure.png",
      imageAlt: "Quality Assurance System",
      imageFirst: false,
      points: [
        "Inspection Point Tracking",
        "Defect Classification System",
        "Quality Metrics Dashboard",
      ],
    },
    {
      id: "reports",
      title: "Make Smarter Decisions With",
      titleHighlight: "Comprehensive Data Reports",
      description:
        "Access detailed analytics and reports to identify bottlenecks, optimize processes, and make data-driven decisions for your business.",
      image: "/images/data-reports.png",
      imageAlt: "Data Reports and Analytics",
      imageFirst: true,
      points: [
        "Production Analytics",
        "Performance Metrics",
        "Custom Report Builder",
      ],
    },
    {
      id: "mobile",
      title: "Your Whole Business On",
      titleHighlight: "Beautifully Designed Mobile Dashboards",
      description:
        "Access your complete business overview from anywhere with our responsive mobile interface designed for on-the-go management.",
      image: "/images/business-on-dashboard.png",
      imageAlt: "Mobile Dashboard",
      imageFirst: false,
      points: [
        "Unlimited Item & Category Management ",
        "Cross-platform Compatibility",
        "Offline Access Capabilities",
        "Push Notifications",
      ],
    },
  ];

  return (
    <section id="key-features" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Workflow With These
            <span className="text-red-500 block">Key Features</span>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {features.map((feature, featureIndex) => (
            <motion.div
              key={feature.id}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: featureIndex * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                className={feature.imageFirst ? "" : "lg:order-2"}
                initial={{ opacity: 0, x: feature.imageFirst ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-auto rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
              <motion.div
                className={feature.imageFirst ? "" : "lg:order-1"}
                initial={{ opacity: 0, x: feature.imageFirst ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {feature.title}
                  <span className="text-red-500 block">
                    {feature.titleHighlight}
                  </span>
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {feature.description}
                </motion.p>
                <motion.ul
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {feature.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + pointIndex * 0.05,
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
                      <span className="text-gray-700">{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
