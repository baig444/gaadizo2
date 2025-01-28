'use client'
import { X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    (<div className="flex lg:hidden h-16 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto pl-7 flex items-center justify-between px-1">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute left-2 text-white/60 hover:text-white"
          aria-label="Close banner">
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3 mx-auto">
          <div className="bg-red-600 rounded-md p-1.5">
            <svg
              width="20"
              height="20"
              viewBox="0 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="currentColor" />
              <path d="M12 6L7 8.5V13.5L12 16L17 13.5V8.5L12 6Z" fill="#1A1A1A" />
            </svg>
          </div>
          <div className="text-sm">
            Use Code <span className="font-semibold">GAADIZO50</span> on the app & get <span className="font-semibold">UP TO 50% OFF.</span>
          </div>
          <Button
            variant="destructive"
            size="sm"
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-5">
            INSTALL
          </Button>
        </div>
      </div>
    </div>)
  );
}