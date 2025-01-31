export async function GET() {
    const apiUrl = "http://stg1.gaadizo.com:8002/getOffers";

    try {
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (result.status === 1) {
            const offers = result.data.map(offer => ({
                id: offer.id,
                imageUrl: `/api/image-proxy?path=${encodeURIComponent(offer.image)}` // 🔄 Secure Image Proxy
            }));

            return Response.json({ status: 1, offers });
        } else {
            return Response.json({ status: 0, msg: result.msg });
        }
    } catch (error) {
        return Response.json({ status: 0, msg: "Failed to fetch offers", error: error.message });
    }
}
