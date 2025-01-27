import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What services does Gaadizo offer?",
    answer: "Gaadizo offers comprehensive car care services including general servicing, AC repair, cleaning, denting and painting, mechanical repairs, wheel care."
  },
  {
    question: "How do I book a service with Gaadizo?",
    answer: "Booking is easy through our website, mobile app, or customer service number. Select your car model, choose a service, and pick time slot - we'll handle the rest!"
  },
  {
    question: "Are your mechanics certified?",
    answer: "Yes, all our mechanics are certified professionals with extensive experience, regularly trained on the latest automotive technologies."
  },
  {
    question: "Do you offer doorstep services?",
    answer: "Yes, we provide convenient doorstep pickup and drop-off services for all our customers."
  },
  {
    question: "What kind of parts do you use for repairs?",
    answer: "We use genuine OEM parts or high-quality equivalents to ensure optimal performance and longevity for your vehicle."
  },
  {
    question: "How long does a typical car service take?",
    answer: "Service duration varies, but a standard service usually takes 3-4 hours. We provide estimated completion times upon booking."
  },
  {
    question: "Do you provide a warranty on your services?",
    answer: "Yes, we offer warranties on all services and repairs. The warranty period varies based the service or part replaced."
  },
  {
    question: "How do your prices compare to authorized service centers?",
    answer: "Our prices are typically 30-40% lower than authorized centers, without compromising on quality, thanks to our efficient operations."
  },
  {
    question: "Can I get a quote before booking service?",
    answer: "Yes, you can get a free, transparent quote through our website or app by entering your car details and desired service."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "Customer satisfaction is our priority. If you're not happy, contact support team immediately, and we'll work to resolve any issues promptly."
  }
]

export function ModernFaqSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl px-8">
        <div>
        <h2 className="text-4xl font-bold mb-2">Frequently Asked Questions</h2>
        <div className="w-12 h-1 bg-red-500 mb-16" />
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: activeIndex === index ? "#F3F4F6" : "#FFFFFF" }}
              transition={{ duration: 0.3 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium pr-8">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {activeIndex === index ? (
                      <Minus className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 py-6">
                      <motion.p
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, y: 0 },
                          collapsed: { opacity: 0, y: -10 }
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-gray-600"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}