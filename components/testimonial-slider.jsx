'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    title: "No More Troubles",
    content: "Have you ever found yourself struggling to find a trustworthy Garage when move new city? If yes, then Gaadizo is your place go! When I first moved Dehradun from Vadodara, did not know where take my car. That's came across and must say that am really impressed with the quality of service!",
    author: "Varun Puri",
    platform: "Twitter",
    location: "Gaadizo- Prem Nagar, Dehradun",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    title: "Excellent Service",
    content: "The service quality and professionalism at Gaadizo is outstanding. They handled my car with utmost care delivered on time. Highly recommended!",
    author: "Rahul Kumar",
    platform: "Twitter",
    location: "Gaadizo- MG Road, Delhi",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    title: "Transparent Pricing",
    content: "What I love most about Gaadizo is their transparent pricing. No hidden charges, no surprises. They explain everything clearly before starting the work.",
    author: "Priya Singh",
    platform: "Twitter",
    location: "Gaadizo- Sector 18, Noida",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  // Add more testimonials as needed
]

export function TestimonialSliderComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }, 4000)
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying])

  const handleSlideChange = (index) => {
    setCurrentSlide(index)
    // Pause autoplay for a moment when manually changing slides
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  return (
    (<div className="block lg:hidden w-full max-w-md mx-auto p-4">
      <div className="mb-8">
      <h2 className="md:text-sm lg:text-4xl font-bold mb-2">What Our Customers Say</h2>
      <div className="w-12 h-1 bg-red-500" />
    </div>
      <Card className="bg-white shadow-lg">
        <CardContent className="p-6">
          {/* Quote Icon */}
          <div className="mb-4">
            <Quote className="h-8 w-8 text-red-500 transform rotate-180" />
          </div>

          {/* Testimonial Content */}
          <div
            // Fixed height to prevent layout shift
            className="space-y-4 min-h-[200px]"
            // Force re-render for animation
            key={currentSlide}>
            <h3 className="text-xl font-semibold text-gray-900 animate-fade-in">
              {testimonials[currentSlide].title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed animate-fade-in">
              {testimonials[currentSlide].content}
            </p>
          </div>

          {/* Author Info */}
          <div className="mt-6 flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src={testimonials[currentSlide].avatar || "/placeholder.svg"}
                alt={testimonials[currentSlide].author}
                fill
                className="rounded-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900">
                  {testimonials[currentSlide].author}
                </p>
                <span className="text-gray-500 text-sm">
                  {testimonials[currentSlide].platform}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                {testimonials[currentSlide].location}
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-1 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-6 bg-red-500' 
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>)
  );
}