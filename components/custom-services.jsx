import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Battery, Disc, Thermometer, CircleDot, Timer, ChevronDown, Star, X } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import {AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { carBrands, carModels, fuelTypes } from "@/utils/constant"

export function CustomServicesComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [step, setStep] = useState("brand")
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedFuel, setSelectedFuel] = useState("")
  const [selectedService, setSelectedService] = useState(null);

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand)
    setStep("model")
  }

  const handleModelSelect = (model) => {
    setSelectedModel(model)
    setStep("fuel")
  }

  const handleFuelSelect = (fuel) => {
    setSelectedFuel(fuel)
    setIsDialogOpen(false)
    setStep("brand")
  }

  const resetSelection = () => {
    setStep("brand")
    setSelectedBrand("")
    setSelectedModel("")
    setSelectedFuel("")
  }


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
      image: "https://m.media-amazon.com/images/I/81SWL5jTjZL.jpg"
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
    <section id="custom-service" className="py-5 bg-white">
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
            <div className="flex min-w-max">
              {services.map((service, index) => (
                <motion.div
                onClick={() => setSelectedService(service)}
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Dialog>
                  <DialogTrigger asChild>
                  <Card className="lg:w-40 w-32 cursor-pointer bg-transparent border-none">
                    <CardContent className="">
                      <div className="relative rounded-lg flex items-center justify-center">
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
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
      <div className="space-y-6">
        {/* Location Selector */}
    <h1 className="text-lg lg:text-3xl font-bold text-center lg:text-left">
      Experience The Best {selectedService?.name} Service In Gurgaon
    </h1>
        <div className="mb-4">
          <div className="relative">
            <select className="w-full h-12 p-2 border border-neutral-300 rounded-xs appearance-none bg-white pr-10 dark:border-neutral-800">
              <option>DELHI</option>
              <option>MUMBAI</option>
              <option>BANGALORE</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black w-4" />
          </div>
        </div>

        {/* Car Selector */}
        <div className="mb-4">
          <Button
          size="lg"
            variant="outline"
            className="w-full justify-between rounded-xs border border-neutral-300"
            onClick={() => setIsDialogOpen(true)}
          >
            {selectedBrand && selectedModel && selectedFuel
              ? `${selectedBrand} ${selectedModel.name} - ${selectedFuel}`
              : "Select Your Car"}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Input */}
        <div className="mb-6">
          <Input
            type="tel"
            placeholder="ENTER MOBILE NUMBER"
            className="w-full p-2 border border-neutral-300 rounded-xs dark:border-neutral-800 outline-none"
          />
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-[#3399FF] text-white py-3 rounded-sm mb-6">
          CHECK PRICES FOR FREE
        </Button>

        {/* Stats */}
        <div className="flex items-center justify-center gap-4">
      {/* Rating Section */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-green-500 text-green-500" />
          <span className="font-semibold lg:text-base text-2xl">4.7</span>
          <span className="text-gray-600 lg:text-base text-2xl">/5</span>
        </div>
        <div className="text-[11px] text-gray-500 whitespace-nowrap">
          Based on 150000+ Reviews
        </div>
      </div>

      {/* Divider */}
      <div className="h-8 w-px bg-gray-800" />

      {/* Customers Section */}
      <div className="flex flex-col items-center">
        <div className="font-semibold lg:text-base text-2xl">2 Million+</div>
        <div className="text-[11px] text-gray-500">
          Happy Customers
        </div>
      </div>
    </div>
      </div>
      {/* Car Selection Dialog */}
     {/* Car Selection Dialog */}
<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  <DialogContent className="max-w-sm p-0">
    {/* Corrected Dialog Title */}
    <div className="p-4 border-b flex justify-between items-center">
      <h2 className="text-xl font-semibold">Select Your Car</h2>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          setIsDialogOpen(false);
          resetSelection();
        }}
        aria-label="Close dialog"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>

    {/* Content */}
    <div className="p-4">
      <AnimatePresence mode="wait">
        {step === "brand" && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid grid-cols-2 gap-4"
          >
            {carBrands.map((brand) => (
              <Button
                key={brand.name}
                variant="outline"
                className="h-auto py-4 flex flex-col gap-2"
                onClick={() => handleBrandSelect(brand.name)}
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-sm">{brand.name}</span>
              </Button>
            ))}
          </motion.div>
        )}

        {step === "model" && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 mb-2">
              <Button
                variant="ghost"
                onClick={() => setStep("brand")}
                className="text-sm text-gray-600"
              >
                ← Back to brands
              </Button>
            </div>
            {carModels[selectedBrand]?.map((model, index) => (
              <Button
                key={model.name}
                variant="outline"
                className="h-auto flex flex-col gap-2"
                onClick={() => handleModelSelect(model)}
              >
                <img
                  src={model.image} 
                  alt={model.name}
                  width={40}
                  height={40}
                  className="w-16 h-16 object-contain"
                />
                <span className="text-sm">{model.name}</span>
              </Button>
            ))}
          </motion.div>
        )}

        {step === "fuel" && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 mb-2">
              <Button
                variant="ghost"
                onClick={() => setStep("model")}
                className="text-sm text-gray-600"
              >
                ← Back to models
              </Button>
            </div>
            {fuelTypes.map((fuel) => (
              <Button
                key={fuel.type}
                variant="outline"
                className="h-auto py-4 flex flex-col gap-2"
                onClick={() => handleFuelSelect(fuel.type)}
              >
                <img
                  src={fuel.logo || "/placeholder.svg"}
                  alt={fuel.type}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-sm">{fuel.type}</span>
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </DialogContent>
</Dialog>

      </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2">
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