import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

// ─── Metadata ───────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://binaryxbeast.github.io"),
  title: {
    default: "Rushikesh Ghatul | Software Developer & AI Builder – Official Portfolio",
    template: "%s | Rushikesh Ghatul",
  },
  description:
    "Official portfolio of Rushikesh Ghatul – B.Tech CS student at Vishwakarma University, software developer specializing in AI integration, game development, and full-stack web apps. Based in Pune, India.",
  keywords: [
    "Rushikesh Ghatul",
    "BinaryxBeast",
    "Software Developer Pune",
    "AI Developer India",
    "Game Developer",
    "Prompt Engineer",
    "Full Stack Developer",
    "JavaScript Developer",
    "StudySpark",
    "Last Protocol",
    "Faculty Portal",
    "Vishwakarma University",
    "Portfolio",
    "AI Integration",
    "Hackathon",
    "Gemini API",
    "Firebase Developer",
    "C++ Programmer",
    "UI UX Designer",
    "Figma",
  ],
  authors: [{ name: "Rushikesh Ghatul", url: "https://binaryxbeast.github.io" }],
  creator: "Rushikesh Ghatul",
  publisher: "Rushikesh Ghatul",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: "https://binaryxbeast.github.io/",
    siteName: "Rushikesh Ghatul – Official Portfolio",
    title: "Rushikesh Ghatul | Software Developer & AI Builder",
    description:
      "Official portfolio of Rushikesh Ghatul – software developer, AI integrator, and game developer. B.Tech CS at Vishwakarma University, Pune.",
    images: [
      {
        url: "https://i.ibb.co/gZhSJTZN/rushikesh-avatar-png.png",
        alt: "Rushikesh Ghatul – Software Developer and AI Builder from Pune, India",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BinaryxBeast",
    creator: "@BinaryxBeast",
    title: "Rushikesh Ghatul | Software Developer & AI Builder",
    description:
      "Official portfolio of Rushikesh Ghatul – software developer, AI integrator, and game developer. B.Tech CS at Vishwakarma University, Pune.",
    images: {
      url: "https://i.ibb.co/gZhSJTZN/rushikesh-avatar-png.png",
      alt: "Rushikesh Ghatul – Software Developer",
    },
  },
  alternates: {
    canonical: "https://binaryxbeast.github.io/",
    languages: { "en-US": "https://binaryxbeast.github.io/" },
  },
  verification: {
    google: "af7ebc46de7310e6",
  },
  category: "technology",
};

