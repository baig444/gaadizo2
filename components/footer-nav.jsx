'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, Clock, Calendar } from 'lucide-react'


const footerSections = [
  {
    title: "ABOUT US",
    items: ["Our Story", "Team", "Careers", "Contact Us", "Blog"]
  },
  {
    title: "OUR SERVICES",
    items: ["Car Service", "Car Repair", "Car Cleaning", "Car Inspection", "Car Accessories"]
  },
  {
    title: "LUXURY BRANDS",
    items: ["BMW", "Mercedes-Benz", "Audi", "Porsche", "Lexus"]
  },
  {
    title: "POPULAR BRANDS",
    items: ["Honda", "Toyota", "Hyundai", "Maruti Suzuki", "Tata"]
  },
  {
    title: "POPULAR AREAS NEAR YOU",
    items: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai"]
  }
]

export function FooterNav() {
  return (
    (<footer className="lg:hidden block bg-[#001524] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Accordion type="multiple" className="space-y-2">
          {footerSections.map((section) => (
            <AccordionItem
              key={section.title}
              value={section.title}
              className="border-b border-slate-800">
              <AccordionTrigger className="text-sm font-medium hover:text-slate-200">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pb-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-slate-400 hover:text-white transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center gap-2">
              <div className="bg-white p-2 rounded-full">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#1A1A1A"/>
                </svg>
              </div>
              <span className="text-2xl font-bold">Gaadizo</span>
            </div>
          </Link>
        </div>

        {/* Address */}
        <div className="mb-8">
          <p className="text-gray-300 max-w-md mx-auto">
            7th Floor, Tower A, Spaze iTech Park,
            <br />
            Sohna - Gurgaon Rd, Block S, Sector 49,
            <br />
            Gurugram, Haryana 122018
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { icon: Facebook, href: '#' },
            { icon: Twitter, href: '#' },
            { icon: Instagram, href: '#' },
            { icon: Youtube, href: '#' },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <social.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-5 w-5 text-gray-400" />
            <Link href="mailto:info@gaadizo.in" className="text-gray-300 hover:text-white">
              info@gaadizo.in
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5 text-gray-400" />
            <Link href="tel:9388893888" className="text-gray-300 hover:text-white">
              9388893888
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <span className="text-gray-300">Monday - Sunday</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-gray-400" />
            <span className="text-gray-300">7:00AM - 9:00PM(IST)</span>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Link href="#" className="transition-opacity hover:opacity-80">
            <Image
              src="/placeholder.svg?height=40&width=135"
              alt="Get it on Google Play"
              width={135}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link href="#" className="transition-opacity hover:opacity-80">
            <Image
              src="/placeholder.svg?height=40&width=135"
              alt="Download on the App Store"
              width={135}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © 2016-{new Date().getFullYear()} Gaadizo
        </div>
      </div>
    </footer>
    </footer>
    )
  );
}