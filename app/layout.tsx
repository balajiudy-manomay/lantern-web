import type { Metadata } from "next";
import { Montserrat, Inter, Caveat, Kalam } from "next/font/google";
import ClientLayout from "../components/ClientLayout";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--sf",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--sn",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--hand",
  subsets: ["latin"],
});

const kalam = Kalam({
  variable: "--marker",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lantern.ai"),

  title: {
    default: "Lantern",
    template: "%s | Lantern",
  },

  description:
    "Lantern combines human expertise, AI intelligence, governance, data intelligence, and automation to help organizations make confident decisions and drive meaningful outcomes.",

  applicationName: "Lantern",

  keywords: [
    "AI",
    "Artificial Intelligence",
    "Automation",
    "Decision Intelligence",
    "Data Intelligence",
    "Governance",
    "Digital Transformation",
    "Enterprise AI",
    "Business Intelligence",
    "Human Expertise",
  ],

  authors: [
    {
      name: "Lantern",
    },
  ],

  creator: "Lantern",

  publisher: "Lantern",

  category: "Technology",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lantern",
    description:
      "Lantern combines human expertise, AI intelligence, governance, data intelligence, and automation to help organizations achieve meaningful outcomes.",
  },

  twitter: {
    card: "summary_large_image",
    description:
      "Lantern combines human expertise, AI intelligence, governance, data intelligence, and automation to help organizations achieve meaningful outcomes.",
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],

    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Lantern",
  },

  referrer: "origin-when-cross-origin",

  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${montserrat.variable} ${inter.variable} ${caveat.variable} ${kalam.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
