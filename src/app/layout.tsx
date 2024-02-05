import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ToasterProvider } from "@/components/toaster-provider";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A very special Website ❤",
  description: "Một Website vô cùng đặc biệt dành cho 1 người con gái cũng vô cùng đặc biệt ✨",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToasterProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}