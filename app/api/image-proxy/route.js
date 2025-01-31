export async function GET(req) {
    const baseUrl = "http://stg1.gaadizo.com/apache-webpages/mobile_images/";
    const { searchParams } = new URL(req.url);
    const imagePath = searchParams.get("path");

    if (!imagePath) {
        return new Response("Image path missing", { status: 400 });
    }

    try {
        const imageUrl = baseUrl + imagePath;
        const imageResponse = await fetch(imageUrl);
        const imageBuffer = await imageResponse.arrayBuffer();

        return new Response(imageBuffer, {
            headers: {
                "Content-Type": imageResponse.headers.get("Content-Type"),
                "Cache-Control": "max-age=86400",
            },
        });
    } catch (error) {
        return new Response("Error fetching image", { status: 500 });
    }
}
