"use client";
import { useEffect, useState } from "react";

const OffersPage = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchOffers() {
            try {
                const response = await fetch("/api/proxy-offers");
                if (!response.ok) throw new Error("Failed to fetch data");

                const result = await response.json();
                if (result.status === 1) {
                    setOffers(result.offers);
                } else {
                    setError(result.msg);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchOffers();
    }, []);

    if (loading) return <p>Loading offers...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Offer Banners</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                {offers.map((offer) => (
                    <div key={offer.id} style={{ textAlign: "center" }}>
                        <img 
                            src={offer.imageUrl}  
                            alt={`Offer ${offer.id}`} 
                            style={{ width: "100%", maxWidth: "300px", borderRadius: "10px" }} 
                            onError={(e) => e.target.src = "/fallback-image.png"} // ✅ Handle broken images
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OffersPage;
