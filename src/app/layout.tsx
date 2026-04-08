import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Breaking Jenny — True Crime Memoir",
  description:
    "A gripping true-crime memoir by Nic Fairbrother and Shane Stanley. Pre-order now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${poppins.variable}`}>
      <body className="bg-[#111111] text-[#EFEFEF] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
