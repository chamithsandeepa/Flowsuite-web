import { motion } from "framer-motion";
import { Phone, Mail, Globe, Facebook, Linkedin } from "lucide-react";

interface FooterSectionProps {
  scrollToSection?: (sectionId: string) => void;
}

const FooterSection = ({ scrollToSection }: FooterSectionProps) => {
  const contactInfo = [
    {
      icon: Phone,
      text: "+94 71 118 6028",
      href: "tel:+94711186028",
    },
    {
      icon: Mail,
      text: "info@cenzios.com",
      href: "mailto:info@cenzios.com",
    },
    {
      icon: Globe,
      text: "www.cenzios.com",
      href: "https://www.cenzios.com",
    },
  ];

  const navLinks = [
    { text: "Home", id: "home" },
    { text: "FlowSuite", id: "flowsuite" },
    { text: "Features", id: "features" },
    { text: "Contact Us", id: "contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-[#1F1F1F] text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center sm:text-left">
          {/* Logo and Tagline */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/logo.png"
                alt="FlowSuite Logo"
                className="h-10 w-auto mb-4 mx-auto sm:mx-0"
              />
            </motion.div>
            <p
              className="text-gray-300 leading-relaxed max-w-xs mx-auto sm:mx-0"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              From Your Stockroom to Your Dashboard.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group justify-center sm:justify-start"
              >
                <item.icon className="w-5 h-5 flex-shrink-0 group-hover:text-[#FF4757] transition-colors duration-200" />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  {item.text}
                </span>
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection && scrollToSection(link.id)}
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-center sm:text-left"
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  {link.text}
                </span>
              </button>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <div className="flex gap-4 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2A2A2A] rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#FF4757] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p
            className="text-gray-400 text-center px-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            © 2025 Cenzios. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </footer>
  );
};

export default FooterSection;
