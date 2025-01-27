import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Tag, Wrench, Car, Shield } from "lucide-react"
import { Button } from "../components/ui/button"

export function OfferBanners() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const offers = [
    {
      title: "50% OFF on Periodic Service",
      description: "Book your car service today and get 50% off on labor charges",
      icon: Wrench,
      bg: "https://images.pexels.com/photos/7564870/pexels-photo-7564870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      textColor: "text-white"
    },
    {
      title: "Free Pick-up & Drop",
      description: "Complimentary doorstep pickup and drop for all services",
      icon: Car,
      bg: "https://images.pexels.com/photos/5276374/pexels-photo-5276374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      textColor: "text-white"
    },
    {
      title: "Extended Warranty",
      description: "Get additional 6 months warranty on all spare parts",
      icon: Shield,
      bg: "https://images.pexels.com/photos/7541976/pexels-photo-7541976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      textColor: "text-white"
    },
    {
      title: "First-Time Customer Offer",
      description: "Get ₹500 off on your first service booking",
      icon: Tag,
      bg: "https://images.pexels.com/photos/5276374/pexels-photo-5276374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      textColor: "text-white"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length)
  }

  return (
    <div className="w-full bg-gray-50">
      <div className=" mx-auto">
        <div className="relative overflow-hidden">
          {/* Slides */}
          <div className="relative h-[450px]">
            <AnimatePresence mode="sync">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 1, x: 100 }}
                animate={{ opacity:1, x: 0 }}
                exit={{ opacity: 1, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${offers[currentSlide].textColor} shadow-lg`}
                style={{ backgroundImage: `url(${offers[currentSlide].bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center", 
              }}

              >
                <div className="flex items-center justify-between h-full px-8 md:px-16">
                  <div className="space-y-4 max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {offers[currentSlide].title}
                    </h3>
                    <p className="text-lg opacity-90">
                      {offers[currentSlide].description}
                    </p>
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      Book Now
                    </Button>
                  </div>
                  {/* <div className="hidden md:block">
                  <offers[currentSlide].icon className="w-24 h-24 opacity-90" />
                  </div> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? "'bg-white w-6'" 
                    : "'bg-white/50 hover:bg-white/75'"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}