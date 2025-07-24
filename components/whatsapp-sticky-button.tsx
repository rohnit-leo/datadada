"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { CONTACT_INFO } from "@/lib/utils/constants"

export function WhatsAppStickyButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Link
        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </Link>
    </div>
  )
}
