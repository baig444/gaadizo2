export async function GET() {
    const apiUrl = "http://stg1.gaadizo.com:8002/getOffers";
    const baseUrl = "http://stg1.gaadizo.com/apache-webpages/mobile_images/";

    try {
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (result.status === 1) {
            const offers = result.data.map(offer => ({
                id: offer.id,
                imageUrl: baseUrl + offer.image
            }));

            return Response.json({ status: 1, offers });
        } else {
            return Response.json({ status: 0, msg: result.msg });
        }
    } catch (error) {
        return Response.json({ status: 0, msg: "Failed to fetch offers", error });
    }
}
