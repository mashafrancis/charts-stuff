import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Data to Chart",
  description:
    "Free, no sign up required and easy to use tool to create charts from any CSV or JSON data",
  authors: [{ name: "Jordi Enric", url: "https://jordienric.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} text-zinc-900`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <div className="max-w-4xl mx-auto">{children}</div>
          </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import Link from "next/link";
