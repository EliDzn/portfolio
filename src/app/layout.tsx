import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import PreloaderGate from "../components/layout/preloader-gate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Eli Dizon",
  description:
    "Full-stack developer and computer science graduate, fluent between design and code, building digital experiences with React, TypeScript, and UI/UX expertise"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Header />
        <PreloaderGate />
        {children}
      </body>
    </html>
  );
}
