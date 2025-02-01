"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"

export function ScrollableNavComponent() {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [activeLink, setActiveLink] = useState("our-services")

  const navigationItems = [
    { id: "our-services", label: "Our Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "FAQ", label: "FAQs" },
    { id: "custom-service", label: "Curated Custom Service" },
    { id: "download", label: "Download" },
    { id: "spare", label: "Original Spare" },
    { id: "why-choose", label: "Why Choose Gaadizo" },
    { id: "price", label: "Price" },
    { id: "how-works", label: "How Gaadizo Works" },
  ]

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    window.addEventListener("resize", checkScrollButtons)
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, [])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      })
    }
  }

  return (
    (<div className=" sticky top-0 z-50">
      <div className="lg:max-w-[65%] px-4 m-2 sm:px-6 lg:px-8 relative bg-white shadow-md">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Scroll left">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}

        {/* Navigation Items */}
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide py-4"
          onScroll={checkScrollButtons}>
          <div className="flex space-x-8 min-w-max px-4">
            {navigationItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className={`
                  cursor-pointer whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors
                  ${activeLink === item.id 
                    ? "text-gray-900 border-b-2 border-red-500" 
                    : "text-gray-600 hover:text-gray-900"
                  }
                `}
                onClick={() => setActiveLink(item.id)}>
                {item.label}
              </ScrollLink>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Scroll right">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        )}
      </div>
      {/* Add this style to hide the scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>)
  );
}