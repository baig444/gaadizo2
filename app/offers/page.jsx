"use client"; // Required for fetching in App Router

import { useEffect, useState } from "react";

const OffersPage = () => {
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
        <div>
            <h1>Offers</h1>

            {loading && <p>Loading offers...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {offers.map(offer => (
                    <img
                        key={offer.id}
                        src={offer.imageUrl}
                        alt="Offer"
                        width="300px"
                        style={{ borderRadius: "10px" }}
                    />
                ))}
            </div>
        </div>
    );
};

export default OffersPage;
