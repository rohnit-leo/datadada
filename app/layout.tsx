import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { WhatsAppStickyButton } from "@/components/whatsapp-sticky-button"
import { BRAND_NAME } from "@/lib/utils/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${BRAND_NAME} - Premium Student Database Solutions for Educational Marketing`,
  description:
    "Access verified student databases across India with 500K+ records. Perfect for educational institutions, coaching centers & businesses. Instant WhatsApp delivery, 99% accuracy, competitive pricing.",
  keywords:
    "student database, educational marketing, student leads, coaching center marketing, MBA aspirants, engineering students, medical students, NEET database, JEE database, student contact database",
  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://datadada.com",
    title: `${BRAND_NAME} - Premium Student Database Solutions`,
    description:
      "Access verified student databases across India with 500K+ records. Perfect for educational institutions, coaching centers & businesses.",
    siteName: BRAND_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} - Premium Student Database Solutions`,
    description:
      "Access verified student databases across India with 500K+ records. Perfect for educational institutions, coaching centers & businesses.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#EAB308" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-datadadaBackground text-datadadaText">
            <MainNav />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppStickyButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
