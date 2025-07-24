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
  title: `${BRAND_NAME} - Premium Student Databases`,
  description: "DataDADA offers curated and filtered student databases for marketing and academic outreach.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Force light theme as per request
          enableSystem
          disableTransitionOnChange
        >
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
