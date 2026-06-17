import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manisha Basnet | Samsung Experience Consultant — Gorkha, Nepal",
  description:
    "Portfolio of Manisha Basnet, a results-driven Samsung Experience Consultant and Retail Sales Professional with 2.5+ years of excellence in Gorkha, Nepal. Open to new opportunities.",
  keywords: [
    "Manisha Basnet",
    "Samsung Experience Consultant",
    "Retail Sales Professional",
    "Samsung Nepal",
    "Customer Experience",
    "Gorkha Nepal",
    "Sales Consultant",
    "Portfolio",
    "Job Seeker Nepal",
    "Tribhuvan University BBS",
  ],
  authors: [{ name: "Manisha Basnet", url: "https://manishabasnet.com.np" }],
  creator: "Manisha Basnet",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    title: "Manisha Basnet | Samsung Experience Consultant",
    description:
      "2.5+ years as a Samsung Experience Consultant in Gorkha, Nepal. Specialist in product consultation, sales achievement, and customer experience.",
    siteName: "Manisha Basnet Portfolio",
    url: "https://manishabasnet.com.np",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Manisha Basnet — Samsung Experience Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manisha Basnet | Samsung Experience Consultant",
    description:
      "Portfolio of Manisha Basnet — 2.5+ years at Samsung Nepal, based in Gorkha. Open to new opportunities.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://manishabasnet.com.np"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="canonical" href="https://manishabasnet.com.np" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14120c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Manisha Basnet",
              url: "https://manishabasnet.com.np",
              jobTitle: "Samsung Experience Consultant",
              worksFor: { "@type": "Organization", name: "Samsung Nepal" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gorkha",
                addressCountry: "NP",
              },
              email: "manisha.basnet4090@gmail.com",
              telephone: "+977-9764506070",
              sameAs: [
                "https://www.linkedin.com/in/manisha-basnet119",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Tribhuvan University",
              },
              knowsLanguage: ["Nepali", "English", "Hindi"],
              description:
                "Results-driven Samsung Experience Consultant with 2.5+ years of retail sales excellence in Gorkha, Nepal.",
            }),
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-inter)] antialiased min-h-screen flex flex-col overflow-x-hidden" style={{ background: "#14120c", color: "#faf5e8" }}>
        {children}
      </body>
    </html>
  );
}
