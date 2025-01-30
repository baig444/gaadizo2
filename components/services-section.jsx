import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: "Periodic Services",
    icon: './4.png'
  },
  {
    title: "AC Service & Repair",
    icon: './5.png'
  },
  {
    title: "Batteries",
    icon: './battery.svg'
  },
  {
    title: "Tyres & Wheel Care",
    icon: './ture.svg'
  },
  {
    title: "Denting & Painting",
    icon: './denting.svg'
  },
  {
    title: "Detailing Services",
    icon: './8.png'
  },
  {
    title: "Car Spa & Cleaning",
    icon: './6.png'
  },
  {
    title: "Car Inspections",
    isNew: true,
    icon: './ins.png'
  }
]

export function ServicesSection() {
  return (
    <div className="lg:max-w-[65%] px-2 py-8">
       <div className="mb-8 px-5 ">
         <h2 className="md:text-sm lg:text-4xl font-bold mb-2">Our Services</h2>
         <div className="w-12 h-1 bg-[#3399FF] mb-4" />
         <h1 className="lg:text-xl text-gray-600 font-light">Experience Premium Car care Services</h1>
         </div>
         <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-6  items-start text-center">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-col items-center h-full p-3"
    >
      <Link href="#" className="block w-full">
        <div className="flex flex-col items-center justify-center space-y-2 h-full">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={service.icon} alt={service.title} className='w-16 h-16 object-cover' />
            </div> 
          {/* Ensures uniform icon size */}
          <h3 className="text-xs font-medium text-gray-900">{service.title}</h3>
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