import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Apple, PlayIcon as PlayStore } from "lucide-react"
import { Button } from "../components/ui/button"

export function AppDownloadComponent() {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true })

  const stats = [
    {
      value: "3 Million+",
      label: "Cars Serviced",
      startValue: 0,
      endValue: 3
    },
    {
      value: "15 Lacs+",
      label: "Happy Customers",
      startValue: 0,
      endValue: 15
    },
    {
      value: "4.7★",
      label: "Average Rating",
      startValue: 0,
      endValue: 4.7
    },
    {
      value: "850+",
      label: "Touch Points in India",
      startValue: 0,
      endValue: 850
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl px-3">
        <div className="grid lg:grid-cols-1 gap-12">
          {/* Left Column - App Info */}
          <div className="space-y-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:text-sm lg:text-4xl font-bold mb-4"
              >
                Download the Gaadizo App
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "3rem" }}
                transition={{ delay: 0.3 }}
                className="h-1 bg-[#3399FF]"
              />
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-lg"
            >
              Experience hassle-free car service booking and management with our mobile app. 
              Get exclusive offers, real-time updates, and more!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-2"
            >
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-3 py-6 rounded-xl"
                onClick={() => window.open("'#'", "'_blank'")}
              >
                <Apple className="w-6 h-6 mr-2" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="lg:text-lg font-semibold">App Store</div>
                </div>
              </Button>

              <Button 
                className="bg-black hover:bg-gray-800 text-white px-3 py-6 rounded-xl"
                onClick={() => window.open("'#'", "'_blank'")}
              >
                <PlayStore className="w-6 h-6 mr-2" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="lg:text-lg font-semibold">Google Play</div>
                </div>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:max-w-[75%]">
        <div className="hidden lg:grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-8 items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <div className="flex items-center justify-center gap-1">
                <span className="text-md md:text-4xl font-bold text-gray-900">
                  {stat.value}
                </span>
                {stat.icon && (
                  <stat.icon className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                )}
                {stat.unit && (
                  <span className="text-xl md:text-2xl font-semibold text-gray-700">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
        </div>

        {/* Mobile App Preview */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-3xl" />
            <img
              src=""
              alt="Gaadizo App"
              className="relative rounded-2xl shadow-2xl h-96 w-96 object-cover object-top"
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}