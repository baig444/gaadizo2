export function OfferBanners() {

  const offers = [
    {
      bg: "https://gomechprod.blob.core.windows.net/retail-carousel/indiaoldwebsite33prob00.jpg%3Fv%3D1731407672.463005?version=1731407708.644111",
    },
    {
      bg: "https://gomechprod.blob.core.windows.net/retail-carousel/indiaoldwebsite33prob00.jpg%3Fv%3D1731407672.463005?version=1731407708.644111",
    },
    {
      bg: "https://gomechprod.blob.core.windows.net/retail-carousel/indiaoldwebsite33prob00.jpg%3Fv%3D1731407672.463005?version=1731407708.644111",
    },
    {
      bg: "https://gomechprod.blob.core.windows.net/retail-carousel/indiaoldwebsite33prob00.jpg%3Fv%3D1731407672.463005?version=1731407708.644111",
    }
  ]

  return (
    <div className="scrollbar lg:hidden overflow-x-auto mt-32">
      <div className="flex min-w-max">
      {
        offers.map((offer, index) => (
            <img key={index} src={offer.bg} alt="image" className="w-[22rem] h-48 rounded-lg mx-1" />
        ))
      }
      </div>
    </div>
  )
}