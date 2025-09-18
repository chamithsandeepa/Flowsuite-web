import { motion } from "framer-motion";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "features", label: "Features" },
    { id: "workflow", label: "Workflow" },
    { id: "plans", label: "Plans" },
  ];

  const solutions = [
    "Inventory Management",
    "Quality Assurance",
    "Data Analytics",
    "Mobile Dashboard",
  ];

  const contactInfo = [
    "contact@flowsuite.com",
    "+1 (555) 123-4567",
    "1234 Business Ave",
    "Suite 100, City, State 12345",
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src="/images/logo.png"
                alt="FlowSuite"
                className="h-8 w-auto filter brightness-0 invert"
              />
              {/* <span className="ml-2 text-xl font-bold">FlowSuite</span> */}
            </motion.div>
            <motion.p
              className="text-gray-400 text-sm leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Streamlining apparel production workflows with intelligent
              management solutions.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {solution}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.05,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {info}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-sm text-gray-400">
            © 2024 FlowSuite. All rights reserved. Built with modern technology
            for the apparel industry.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
