import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AppClient from "./Components/AppClient";
import type { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Schützenverein Buchenau/Giesenhain",
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head><meta name="google-site-verification" content="KN5oEGBbYP1Y0u5IMEstQH-NxqKdX1aIZnQNDbs3CV4" /></head>
      <body className={inter.className}>
        <Navbar></Navbar>
        <AppClient />
        {children}
        <Footer />
      </body>
    </html>
  );
}
