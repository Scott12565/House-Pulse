import { Inter, Sora, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";

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
        className={`${inter.variable} ${sora.variable} ${dmSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
