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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl px-8">
        <div className="grid lg:grid-cols-1 gap-12">
          {/* Left Column - App Info */}
          <div className="space-y-8">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-4"
              >
                Download the Gaadizo App
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "3rem" }}
                transition={{ delay: 0.3 }}
                className="h-1 bg-red-500"
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
              className="flex flex-wrap gap-4"
            >
              <Button 
                className="bg-black hover:bg-gray-800 text-white px-6 py-6 rounded-xl"
                onClick={() => window.open("'#'", "'_blank'")}
              >
                <Apple className="w-6 h-6 mr-2" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Button>

              <Button 
                className="bg-black hover:bg-gray-800 text-white px-6 py-6 rounded-xl"
                onClick={() => window.open("'#'", "'_blank'")}
              >
                <PlayStore className="w-6 h-6 mr-2" />
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div 
            ref={statsRef}
            className="grid grid-cols-2 max-w-lg"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1 
                  }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile App Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 blur-3xl" />
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Gaadizo App Preview"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}