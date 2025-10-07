import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(-1); // -1 = all closed initially

  const faqs = [
    {
      question: "Can I customize this software according to my business?",
      answer:
        "Yes, our software is fully customizable to meet the specific needs of your business. We work with you to tailor the solution to your exact requirements.",
    },
    {
      question: "How much is the price?",
      answer:
        "Pricing is based on your custom requirements, and we’ll be happy to discuss it after our first call. Don't hesitate to reach out just dial 0711186028 to get started!",
    },
    {
      question: "What about the service period?",
      answer:
        "We offer lifetime support for the software after purchase, ensuring you always have assistance when needed.",
    },
    {
      question: "Are there any maintenance fees?",
      answer:
        "There are no hidden maintenance fees. We offer ongoing support and updates, so you can focus on running your business without worrying about extra costs.",
    },
    {
      question: "Is the software easy to use for non-technical staff?",
      answer:
        "Absolutely! Our software is designed with an intuitive user interface, making it easy for anyone, regardless of technical background, to navigate and use effectively.",
    },
    {
      question: "Is this software scalable as my business grows?",
      answer:
        "Yes, our software is fully scalable. It grows with your business and can be easily upgraded to handle increased demand and additional features.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative min-h-screen bg-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Background Wave Image */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-10"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="images/waves.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* FAQ Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2
            className="text-black leading-tight text-2xl sm:text-3xl lg:text-[26px]"
            style={{
              fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
              fontWeight: 700,
              lineHeight: "1.3",
            }}
          >
            Frequently Asked <span className="text-[#FF4757]">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Question */}
              <motion.button
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left group"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: "#F5F5F5" }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className="text-black pr-3 sm:pr-4 text-base sm:text-lg md:text-xl"
                  style={{
                    fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                    fontWeight: 400, // changed from 600 to 400 (not bold)
                    lineHeight: "1.4",
                  }}
                >
                  {faq.question}
                </span>
                <motion.div
                  className="flex-shrink-0 ml-2"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus
                      className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                      strokeWidth={2.5}
                    />
                  ) : (
                    <Plus
                      className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                      strokeWidth={2.5}
                    />
                  )}
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1">
                      <p
                        className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-[16px]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                          lineHeight: "1.7",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-24 sm:top-32 left-6 sm:left-10 w-12 sm:w-16 h-12 sm:h-16 bg-red-100/30 rounded-full blur-2xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-24 sm:bottom-32 right-10 sm:right-20 w-14 sm:w-20 h-14 sm:h-20 bg-orange-100/20 rounded-full blur-2xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default FAQSection;
