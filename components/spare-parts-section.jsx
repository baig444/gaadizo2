import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Shield, Clock, BadgeCheck, Timer } from "lucide-react"
import { Button } from "../components/ui/button"

export function SparePartsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const brands = [
    {
      name: "Bosch",
      logo: "/placeholder.svg?height=80&width=160",
      color: "#ED0007"
    },
    {
      name: "Valeo",
      logo: "/placeholder.svg?height=80&width=160",
      color: "#7AB51D"
    },
    {
      name: "Mahle",
      logo: "/placeholder.svg?height=80&width=160",
      color: "#004B93"
    },
    {
      name: "NGK",
      logo: "/placeholder.svg?height=80&width=160",
      color: "#E60012"
    },
    {
      name: "Continental",
      logo: "/placeholder.svg?height=80&width=160",
      color: "#FFA500"
    },
    {
      name: "Denso",
      logo: "/placeholder.svg?height=80&width=160",
      color: "#005BAC"
    }
  ]

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex + 1 >= brands.length - 3 ? 0 : prevIndex + 1
        )
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [isHovered])

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= brands.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? brands.length - 4 : prevIndex - 1
    )
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-3xl px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Original Spare Parts
            </h2>
            <div className="mt-2 w-12 h-1 bg-red-500 mb-4" />
            </div>
            <p className="text-xl text-neutral-500 dark:text-neutral-400">
              Extended Warranty with Gaadizo
            </p>
          </motion.div>
        </div>

        <div className="relative mb-20" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white rounded-full w-12 h-12"
            onClick={prev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white rounded-full w-12 h-12"
            onClick={next}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="overflow-hidden px-12">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: `-${currentIndex * (100 / 4)}%`
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut"
              }}
            >
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-1/4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div 
                    className="bg-white rounded-xl p-8 flex items-center justify-center h-40 group hover:shadow-xl transition-all duration-300 border border-neutral-200 border-gray-100 dark:border-neutral-800"
                    style={{
                      background: `linear-gradient(135deg, white 0%, ${brand.color}08 100%)`
                    }}
                  >
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      className="max-w-[160px] h-auto opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Shield,
              title: "Genuine Parts",
              description: "100% authentic spare parts from authorized dealers",
              color: "blue"
            },
            {
              icon: Clock,
              title: "Extended Warranty",
              description: "Up to 2 years warranty on parts and service",
              color: "green"
            },
            {
              icon: BadgeCheck,
              title: "Best Prices",
              description: "Competitive prices on all spare parts",
              color: "purple"
            },
            {
              icon: Timer,
              title: "Quick Service",
              description: "Fast delivery and professional installation",
              color: "orange"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="text-center space-y-4">
                <div className={`mx-auto w-16 h-16 rounded-xl bg-${feature.color}-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-500`} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-xl">{feature.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed dark:text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}