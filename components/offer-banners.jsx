export function OfferBanners() {

  const offers = [
    {
      bg: "https://gomechprod.blob.core.windows.net/retail-carousel/indiaoldwebsite33prob00.jpg%3Fv%3D1731407672.463005?version=1731407708.644111",
    },
    {
      bg: "https://images.pexels.com/photos/5276374/pexels-photo-5276374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      bg: "https://images.pexels.com/photos/7541976/pexels-photo-7541976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      bg: "https://images.pexels.com/photos/5276374/pexels-photo-5276374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ]

  return (
    <div className="lg:hidden scrollbar overflow-x-auto mt-24">
      <div className="flex min-w-max pb-4">
      {
        offers.map((offer, index) => (
            <img key={index} src={offer.bg} alt="image" className="w-[25rem] h-60 object-cover rounded-lg mx-4" />
        ))
      }
      </div>
    </div>
  )
}