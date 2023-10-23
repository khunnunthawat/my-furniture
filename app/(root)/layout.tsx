import "../globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Furniro from "../furniro-logo.ico";

import SiteHeader from "@/components/layout/SiteHeader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Furniture",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: Furniro.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SiteHeader />
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
