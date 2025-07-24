import { BRAND_NAME } from "@/lib/utils/constants"

export default function RefundPolicyPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center text-datadadaText mb-8">Refund Policy</h1>
      <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
        <p>
          At {BRAND_NAME}, we strive for complete customer satisfaction with our curated student databases. Due to the
          digital nature of our products and the immediate access provided upon purchase, our refund policy is as
          follows:
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">All Sales Are Final</h2>
        <p>
          Once a database product has been purchased and delivered (typically via email or a secure download link after
          WhatsApp payment confirmation), it is considered consumed. Therefore, all sales are final, and we do not offer
          refunds or exchanges.
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">Why No Refunds?</h2>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <span className="font-semibold">Digital Product Nature:</span> Our databases are digital goods that cannot
            be "returned" once accessed or downloaded.
          </li>
          <li>
            <span className="font-semibold">Immediate Access:</span> Upon successful payment, customers gain immediate
            access to valuable data, which can be used instantly.
          </li>
          <li>
            <span className="font-semibold">Data Integrity:</span> To maintain the integrity and exclusivity of our
            data, we cannot allow for returns once the data has been shared.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">Ensuring Your Satisfaction</h2>
        <p>
          We encourage all prospective buyers to thoroughly review the database details, including the title,
          description, format, record count, and price, before making a purchase. If you have any questions or require
          further clarification about a specific database, please do not hesitate to contact us via WhatsApp or email
          before completing your purchase. Our team is happy to provide all necessary information to help you make an
          informed decision.
        </p>
        <p>
          We are committed to providing high-quality, accurate, and relevant data. If you encounter any issues with the
          data received (e.g., corrupted file, significant discrepancy from advertised record count), please contact us
          immediately, and we will work to resolve the issue promptly.
        </p>
      </div>
    </div>
  )
}
