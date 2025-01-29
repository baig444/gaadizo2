import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, X, Fuel, Star } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

const carBrands = [
  { name: "Maruti Suzuki", logo: "/placeholder.svg?height=40&width=40" },
  { name: "Hyundai", logo: "/placeholder.svg?height=40&width=40" },
  { name: "Tata", logo: "/placeholder.svg?height=40&width=40" },
  { name: "Honda", logo: "/placeholder.svg?height=40&width=40" },
  { name: "Toyota", logo: "/placeholder.svg?height=40&width=40" },
  { name: "Mahindra", logo: "/placeholder.svg?height=40&width=40" },
]

const carModels = {
  "Maruti Suzuki": [
    { name: "Swift", image: "/images/models/swift.png" },
    { name: "Baleno", image: "/images/models/baleno.png" },
    { name: "Dzire", image: "/images/models/dzire.png" },
    { name: "Brezza", image: "/images/models/brezza.png" },
    { name: "Ertiga", image: "/images/models/ertiga.png" },
  ],
  "Hyundai": [
    { name: "i20", image: "/images/models/i20.png" },
    { name: "Venue", image: "/images/models/venue.png" },
    { name: "Creta", image: "/images/models/creta.png" },
    { name: "Verna", image: "/images/models/verna.png" },
  ],
  "Tata": [
    { name: "Nexon", image: "/images/models/nexon.png" },
    { name: "Harrier", image: "/images/models/harrier.png" },
    { name: "Safari", image: "/images/models/safari.png" },
    { name: "Punch", image: "/images/models/punch.png" },
  ],
  "Honda": [
    { name: "City", image: "/images/models/city.png" },
    { name: "Amaze", image: "/images/models/amaze.png" },
    { name: "WR-V", image: "/images/models/wrv.png" },
    { name: "Jazz", image: "/images/models/jazz.png" },
  ],
  "Toyota": [
    { name: "Fortuner", image: "/images/models/fortuner.png" },
    { name: "Innova", image: "/images/models/innova.png" },
    { name: "Glanza", image: "/images/models/glanza.png" },
    { name: "Urban Cruiser", image: "/images/models/urban-cruiser.png" },
  ],
  "Mahindra": [
    { name: "XUV700", image: "/images/models/xuv700.png" },
    { name: "Thar", image: "/images/models/thar.png" },
    { name: "Scorpio", image: "/images/models/scorpio.png" },
    { name: "XUV300", image: "/images/models/xuv300.png" },
  ],
};

const fuelTypes = [
  { type: "Petrol", logo: "/placeholder.svg?height=40&width=40" },
  { type: "Diesel", logo: "/placeholder.svg?height=40&width=40" },
  { type: "CNG", logo: "/placeholder.svg?height=40&width=40" },
  { type: "Electric", logo: "/placeholder.svg?height=40&width=40" },
]

export function CarServiceFormComponent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [step, setStep] = useState("brand")
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedFuel, setSelectedFuel] = useState("")

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
    <div className="md:w-full w-full">
      <div className="bg-white rounded-sm lg:p-6 pt-8 space-y-6 lg:shadow-lg min-h-[60vh]">
        {/* Location Selector */}
        <h1 className="text-lg lg:text-3xl font-bold text-center lg:text-left">Experience The Best
        Car Services In Gurgaon</h1>
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
            className="w-full p-3 border border-neutral-300 rounded-xs dark:border-neutral-800 outline-none"
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
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-sm p-0">
          {/* Dialog Title for Accessibility */}
          <DialogTitle asChild>
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Select Your Car</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setIsDialogOpen(false)
                    resetSelection()
                  }}
                  aria-label="Close dialog"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogTitle>

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
        className="h-auto py-4 flex flex-col gap-2"
        onClick={() => handleModelSelect(model)}
      >
        <img
          src={model.image} // Replace this with actual model images
          alt={model}
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
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
    </div>
  )
}
