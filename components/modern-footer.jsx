'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Twitter, Linkedin, Youtube, MessageCircle, ChevronRight, Phone, Mail, MapPin } from "lucide-react"

export function ModernFooter() {
  const [activeLocation, setActiveLocation] = useState(null)

  const locations = [
    {
      name: "Delhi",
      icon: MapPin,
      services: [
        "Car Service in Delhi",
        "Dent Paint in Delhi",
        "Car Cleaning in Delhi",
        "Wheel Care in Delhi",
        "AC Service in Delhi",
        "Car Wrapping in Delhi",
        "Nano Coating in Delhi",
        "Car Detailing in Delhi"
      ]
    },
    {
      name: "Gurgaon",
      icon: MapPin,
      services: [
        "Car Service in Gurgaon",
        "Dent Paint in Gurgaon",
        "Car Cleaning in Gurgaon",
        "Wheel Care in Gurgaon",
        "AC Service in Gurgaon",
        "Car Wrapping in Gurgaon",
        "Nano Coating in Gurgaon",
        "Car Detailing in Gurgaon"
      ]
    },
    {
      name: "Noida",
      icon: MapPin,
      services: [
        "Car Service in Noida",
        "Dent Paint in Noida",
        "Car Cleaning in Noida",
        "Wheel Care in Noida",
        "AC Service in Noida",
        "Car Wrapping in Noida",
        "Nano Coating in Noida",
        "Car Detailing in Noida"
      ]
    },
    {
      name: "Ghaziabad",
      icon: MapPin,
      services: [
        "Car Service in Ghaziabad",
        "Dent Paint in Ghaziabad",
        "Car Cleaning in Ghaziabad",
        "Wheel Care in Ghaziabad",
        "AC Service in Ghaziabad",
        "Car Wrapping in Ghaziabad",
        "Nano Coating in Ghaziabad",
        "Car Detailing in Ghaziabad"
      ]
    }
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Partner With Us", href: "/partner" },
    { name: "Login", href: "/login" }
  ]

  const services = [
    "Car Service",
    "Dent Paint",
    "Car Cleaning",
    "Wheel Care",
    "AC Service",
    "Car Wrapping",
    "Nano Coating",
    "Car Detailing"
  ]

  return (
    <footer className="hidden lg:flex relative bg-[#0f172a] text-gray-300 overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0 backdrop-blur-3xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info & Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Gaadizo</h2>
              <p className="text-gray-400">Your trusted partner for premium car care services</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+918388885555" className="hover:text-white transition-colors">
                  +91-83-8888-5555
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:support@gaadizo.com" className="hover:text-white transition-colors">
                  support@gaadizo.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-gray-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <a 
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-400" />
                    <a 
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Locations Dropdown */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-semibold text-white">Our Locations</h3>
              <div className="grid grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <div key={index} className="relative">
                    <button
                      onClick={() => setActiveLocation(activeLocation === location.name ? null : location.name)}
                      className="w-full p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors flex items-center justify-between"
                    >
                      <span>{location.name}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        activeLocation === location.name ? "'rotate-90'" : "''"
                      }`} />
                    </button>
                    <AnimatePresence>
                      {activeLocation === location.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute z-10 left-0 right-0 mt-2 p-4 rounded-lg bg-gray-800/90 backdrop-blur-sm shadow-xl"
                        >
                          <ul className="space-y-2 text-sm">
                            {location.services.map((service, serviceIndex) => (
                              <motion.li
                                key={serviceIndex}
                                whileHover={{ x: 5 }}
                              >
                                <a 
                                  href="#"
                                  className="hover:text-white transition-colors block py-1"
                                >
                                  {service}
                                </a>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 All Rights Reserved by Gaadizo
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/25 transition-shadow"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}