import { motion } from 'framer-motion'
import Link from 'next/link'

const categories = [
  {
    title: "Scheduled Services",
    services: [
      {
        name: "Periodic Services",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="8" width="32" height="32" rx="4" className="fill-red-100"/>
            <path d="M16 20h16M16 24h16M16 28h16" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      },
      {
        name: "AC Service & Repair",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="8" width="32" height="32" rx="4" className="fill-red-100"/>
            <path d="M24 16v16M16 24h16" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      },
      {
        name: "Batteries",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <rect x="12" y="8" width="24" height="32" rx="4" className="fill-red-100"/>
            <path d="M20 8v4M28 8v4M22 20v8M26 20v8" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      },
      {
        name: "Tyres & Wheel Care",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="16" className="fill-red-100"/>
            <path d="M24 16v16M16 24h16" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      }
    ]
  },
  {
    title: "Value Added Services",
    services: [
      {
        name: "Denting & Painting",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="8" width="32" height="32" rx="4" className="fill-red-100"/>
            <path d="M16 16l16 16M32 16L16 32" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      },
      {
        name: "Detailing Services",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="8" width="32" height="32" rx="4" className="fill-red-100"/>
            <path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      },
      {
        name: "Car Spa & Cleaning",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="8" width="32" height="32" rx="4" className="fill-red-100"/>
            <path d="M16 24a8 8 0 1016 0" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      },
      {
        name: "Car Inspections",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="8" width="32" height="32" rx="4" className="fill-red-100"/>
            <path d="M16 24l6 6 12-12" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
        isNew: true
      }
    ]
  },
  {
    title: "Mechanical Repairs",
    services: [
      {
        name: "Windshield & Lights",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="8" width="32" height="32" rx="4" className="fill-red-100"/>
            <path d="M16 24h16M24 16v16" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      },
      {
        name: "Suspension & Fitments",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="8" width="32" height="32" rx="4" className="fill-red-100"/>
            <path d="M16 16l16 16M32 16L16 32" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      },
      {
        name: "Clutch & Body Parts",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="16" className="fill-red-100"/>
            <path d="M24 16v16M16 24h16" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
        isNew: true
      },
      {
        name: "Insurance Claims",
        icon: (
          <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
            <rect x="8" y="8" width="32" height="32" rx="4" className="fill-red-100"/>
            <path d="M16 24l6 6 12-12" stroke="#FF4C4C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )
      }
    ]
  }
]

export function ServicesSection() {
  return (
    <div className="lg:max-w-[95%] px-2 py-8">
       <div className="mb-8 px-5 ">
         <h2 className="md:text-sm lg:text-4xl font-bold mb-2">Our Services</h2>
         <div className="w-12 h-1 bg-[#3399FF] mb-4" />
         <h1 className="lg:text-xl text-gray-600">Experience Premium Car care Services</h1>
         </div>
         {categories.map((category) => (
         <div key={category.title} className="space-y-4">
          <h2 className="lg:text-xl font-bold text-gray-900 pt-2 px-2">
            {category.title}
          </h2>
         <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-6  items-start text-center">
  {category.services.map((service,index) => (
    <motion.div
      key={service.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-col items-center h-full border p-2"
    >
      <Link href="#" className="block w-full">
        <div className="flex flex-col items-center justify-center space-y-2 h-full">
          <div className="w-12 h-12 flex items-center justify-center">{service.icon}</div> 
          {/* Ensures uniform icon size */}
          <h3 className="text-xs font-medium text-gray-900">{service.name}</h3>
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
))}
    </div>
  )
}