// ─── Viewport ───────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#6c63ff" },
    { media: "(prefers-color-scheme: light)", color: "#6c63ff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const siteUrl = "https://binaryxbeast.github.io";

const jsonLd = [
  // 1. ProfilePage + Person (Knowledge Panel signals)
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: siteUrl,
    name: "Rushikesh Ghatul – Official Portfolio",
    description:
      "Official portfolio of Rushikesh Ghatul, software developer and AI builder from Pune, India.",
    dateModified: "2026-03-04",
    dateCreated: "2024-01-01",
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}/#rushikesh-ghatul`,
      name: "Rushikesh Ghatul",
      alternateName: ["BinaryxBeast", "Rushikesh"],
      url: siteUrl,
      image: {
        "@type": "ImageObject",
        "@id": `${siteUrl}/#logo`,
        url: "https://i.ibb.co/gZhSJTZN/rushikesh-avatar-png.png",
        caption: "Rushikesh Ghatul – Software Developer and AI Builder",
        width: 320,
        height: 320,
      },
      jobTitle: "Software Developer",
      description:
        "Rushikesh Ghatul is a B.Tech Computer Science student at Vishwakarma University, Pune, specializing in AI integration, game development, and full-stack web applications.",
      email: "ghatulrushikesh1176@gmail.com",
      nationality: "Indian",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
        postalCode: "411000",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Vishwakarma University",
        url: "https://www.vupune.ac.in/",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      knowsAbout: [
        "JavaScript", "C++", "C Programming", "Artificial Intelligence",
        "Game Development", "Prompt Engineering", "AI Integration",
        "UI/UX Design", "HTML5", "CSS3", "Firebase", "Full Stack Web Development",
        "Next.js", "React", "Figma",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Software Developer",
        occupationLocation: { "@type": "City", name: "Pune" },
        skills: "JavaScript, C++, AI Integration, Game Development, Prompt Engineering, React, Next.js",
        estimatedSalary: [],
      },
      award: [
        "2nd Rank – Neural Canvas Poster Design Competition (Figma)",
        "2nd Rank – Teklingo Poster Design Competition (Figma)",
        "1st Runner-Up – Game Exhibition, Game Jam 2k26 (Last Protocol)",
      ],
      sameAs: [
        "https://github.com/BinaryxBeast/",
        "https://www.linkedin.com/in/rushikeshghatul/",
        "https://x.com/BinaryxBeast",
      ],
    },
  },

  // 2. WebSite (enables Sitelinks Search Box)
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Rushikesh Ghatul – Official Portfolio",
    description: "Portfolio of Rushikesh Ghatul, software developer and AI builder.",
    author: { "@id": `${siteUrl}/#rushikesh-ghatul` },
    publisher: { "@id": `${siteUrl}/#rushikesh-ghatul` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },

  // 3. BreadcrumbList
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/#about` },
      { "@type": "ListItem", position: 3, name: "Projects", item: `${siteUrl}/#projects` },
      { "@type": "ListItem", position: 4, name: "Skills", item: `${siteUrl}/#skills` },
      { "@type": "ListItem", position: 5, name: "Achievements", item: `${siteUrl}/#achievements` },
      { "@type": "ListItem", position: 6, name: "Contact", item: `${siteUrl}/#contact` },
    ],
  },

  // 4. ItemList of projects (enables rich project carousels)
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by Rushikesh Ghatul",
    description: "Featured software projects built by Rushikesh Ghatul.",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "StudySpark",
          url: "https://studyspark-ed989.firebaseapp.com/",
          applicationCategory: "EducationApplication",
          operatingSystem: "Web",
          description:
            "AI-powered academic assistant delivering instant AI-generated summaries and contextual insights using Gemini 2.5 Flash and Firebase.",
          author: { "@id": `${siteUrl}/#rushikesh-ghatul` },
          programmingLanguage: ["JavaScript", "HTML5", "CSS3"],
          keywords: "AI, academic, study assistant, Gemini API, Firebase",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "Last Protocol",
          url: "https://last-protocol-nu.vercel.app/",
          applicationCategory: "GameApplication",
          operatingSystem: "Web",
          description:
            "Web-based stealth action game featuring tactical AI pathfinding, built on HTML5 Canvas and JavaScript.",
          author: { "@id": `${siteUrl}/#rushikesh-ghatul` },
          programmingLanguage: "JavaScript",
          keywords: "stealth game, HTML5 Canvas, tactical AI, game jam",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "Faculty Portal System",
          url: "https://binaryxbeast.github.io/Faculty-Portal/",
          applicationCategory: "EducationApplication",
          operatingSystem: "Web",
          description:
            "High-availability academic management system for handling student data, grade distributions, and academic tracking.",
          author: { "@id": `${siteUrl}/#rushikesh-ghatul` },
          programmingLanguage: ["HTML5", "CSS3", "JavaScript"],
          keywords: "faculty portal, academic management, student data",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        },
      },
    ],
  },
];

// ─── Layout ─────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* ── Geo Signals ──────────────────────────────────────────── */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune, Maharashtra, India" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />

        {/* ── Identity / rel=me ─────────────────────────────────────── */}
        <link rel="me" href="https://github.com/BinaryxBeast/" />
        <link rel="me" href="https://www.linkedin.com/in/rushikeshghatul/" />
        <link rel="me" href="https://x.com/BinaryxBeast" />
        <link rel="me" href="mailto:ghatulrushikesh1176@gmail.com" />

        {/* ── OG Profile extras ─────────────────────────────────────── */}
        <meta property="profile:first_name" content="Rushikesh" />
        <meta property="profile:last_name" content="Ghatul" />
        <meta property="profile:username" content="BinaryxBeast" />
        <meta property="twitter:url" content="https://binaryxbeast.github.io/" />

        {/* ── Mobile / PWA ──────────────────────────────────────────── */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Rushikesh Ghatul" />
        <meta name="application-name" content="Rushikesh Ghatul" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />

        {/* ── Sitemap Reference ─────────────────────────────────────── */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* ── Preconnect for performance ────────────────────────────── */}
        <link rel="preconnect" href="https://i.ibb.co" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />

        {/* ── JSON-LD Structured Data ───────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
