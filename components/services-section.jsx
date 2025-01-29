import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: "Periodic Services",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M10 8h28a2 2 0 012 2v28a2 2 0 01-2 2H10a2 2 0 01-2-2V10a2 2 0 012-2z" fill="#FFE5E5"/>
        <path d="M36 16H12M36 24H12M36 32H12" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 8v32M16 8v32M32 8v32" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "AC Service & Repair",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z" fill="#FFE5E5"/>
        <path d="M24 16v16M16 24h16" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Batteries",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="12" width="32" height="24" rx="2" fill="#FFE5E5"/>
        <path d="M16 12v-4h16v4M20 20v8M28 20v8" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Tyres & Wheel Care",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" fill="#FFE5E5"/>
        <circle cx="24" cy="24" r="6" stroke="#FF4C4C" strokeWidth="2"/>
        <path d="M24 14v4M24 30v4M34 24h-4M18 24h-4" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Denting & Painting",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M12 36l24-24M36 36L12 12" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="16" fill="#FFE5E5"/>
      </svg>
    )
  },
  {
    title: "Detailing Services",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="16" width="32" height="16" rx="2" fill="#FFE5E5"/>
        <path d="M16 20l4 4-4 4M32 20l-4 4 4 4" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Car Spa & Cleaning",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M8 16h32v20H8z" fill="#FFE5E5"/>
        <path d="M14 24h20M14 30h20" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Car Inspections",
    isNew: true,
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="12" y="8" width="24" height="32" rx="2" fill="#FFE5E5"/>
        <path d="M18 16h12M18 24h12M18 32h8" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Windshields & Lights",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M8 16h32l-4 20H12L8 16z" fill="#FFE5E5"/>
        <path d="M16 24h16" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Suspension & Fitments",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M16 8l16 32M32 8L16 40" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Clutch & Body Parts",
    isNew: true,
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" fill="#FFE5E5"/>
        <path d="M24 14v20M14 24h20" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: "Insurance Claims",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M24 4l16 8v12c0 8.837-7.163 16-16 16S8 32.837 8 24V12l16-8z" fill="#FFE5E5"/>
        <path d="M24 16v8M24 28h.01" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  }
]

export function ServicesSection() {
  return (
    <div className="lg:max-w-[65%] px-2 py-8">
       <div className="mb-8 px-5 ">
         <h2 className="md:text-sm lg:text-4xl font-bold mb-2">Our Services</h2>
         <div className="w-12 h-1 bg-[#3399FF] mb-4" />
         <h1 className="lg:text-xl text-gray-600">Experience Premium Car care Services</h1>
         </div>
         <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-6 gap-4 items-start text-center">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-col items-center justify-between h-full p-4"
    >
      <Link href="#" className="block w-full">
        <div className="flex flex-col items-center justify-center space-y-2 h-full">
          <div className="w-12 h-12 flex items-center justify-center">{service.icon}</div> 
          {/* Ensures uniform icon size */}
          <h3 className="text-sm font-medium text-gray-900">{service.title}</h3>
          {service.isNew && (
            <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              New
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  ))}
</div>

    </div>
  )
}