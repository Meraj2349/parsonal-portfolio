import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../contexts/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://merajmridha.xyz"),
  title: "Md. Meraj Mridha - Software Engineer",
  description:
    "Junior Software Engineer at Deep Mind Labs and Software Engineering student at SUST. Full-stack developer working with Next.js, React, TypeScript, .NET and Kotlin.",
  openGraph: {
    title: "Md. Meraj Mridha - Software Engineer",
    description:
      "Junior Software Engineer at Deep Mind Labs. Full-stack projects in Next.js, React, .NET and Kotlin.",
    url: "https://merajmridha.xyz",
    siteName: "Md. Meraj Mridha",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
