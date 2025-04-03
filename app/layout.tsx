import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy and Free UPI Payment Link Generator | Liveyst",
  description:
    "Tired of sharing your QR Code or UPI ID manually? Generate a secure UPI payment link in just a few clicks and start receiving payments instantly, works with all UPI apps.",
  keywords: [
    "upi payment link generator",
    "free upi payment link generator",
    "easy upi payment link",
    "how to create upi payment link",
    "one click upi payment link",
    "upi payment link by liveyst",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-K4ZY9TTLR1" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K4ZY9TTLR1');
            `,
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
