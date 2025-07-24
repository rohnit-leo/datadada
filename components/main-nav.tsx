"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { BRAND_NAME, NAV_LINKS } from "@/lib/utils/constants"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-datadadaYellow-200 bg-gradient-to-r from-datadadaYellow-500 via-datadadaYellow-400 to-datadadaYellow-500 shadow-lg backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
            <Image
              src="/images/datadada-logo.png"
              alt={`${BRAND_NAME} Logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="inline-block font-bold text-white text-2xl tracking-wide drop-shadow-sm">{BRAND_NAME}</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-base font-semibold transition-all duration-200 hover:text-white hover:scale-105 relative",
                pathname === link.href
                  ? "text-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-white after:rounded-full"
                  : "text-white/90",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-white hover:bg-white/20"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-gradient-to-b from-datadadaYellow-50 to-white"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative w-10 h-10">
                  <Image src="/images/datadada-logo.png" alt={`${BRAND_NAME} Logo`} fill className="object-contain" />
                </div>
                <span className="font-bold text-datadadaText text-xl">{BRAND_NAME}</span>
              </div>
              <nav className="flex flex-col space-y-6 pt-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-lg font-semibold transition-colors hover:text-datadadaYellow-600 px-4 py-2 rounded-lg",
                      pathname === link.href
                        ? "text-datadadaYellow-600 bg-datadadaYellow-100"
                        : "text-datadadaText hover:bg-datadadaYellow-50",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
