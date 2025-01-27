import { motion } from "framer-motion"
import { Check, Percent } from "lucide-react"

export function PriceComparison() {
  const services = [
    {
      name: "Engine Oil service package",
      ourPrice: 2799,
      marketPrice: 4500,
      savings: 38
    },
    {
      name: "Complete wheel care",
      ourPrice: 999,
      marketPrice: 1350,
      savings: 26
    },
    {
      name: "Suspension Inspection",
      ourPrice: 499,
      marketPrice: 850,
      savings: 41
    },
    {
      name: "Front bumper paint",
      ourPrice: 2599,
      marketPrice: 4000,
      savings: 35
    },
    {
      name: "Full body paint",
      ourPrice: 28350,
      marketPrice: 39000,
      savings: 27
    },
    {
      name: "Front Brake Pads Replacement",
      ourPrice: 1799,
      marketPrice: 2800,
      savings: 36
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Miles ahead... also, in{"'"}
              <span className="text-orange-500">SAVINGS</span>
            </h2>
            <p className="text-neutral-500 text-lg dark:text-neutral-400">
              Price comparison of different services
            </p>
          </motion.div>
        </div>

        <div className="relative overflow-x-auto rounded-xl shadow-lg bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-6 bg-gray-50">Packages</th>
                <th className="p-6 bg-orange-50 relative">
                  <div className="absolute -top-1 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-b-lg flex items-center gap-1">
                    <Percent className="w-3 h-3" />
                    SAVE 30%
                  </div>
                  <span className="text-orange-600 font-semibold">Gaadizo Pricing</span>
                </th>
                <th className="p-6 bg-gray-50">
                  <span className="text-gray-600 font-semibold">Service Center Pricing</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b last:border-0 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="p-6 text-gray-900">{service.name}</td>
                  <td className="p-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-semibold text-orange-600">₹{service.ourPrice}</span>
                      <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Save {service.savings}%
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center justify-center">
                      <span className="text-gray-500">₹{service.marketPrice}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            * Prices are indicative and may vary based on car model and condition
          </p>
        </motion.div>
      </div>
    </section>
  )
}