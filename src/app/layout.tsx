"use client";

import { Tomorrow } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";

// Define Tomorrow font
const tomorrow = Tomorrow({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-tomorrow",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/faviconlogo.png" />
        <link rel="alternate" href={`${process.env.NEXT_PUBLIC_SITE_URL}/en/`} hrefLang="en" />
      </head>
      <body className={`${tomorrow.variable} antialiased relative`}>
        <div className="fixed inset-0 w-full h-full z-0">
          <Particles />
        </div>
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
