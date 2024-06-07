import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My envelope",
  description: "Handle your budget with ease and save money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <div className="flex justify-center mt-6 w-full h-20">
          <h1 className="text-5xl">Mon budget Planner</h1>
        </div>
        <div className="flex flex-row">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
