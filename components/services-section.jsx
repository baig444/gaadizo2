import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { ChevronDown, Star, X } from 'lucide-react'
import {AnimatePresence } from "framer-motion"

const services = [
  {
    title: "Periodic Services",
    icon: 'https://5.imimg.com/data5/NC/NB/GLADMIN-13854717/periodic-maintenance-service-250x250.png'
  },
  {
    title: "AC Service & Repair",
    icon: 'https://cdn2.iconfinder.com/data/icons/auto-care/64/car_AC_repair_and_maintanance-512.png'
  },
  {
    title: "Batteries",
    icon: 'https://cdn-icons-png.flaticon.com/512/4238/4238359.png'
  },
  {
    title: "Tyres & Wheel Care",
    icon: 'https://media.istockphoto.com/id/925225598/vector/tire-icon.jpg?s=612x612&w=0&k=20&c=ds1HTmJVIV-LWYOlLicZAc-Y6AxTab5WD6zgq0_21YU='
  },
  {
    title: "Denting & Painting",
    icon: 'https://goldcoast2pacpainting.com.au/wp-content/uploads/2022/05/PAINT-RESTORATION-REPAIR.png'
  },
  {
    title: "Detailing Services",
    icon: './8.png'
  },
  {
    title: "Car Spa & Cleaning",
    icon: './6.png'
  },
  {
    title: "Car Inspections",
    isNew: true,
    icon: './ins.png'
  }
]

const carBrands = [
  { name: "Maruti Suzuki", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9.jpeg" },
  { name: "Hyundai", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7.jpeg" },
  { name: "Tata", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-14.jpeg" },
  { name: "Honda", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-6.jpeg" },
  { name: "Toyota", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-15.jpeg" },
  { name: "Mahindra", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-8.jpeg" },
]

const carModels = {
  "Maruti Suzuki": [
    { name: "Swift", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-240.jpeg" },
    { name: "Baleno", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-205.jpeg" },
    { name: "Dzire", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-243.jpeg" },
    { name: "Brezza", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-481.jpeg" },
    { name: "Ertiga", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-216.jpeg" },
  ],
  "Hyundai": [
    { name: "i20", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-154.jpeg" },
    { name: "Venue", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-513.jpeg" },
    { name: "Creta", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-135.jpeg" },
    { name: "Verna", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-177.jpeg" },
  ],
  "Tata": [
    { name: "Nexon", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-14-model-485.jpeg" },
    { name: "Harrier", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-14-model-508.jpeg" },
    { name: "Safari", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-14-model-336.jpeg" },
    { name: "Punch", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-14-model-590.jpeg" },
  ],
  "Honda": [
    { name: "City", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-6-model-115.jpeg" },
    { name: "Amaze", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-6-model-107.jpeg" },
    { name: "WR-V", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-6-model-477.jpeg" },
    { name: "Jazz", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-6-model-123.jpeg" },
  ],
  "Toyota": [
    { name: "Fortuner", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-15-model-362.jpeg" },
    { name: "Innova", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-15-model-489.jpeg" },
    { name: "Glanza", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-15-model-520.jpeg" },
    { name: "Urban Cruiser", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-15-model-562.jpeg" },
  ],
  "Mahindra": [
    { name: "XUV700", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-8-model-580.jpeg" },
    { name: "Thar", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-8-model-190.jpeg" },
    { name: "Scorpio", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-8-model-188.jpeg" },
    { name: "XUV300", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-8-model-510.jpeg" },
  ],
};

const fuelTypes = [
  { type: "Petrol", logo: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/DIESEL.svg" },
  { type: "Diesel", logo: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/PETROL.svg" },
  { type: "CNG", logo: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/CNG.svg" },
  { type: "Electric", logo: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/electric.svg" },
]

export function ServicesSection() {
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


  return (
    <div id='our-services' className="lg:max-w-[65%] px-2 py-8">
       <div className="mb-8 px-5 ">
         <h2 className="md:text-sm lg:text-4xl font-bold mb-2">Our Services</h2>
         <div className="w-12 h-1 bg-[#3399FF] mb-4" />
         <h1 className="lg:text-xl text-gray-600 font-light">Experience Premium Car care Services</h1>
         </div>
         <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-6  items-start text-center">
  {services.map((service, index) => (
    <motion.div
      key={index}
      onClick={() => setSelectedService(service)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-col items-center h-full p-3"
    >
      <Dialog>
      <DialogTrigger asChild>
        <div className="block w-full cursor-pointer">
        <div className="flex flex-col items-center justify-center space-y-2 h-full">
          <div className="w-16 h-16 flex items-center justify-center">
            <img src={service.icon} alt={service.title} className='w-16 h-16 object-contain' />
            </div> 
          {/* Ensures uniform icon size */}
          <h3 className="text-xs font-medium text-gray-900">{service.title}</h3>
          {service.isNew && (
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              New
            </span>
          )}
        </div>
      </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <div className="space-y-6">
        {/* Location Selector */}
    <h1 className="text-lg lg:text-3xl font-bold text-center lg:text-left">
      Experience The Best {selectedService?.title} In Gurgaon
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
  )
}