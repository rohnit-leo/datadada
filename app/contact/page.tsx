import { CONTACT_INFO, BRAND_NAME } from "@/lib/utils/constants"
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactUsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center text-datadadaText mb-8">Contact {BRAND_NAME}</h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-6 text-center">
          We&apos;re here to help! Reach out to us through any of the following channels:
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-datadadaYellow-dark flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-datadadaText">Our Address</h2>
              <p className="text-gray-700">{CONTACT_INFO.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-datadadaYellow-dark flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-datadadaText">Phone / WhatsApp</h2>
              <p className="text-gray-700">{CONTACT_INFO.phone}</p>
              <Link href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Button className="mt-2 bg-green-500 text-white hover:bg-green-600 transition-colors" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" /> Chat on WhatsApp
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-datadadaYellow-dark flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-datadadaText">Email Us</h2>
              <p className="text-gray-700">
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-datadadaYellow-dark hover:underline">
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
