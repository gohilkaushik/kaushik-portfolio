import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import { Loader } from "@/components/Loader";
import { Cursor } from "@/components/Cursor";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Developer",
  description: "Cinematic developer portfolio — Next.js, React, TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} font-body antialiased min-h-screen bg-background text-foreground`}
      >
        <Loader />
        {/* <Cursor /> */}
        {children}
      </body>
    </html>
  );
}
