
import { Car, Menu } from "lucide-react"
import { Button } from "../components/ui/button"
import { PromoBanner } from "./promo-banner"
const Navbar = () => {
  return (
    <div className="lg:absolute z-10 w-full h-16 max-md:fixed max-md:top-0">
      <PromoBanner/>
     {/* Navigation */}
     <nav className=" flex items-center justify-between p-4 max-md:bg-white shadow-xl">
        <div className="flex items-center gap-5">
        <div className="lg:hidden">
        <Menu className="text-[#0066CC] text-3xl" />
        </div>
          <div className="flex items-center">
            <img src="https://www.gaadizo.com/images/logo.png" alt="Gaadizo" className="w-32" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
