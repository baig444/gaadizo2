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
      tagColor: "bg-green-500"
    },
    {
      icon: Disc,
      name: "Brakes",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bgvM6rqnXOMWiBLCBKQpl47CZvh4h1.png"
    },
    {
      icon: Thermometer,
      name: "AC Parts"
    },
    {
      icon: Timer,
      name: "Clutch",
      tag: "NEW",
      tagColor: "bg-blue-500"
    },
    {
      icon: CircleDot,
      name: "Tyres",
      tag: "SALE",
      tagColor: "bg-green-500"
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
    <section className="py-16 bg-white">
      <div className="max-w-3xl px-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Curated Custom Services</h2>
          <div className="mt-2 w-12 h-1 bg-red-500" />
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg border-gray-200 bg-white hover:bg-gray-50"
            onClick={() => scroll("'left'")}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg border-gray-200 bg-white hover:bg-gray-50"
            onClick={() => scroll("'right'")}
            disabled={currentIndex === services.length - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

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
                  <Card className="w-48 cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="relative aspect-square rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                        {service.tag && (
                          <Badge 
                            className={`absolute top-2 right-2 ${service.tagColor} text-white border-0`}
                          >
                            {service.tag}
                          </Badge>
                        )}
                        <service.icon className="w-12 h-12 text-gray-600" />
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
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-red-500 w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
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