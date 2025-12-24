import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import "flowbite-react";
import "flowbite";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

const insani = localFont({
  src: "../public/fonts/Insanibu.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-insani",
  display: "swap",
  
});

export const metadata: Metadata = {
  title: "Medlog - Logistique et Transport",
  description:
    "Medlog, une entreprise de logistique et de transport spécialisée dans le transport de marchandises et de personnes.",
  keywords: [
    "logistique",
    "transport",
    "marchandises",
    "transport de personnes",
    "Medlog",
    "transport professionnel",
    "logistique Maroc",
  ],
  authors: [{ name: "Medlog" }],
  creator: "Medlog",
  publisher: "Medlog",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tom.sn"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Medlog - Logistique et Transport",
    description:
      "Medlog, une entreprise de logistique et de transport spécialisée dans le transport de marchandises et de personnes.",
    url: "https://tom.sn",
    siteName: "Medlog",
    images: [
      {
        url: "/images/logo_white.png",
        width: 800,
        height: 600,
        alt: "Medlog Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medlog - Logistique et Transport",
    description:
      "Medlog, une entreprise de logistique et de transport spécialisée dans le transport de marchandises et de personnes.",
    images: ["/images/logo_white.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: {
      url: "/images/logo_white.png",
      href: "/images/logo_white.png",
    },
    apple: [{ url: "/images/logo_white.png" }],
  },
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${ubuntu.variable} ${insani.variable} antialiased overflow-x-hidden`}>
        <SplashScreen />
        <div className="animated-background"></div>
        {children}
      </body>
    </html>
  );
}
