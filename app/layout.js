import { Inter, Sora, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora =Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "House Pulse",
  description: "A real estate listing website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sora.variable} ${dmSans.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* global subtle gradient background */}
        <div aria-hidden className="fixed inset-0 -z-10 bg-global-gradient pointer-events-none" />
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
