import { motion } from "framer-motion"
import { Car, Search, ShieldCheck, Phone, PenToolIcon as Tool, Banknote, ArrowRight, Clock, Settings, BadgeCheck, Shield, Wrench } from "lucide-react"

export function WhyChooseSection() {
  const benefits = [
    {
      icon: Car,
      title: "Free Pick up & Drop",
      description: "Convenient doorstep service"
    },
    {
      icon: Search,
      title: "Transparency",
      description: "Clear pricing and service details"
    },
    {
      icon: Banknote,
      title: "Upfront Pricing",
      description: "No hidden charges"
    },
    {
      icon: ShieldCheck,
      title: "Quality Promise",
      description: "Guaranteed satisfaction"
    },
    {
      icon: BadgeCheck,
      title: "Service Quality",
      description: "Expert technicians"
    },
    {
      icon: Wrench,
      title: "Technical Expertise",
      description: "Specialized knowledge"
    }
  ]

  const steps = [
    {
      icon: Search,
      title: "Submit Enquiry",
      description: "Share your car details & service requirements"
    },
    {
      icon: Phone,
      title: "Get a Call from Service Advisor",
      description: "Our expert will guide you with the right service"
    },
    {
      icon: Car,
      title: "Get Free Pick Up & Drop",
      description: "We'll collect your car from location"
    },
    {
      icon: Settings,
      title: "Track Your Car Repairs",
      description: "Real-time updates on service progress"
    },
    {
      icon: Shield,
      title: "Delivery & Payment",
      description: "Secure payment after service completion"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl px-8">
        {/* Benefits Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Gaadizo</h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400">
              Experience the best car service with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white hover:shadow-lg transition-shadow max-w-fit"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">How Gaadizo Works</h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400">
              Simple steps to get your car serviced
            </p>
          </motion.div>

          <div className="grid gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-8"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-blue-500" />
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="absolute top-full left-1/2 h-8 w-px bg-blue-100" />
                  )}
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{step.description}</p>
                </div>
                {index !== steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-blue-300 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}