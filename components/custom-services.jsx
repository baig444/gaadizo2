import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Battery, Disc, Thermometer, CircleDot, Timer } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

export function CustomServicesComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)

  const services = [
    {
      icon: Battery,
      name: "Batteries",
      tag: "SALE",
      tagColor: "bg-green-500",
      image: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/battery_image_for_curated_section_large/liveguard-battery-140.png"
    },
    {
      icon: Disc,
      name: "Brakes",
      image: "./brake.png"
    },
    {
      icon: Thermometer,
      name: "AC Parts",
      image: "./acc.png"
    },
    {
      icon: Timer,
      name: "Clutch",
      tag: "NEW",
      tagColor: "bg-blue-500",
      image: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png"
    },
    {
      icon: CircleDot,
      name: "Tyres",
      tag: "SALE",
      tagColor: "bg-green-500",
      image: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/car_parts_icons/brakes_2/xxhdpi.png"
    }
  ]

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      
      // Update current index
      const newIndex = direction === "left" 
        ? Math.max(0, currentIndex - 1)
        : Math.min(services.length - 1, currentIndex + 1)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <section className="py-12 bg-white">
      <div className="lg:max-w-[65%] px-3">
        <div className="mb-8">
          <h2 className="md:text-sm lg:text-4xl font-bold mb-2">Curated Custom Services</h2>
          <div className="mt-2 w-12 h-1 bg-[#3399FF]" />
        </div>

        <div className="relative">
          {/* Navigation Buttons */}

          {/* Services Slider */}
          <div 
            ref={containerRef}
            className="scrollbar overflow-x-auto"
          >
            <div className="flex gap-6 min-w-max pb-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="w-48 cursor-pointer bg-transparent border-none">
                    <CardContent className="p-4">
                      <div className="relative aspect-square rounded-lg  mb-4 flex items-center justify-center">
                        {service.tag && (
                          <Badge 
                            className={`absolute top-2 right-2 ${service.tagColor} text-white border-0`}
                          >
                            {service.tag}
                          </Badge>
                        )}
                        <img src={service.image} alt={service.name} />
                      </div>
                      <h3 className="font-medium text-center">{service.name}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 `}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}