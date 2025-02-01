const carBrands = [
    { name: "Maruti Suzuki", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9.jpeg" },
    { name: "Hyundai", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7.jpeg" },
    { name: "Tata", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-14.jpeg" },
    { name: "Honda", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-6.jpeg" },
    { name: "Toyota", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-15.jpeg" },
    { name: "Mahindra", logo: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-8.jpeg" },
  ]
  
  const carModels = {
    "Maruti Suzuki": [
      { name: "Swift", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-240.jpeg" },
      { name: "Baleno", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-205.jpeg" },
      { name: "Dzire", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-243.jpeg" },
      { name: "Brezza", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-481.jpeg" },
      { name: "Ertiga", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-9-model-216.jpeg" },
    ],
    "Hyundai": [
      { name: "i20", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-154.jpeg" },
      { name: "Venue", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-513.jpeg" },
      { name: "Creta", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-135.jpeg" },
      { name: "Verna", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-7-model-177.jpeg" },
    ],
    "Tata": [
      { name: "Nexon", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-14-model-485.jpeg" },
      { name: "Harrier", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-14-model-508.jpeg" },
      { name: "Safari", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-14-model-336.jpeg" },
      { name: "Punch", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-14-model-590.jpeg" },
    ],
    "Honda": [
      { name: "City", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-6-model-115.jpeg" },
      { name: "Amaze", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-6-model-107.jpeg" },
      { name: "WR-V", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-6-model-477.jpeg" },
      { name: "Jazz", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-6-model-123.jpeg" },
    ],
    "Toyota": [
      { name: "Fortuner", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-15-model-362.jpeg" },
      { name: "Innova", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-15-model-489.jpeg" },
      { name: "Glanza", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-15-model-520.jpeg" },
      { name: "Urban Cruiser", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-15-model-562.jpeg" },
    ],
    "Mahindra": [
      { name: "XUV700", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-8-model-580.jpeg" },
      { name: "Thar", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-8-model-190.jpeg" },
      { name: "Scorpio", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-8-model-188.jpeg" },
      { name: "XUV300", image: "https://gomechprod.blob.core.windows.net/gm-retail-app/thumbnails/brand-8-model-510.jpeg" },
    ],
  };
  
  const fuelTypes = [
    { type: "Petrol", logo: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/DIESEL.svg" },
    { type: "Diesel", logo: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/PETROL.svg" },
    { type: "CNG", logo: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/CNG.svg" },
    { type: "Electric", logo: "https://gomechprod.blob.core.windows.net/gomech-retail/gomechanic_assets/fuel_type/electric.svg" },
  ]

  
  export { carBrands, carModels, fuelTypes }