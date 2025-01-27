import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, X, Fuel } from "lucide-react"
import { Dialog, DialogContent } from "../components/ui/dialog"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

const carBrands = [
  { name: "'Maruti Suzuki'", logo: "'/placeholder.svg?height=40&width=40'" },
  { name: "'Hyundai'", logo: "'/placeholder.svg?height=40&width=40'" },
  { name: "'Tata'", logo: "'/placeholder.svg?height=40&width=40'" },
  { name: "'Honda'", logo: "'/placeholder.svg?height=40&width=40'" },
  { name: "'Toyota'", logo: "'/placeholder.svg?height=40&width=40'" },
  { name: "'Mahindra'", logo: "'/placeholder.svg?height=40&width=40'" },
]

const carModels = {
  "'Maruti Suzuki'": ["'Swift'", "'Baleno'", "'Dzire'", "'Brezza'", "'Ertiga'"],
  "'Hyundai'": ["'i20'", "'Venue'", "'Creta'", "'Verna'"],
  "'Tata'": ["'Nexon'", "'Harrier'", "'Safari'", "'Punch'"],
  "'Honda'": ["'City'", "'Amaze'", "'WR-V'", "'Jazz'"],
  "'Toyota'": ["'Fortuner'", "'Innova'", "'Glanza'", "'Urban Cruiser'"],
  "'Mahindra'": ["'XUV700'", "'Thar'", "'Scorpio'", "'XUV300'"],
}

const fuelTypes = [
  { type: "'Petrol'", logo: "'/placeholder.svg?height=40&width=40'" },
  { type: "'Diesel'", logo: "'/placeholder.svg?height=40&width=40'" },
  { type: "'CNG'", logo: "'/placeholder.svg?height=40&width=40'" },
  { type: "'Electric'", logo: "'/placeholder.svg?height=40&width=40'" },
]

export function CarServiceFormComponent() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [step, setStep] = useState("brand")
  const [selectedBrand, setSelectedBrand] = useState(" ")
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
    setSelectedBrand(" ")
    setSelectedModel(" ")
    setSelectedFuel(" ")
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl space-y-6">
        {/* Location Selector */}
        <div className="mb-4">
          <div className="relative">
            <select className="w-full p-3 border border-neutral-200 rounded-lg appearance-none bg-white pr-10 dark:border-neutral-800">
              <option>DELHI</option>
              <option>MUMBAI</option>
              <option>BANGALORE</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Car Selector */}
        <div className="mb-4">
          <Button
            variant="outline"
            className="w-full justify-between"
            onClick={() => setIsDialogOpen(true)}
          >
            {selectedBrand && selectedModel && selectedFuel
              ? `${selectedBrand} ${selectedModel} - ${selectedFuel}`
              : "Select Your Car"}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Input */}
        <div className="mb-6">
          <Input
            type="tel"
            placeholder="ENTER MOBILE NUMBER"
            className="w-full p-3 border border-neutral-200 rounded-lg dark:border-neutral-800"
          />
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg mb-6">
          CHECK PRICES FOR FREE
        </Button>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm space-x-10">
          <div className="flex items-center gap-1">
            <span className="text-green-600">★</span>
            <span className="font-semibold">4.7/5</span>
            <span className="text-gray-600">based on 100k+ Reviews</span>
          </div>
          <div>
            <span className="font-semibold">2 Million+</span>
            <span className="text-gray-600 block text-xs">Happy Customers</span>
          </div>
        </div>
      </div>

      {/* Car Selection Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-sm p-0">
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
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

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
                  className="grid gap-2"
                >
                  <div className="mb-4">
                    <Button
                      variant="ghost"
                      onClick={() => setStep("'brand'")}
                      className="text-sm text-gray-600"
                    >
                      ← Back to brands
                    </Button>
                  </div>
                  {carModels[selectedBrand].map((model) => (
                    <Button
                      key={model}
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => handleModelSelect(model)}
                    >
                      {model}
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
                      onClick={() => setStep("'model'")}
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