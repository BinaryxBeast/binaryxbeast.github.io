import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Rushikesh Ghatul – Official Portfolio",
        short_name: "Rushikesh Ghatul",
        description:
            "Official portfolio of Rushikesh Ghatul – software developer, AI integrator, and game developer. B.Tech CS at Vishwakarma University, Pune.",
        start_url: "/",
        display: "standalone",
        background_color: "#060918",
        theme_color: "#6c63ff",
        orientation: "portrait-primary",
        lang: "en",
        categories: ["portfolio", "technology", "software"],
        icons: [
            {
                src: "/icons/icon-192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "/icons/icon-512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
        screenshots: [
            {
                src: "/screenshots/screenshot-wide.png",
                sizes: "1366x768",
                type: "image/png",
            },
        ],
    };
}
