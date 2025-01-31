const footerLinks = {
  services: [
    { label: "Home", href: "/" },
    { label: "About", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Partner With Us", href: "#" },
    { label: "Login", href: "#" },
  ],
  importantLinks: [
    { label: "Car Service", href: "#" },
    { label: "Dent Paint", href: "#" },
    { label: "Car Cleaning", href: "#" },
    { label: "Wheel Care", href: "#" },
    { label: "AC Service", href: "#" },
    { label: "Car Wrapping", href: "#" },
    { label: "Nano Coating", href: "#" },
    { label: "Car Detailing", href: "#" },
  ],
  cities: [
    "Ghaziabad",
    "Faridabad",
    "Delhi",
    "Gurgaon",
    "Noida",
    "Rohtak"
  ]
}

export function ModernFooter() {
  const getCityServices = (city) => [
    { label: `Car Service in ${city}`, href: "#" },
    { label: `Dent Paint in ${city}`, href: "#" },
    { label: `Car Cleaning in ${city}`, href: "#" },
    { label: `Wheel Care in ${city}`, href: "#" },
    { label: `AC Service in ${city}`, href: "#" },
    { label: `Car Wrapping in ${city}`, href: "#" },
    { label: `Nano Coating in ${city}`, href: "#" },
    { label: `Car Detailing in ${city}`, href: "#" },
  ]

  return (
    <footer className="bg-[#1B1F3F] text-gray-300 py-12 hidden lg:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-6">Important Links</h3>
            <ul className="space-y-3">
              {footerLinks.importantLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* City Columns */}
          {footerLinks.cities.map((city) => (
            <div key={city} className="space-y-4">
              <h3 className="text-white font-semibold mb-6">{city}</h3>
              <ul className="space-y-3">
                {getCityServices(city).map((service) => (
                  <li key={service.label}>
                    <a 
                      href={service.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-800/50 px-4">
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
    </footer>
  )
}