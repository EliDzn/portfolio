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
  metadataBase: new URL("https://your-domain.com"),
  title: "Eli Dizon | Fullstack Developer & Design Engineer",
  description:
    "Fullstack developer and computer science graduate, fluent between design and code, building digital experiences end-to-end with React, TypeScript, and UI/UX expertise",
  openGraph: {
    title: "Eli Dizon | Fullstack Developer & Design Engineer",
    description:
      "Fullstack developer and computer science graduate, fluent between design and code, building digital experiences end-to-end with React, TypeScript, and UI/UX expertise",
    type: "website"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body>
        <Header />
        <PreloaderGate />
        <main>{children}</main>
      </body>
    </html>
  );
}
