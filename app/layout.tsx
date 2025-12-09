import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {routing} from '@/i18n/routing';
import {getMessages} from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mallorca Fitness Weekend - Mallorca Sports Events",
  description: "Únete al evento fitness más grande del año. Masterclasses, speakers internacionales y una experiencia inolvidable. Palma de Mallorca, 15-16 Junio 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Fixed background pattern */}
        <div className="fixed inset-0 z-[-1] bg-grid-pattern"></div>
        {children}
      </body>
    </html>
  );
}
