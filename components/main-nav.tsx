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
    <header className="sticky top-0 z-50 w-full border-b border-datadadaGray-200 bg-gradient-to-r from-datadadaYellow-600 via-datadadaYellow-500 to-amber-500 backdrop-blur-md shadow-lg">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-4 group">
          <div className="relative w-16 h-16 p-2 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-white/50">
            <Image
              src="/images/datadada-logo.png"
              alt={`${BRAND_NAME} Logo`}
              fill
              className="object-contain p-1"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-2xl tracking-wide drop-shadow-sm">{BRAND_NAME}</span>
            <span className="text-xs text-white/90 font-medium drop-shadow-sm">Premium Student Databases</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-base font-medium transition-all duration-200 hover:text-white relative px-3 py-2 rounded-lg",
                pathname === link.href
                  ? "text-white bg-white/20 backdrop-blur-sm after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-1 after:h-1 after:bg-white after:rounded-full"
                  : "text-white/90 hover:bg-white/10 hover:text-white",
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative w-12 h-12 p-1 bg-white/90 rounded-lg border border-datadadaYellow-200">
                  <Image src="/images/datadada-logo.png" alt={`${BRAND_NAME} Logo`} fill className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-datadadaText text-lg">{BRAND_NAME}</span>
                  <span className="text-xs text-datadadaGray-500">Premium Databases</span>
                </div>
              </div>
              <nav className="flex flex-col space-y-4 pt-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors px-4 py-3 rounded-lg",
                      pathname === link.href
                        ? "text-datadadaYellow-600 bg-datadadaYellow-50 border-l-4 border-datadadaYellow-600"
                        : "text-datadadaText hover:bg-datadadaGray-50 hover:text-datadadaYellow-600",
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
