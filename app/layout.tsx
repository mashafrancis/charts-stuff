import type {ReactNode} from "react";
import "@/app/globals.css";
import { fontMono, fontSans } from './fonts'
import "./globals.css";
import Link from "next/link";
import {cn} from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Data to Chart",
  description:
    "Free, no sign up required and easy to use tool to create charts from any CSV or JSON data",
  authors: [{ name: "Jordi Enric", url: "https://jordienric.com" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'min-[100dvh] bg-alternative! whitespace-pre-line font-sans text-foreground antialiased',
        fontSans.variable,
        fontMono.variable
      )}
    >
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
