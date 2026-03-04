import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://binaryxbeast.github.io";
    const lastModified = new Date("2026-03-04");

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/#about`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/#projects`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/#skills`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#achievements`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/#contact`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
