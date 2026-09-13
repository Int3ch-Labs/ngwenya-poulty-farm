import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: {
    default: "Ngwenyama Poultry Farm | Fresh Farm Eggs",
    template: "%s | Ngwenyama Poultry Farm",
  },
  description:
    "Ngwenyama Poultry Farm delivers fresh, healthy eggs raised with patience and care. Read our farm updates and get in touch with our team.",
  keywords: [
    "Ngwenyama Poultry Farm",
    "fresh eggs",
    "poultry farm",
    "farm fresh eggs South Africa",
    "Mpumalanga",
    "South Africa online shop",
  ],
  authors: [{ name: "Ngwenyama Poultry Farm" }],
  creator: "Ngwenyama Poultry Farm",
  publisher: "Ngwenyama Poultry Farm",
  formatDetection: { email: true, address: true, telephone: true },
  metadataBase: new URL("https://ngwenyamapoultryfarm.co.za"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://ngwenyamapoultryfarm.co.za",
    siteName: "Ngwenyama Poultry Farm",
    title: "Ngwenyama Poultry Farm | Fresh Farm Eggs",
    description:
      "Ngwenyama Poultry Farm delivers fresh, healthy eggs raised with patience and care. Read our farm updates and get in touch with our team.",
    images: [{ url: "/logo.jpg", width: 512, height: 512, alt: "Ngwenyama Poultry Farm Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ngwenyama Poultry Farm | Fresh Farm Eggs",
    description: "Ngwenyama Poultry Farm delivers fresh, healthy eggs raised with patience and care. Read our farm updates and get in touch with our team.",
    images: ["/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/logo.jpg", sizes: "any" }],
    shortcut: "/logo.jpg",
    apple: [{ url: "/logo.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
  manifest: "/manifest.json",
  category: "shopping",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});


export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Ngwenyama Poultry Farm",
              image: "https://ngwenyamapoultryfarm.co.za/logo.jpg",
              url: "https://ngwenyamapoultryfarm.co.za",
              description:
                "Fresh, healthy farm eggs from Ngwenyama Poultry Farm in Mpumalanga, South Africa.",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Mpumalanga",
                addressCountry: "ZA",
              }
            }),
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${inter.variable}`}>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
