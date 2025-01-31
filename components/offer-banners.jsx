"use client"; // Required for fetching in App Router

import { useEffect, useState } from "react";

export function OfferBanners() {

   const [offers, setOffers] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
  
      useEffect(() => {
          async function fetchOffers() {
              try {
                  const response = await fetch("/api/getOffers"); // Call the Next.js API route
                  const result = await response.json();
  
                  if (result.status === 1) {
                      setOffers(result.offers);
                  } else {
                      setError(result.msg);
                  }
              } catch (error) {
                  setError("Failed to fetch offers");
              } finally {
                  setLoading(false);
              }
          }
  
          fetchOffers();
      }, []);
  
  return (
    <div className="scrollbar lg:hidden overflow-x-auto mt-32">
      {loading && <p>Loading offers...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="flex min-w-max">
      {
        offers.map((offer, id) => (
            <img key={offer.id} src={offer.imageUrl} alt="image" className="w-[22rem] h-48 rounded-lg mx-1" />
        ))
      }
      </div>
    </div>
  )
}