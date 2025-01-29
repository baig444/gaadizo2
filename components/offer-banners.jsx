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
    <div className="scrollbar lg:hidden overflow-x-auto mt-36">
      <div className="flex min-w-max pb-4">
      {
        offers.map((offer, index) => (
            <img key={index} src={offer.bg} alt="image" className="w-[23rem] h-60 object-contain rounded-lg mx-1" />
        ))
      }
      </div>
    </div>
  )
}