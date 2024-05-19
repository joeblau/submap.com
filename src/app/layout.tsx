import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://submap.com'),
  title: "Submap",
  description: "Open-source iOS multimodal agent",
  openGraph: {
    title: "Submap",
    description: "Open-source iOS multimodal agent",
    url: "https://submap.com",
    siteName: "Submap",
    images: [
      {
        url: "/images/og-image.png",
        width: 2400,
        height: 1560,
        alt: "Submap",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Submap",
    description: "Open-source iOS multimodal agent",
    siteId: "",
    creator: "@joeblau",
    creatorId: "",
    images: ["/images/og-image.png"],
  },
  category: "AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased bg-black", fontSans.variable)}>{children}</body>
    </html>
  );
}
