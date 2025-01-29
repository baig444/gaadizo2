
import { Car, Menu } from "lucide-react"
import { Button } from "../components/ui/button"
import { PromoBanner } from "./promo-banner"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <div className="lg:absolute z-10 w-full max-lg:fixed max-lg:top-0">
      <PromoBanner/>
     {/* Navigation */}
     <nav className=" flex items-center justify-between p-3 max-lg:bg-white shadow-2xl">
        <div className="flex items-center gap-5">
        <div className="lg:hidden">
        <Sheet>
  <SheetTrigger><Menu className="text-[#0066CC] text-3xl cursor-pointer" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetDescription>
      <div className="w-full flex flex-col items-center bg-white p-4 space-y-4">
      <nav className="space-y-2">
        <a href="#" className="block text-blue-600 font-bold border-b border-gray-200 pb-4">HOME</a>
        <a href="#" className="block text-gray-900 border-b border-gray-200 pb-4">OUR SERVICES</a>
        <a href="#" className="block text-gray-900 border-b border-gray-200 pb-4">GAADIZO SUPER</a>
        <a href="#" className="block text-gray-900 border-b border-gray-200 pb-4">PARTNERS</a>
        <a href="#" className="block text-gray-900 border-b border-gray-200 pb-4">LOGIN</a>
        <a href="#" className="block text-white bg-blue-500 rounded-full px-4 py-2">
          MY REWARDS
        </a>
        <a href="#" className="block text-gray-900">MORE</a>
      </nav>
    </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
          <div className="flex items-center">
            <img src="https://www.gaadizo.com/images/logo.png" alt="Gaadizo" className="lg:w-32 w-24" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
