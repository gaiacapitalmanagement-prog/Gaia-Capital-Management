import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
    title: "Gaia Capital Management",
    description: "Gaia Capital Management helps you track real-time stock prices, get personalized alerts and explore detailed company insights.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={cn("dark", inter.variable, geistMono.variable)}>
        <body className={cn("font-sans antialiased bg-white text-black dark:bg-black dark:text-white")}>
        {children}
        </body>
        </html>
    );
}