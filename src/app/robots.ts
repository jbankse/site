import { MetadataRoute } from "next";

const baseUrl = "https://unmarkedlabelstudios.com"; // Update with your actual domain

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/private/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
