import { MetadataRoute } from "next";

const baseUrl = "https://unmarkedlabelstudios.com"; // Update with your actual domain

export default function sitemap(): MetadataRoute.Sitemap {
    // Add your routes here as you build out the site
    const routes = [
        "",
        // "/about",
        // "/work",
        // "/contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split("T")[0],
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}
