import Link from "next/link"
import Image from "next/image"
import { BRAND_NAME, CONTACT_INFO, POLICY_LINKS } from "@/lib/utils/constants"
import { Mail, MapPin, Phone, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-datadadaGray-900 via-datadadaGray-800 to-datadadaGray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image src="/images/datadada-logo.png" alt={`${BRAND_NAME} Logo`} fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-datadadaYellow-400">{BRAND_NAME}</h3>
            </div>
            <p className="text-datadadaGray-300 text-lg leading-relaxed max-w-md">
              Your Premium Source for Curated Student Databases for Marketing and Academic Outreach. Connecting
              businesses with the right student demographics across India.
            </p>
            <div className="flex items-center space-x-2 text-datadadaYellow-400">
              <Heart className="h-4 w-4 fill-current" />
              <span className="text-sm">Trusted by 500+ Educational Institutions</span>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-datadadaYellow-400">Contact Us</h3>
            <address className="not-italic space-y-3 text-datadadaGray-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-1 text-datadadaYellow-400" />
                <span className="text-sm leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-datadadaYellow-400" />
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-datadadaYellow-400" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm hover:text-datadadaYellow-400 transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </address>
          </div>

          {/* Policies Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-datadadaYellow-400">Legal</h3>
            <ul className="space-y-3">
              {POLICY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-datadadaGray-300 hover:text-datadadaYellow-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-datadadaGray-700 mt-8 pt-8 text-center">
          <p className="text-datadadaGray-400 text-sm">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved. |
            <span className="text-datadadaYellow-400 ml-1">Empowering Educational Outreach</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
