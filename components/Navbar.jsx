import { Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import { PromoBanner } from "./promo-banner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="lg:absolute z-20 w-full max-lg:fixed max-lg:top-0">
      <PromoBanner />
      {/* Navigation */}
      <nav className="flex items-center justify-between p-3 max-lg:bg-white shadow-2xl">
        <div className="flex items-center gap-5">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>               
                  <Menu className="text-[#0066CC] text-3xl cursor-pointer" />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    <div className="w-full flex flex-col items-center bg-white p-4 space-y-4">
<nav className="space-y-2 w-full">
  <Link href="/" className="block text-blue-600 font-bold border-b border-gray-200 pb-4">
    HOME
  </Link>
  <Link href="/services" className="block text-gray-900 border-b border-gray-200 pb-4">
    OUR SERVICES
  </Link>
  <Link href="https://www.gaadizo.com/services/membership" target="_blank" className="block text-gray-900 border-b border-gray-200 pb-4">
    GAADIZO SUPER
  </Link>
  <Link href="https://www.gaadizo.com/home/partners" target="_blank" className="block text-gray-900 border-b border-gray-200 pb-4">
    PARTNERS
  </Link>
  <Link href="/login" className="block text-gray-900 border-b border-gray-200 pb-4">
    LOGIN
  </Link>
  <Link href="https://www.gaadizo.com/home/rewards" target="_blank" className="block text-white bg-blue-500 rounded-full px-4 py-2 text-center">
    MY REWARDS
  </Link>
  <Link href="/more" className="block text-gray-900">
    MORE
  </Link>
</nav>

                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://www.gaadizo.com/images/logo.png"
              alt="Gaadizo"
              className="lg:w-32 w-24"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;