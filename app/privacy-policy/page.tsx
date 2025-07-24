import { BRAND_NAME } from "@/lib/utils/constants"

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center text-datadadaText mb-8">Privacy Policy</h1>
      <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
        <p>
          This Privacy Policy describes how {BRAND_NAME} collects, uses, and discloses your personal information when
          you visit or make a purchase from our website.
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">Information We Collect</h2>
        <p>
          We collect information you provide directly to us when you interact with our website, such as when you inquire
          about a database via WhatsApp. This may include:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Your name and contact details (e.g., phone number, email address)</li>
          <li>Details about the database you are interested in</li>
          <li>Any other information you choose to provide in your messages</li>
        </ul>
        <p>
          We do not collect any payment information directly on our website as all purchases are handled via WhatsApp.
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Respond to your inquiries and provide customer support</li>
          <li>Process your database purchase requests via WhatsApp</li>
          <li>Communicate with you about our products and services</li>
          <li>Improve our website and offerings</li>
        </ul>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">Sharing Your Information</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This
          does not include trusted third parties who assist us in operating our website, conducting our business, or
          servicing you, so long as those parties agree to keep this information confidential. We may also release your
          information when we believe release is appropriate to comply with the law, enforce our site policies, or
          protect ours or others&apos; rights, property, or safety.
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information when you place
          an inquiry or access your personal information.
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">Your Consent</h2>
        <p>By using our site, you consent to our website&apos;s privacy policy.</p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">Changes to our Privacy Policy</h2>
        <p>If we decide to change our privacy policy, we will post those changes on this page.</p>
      </div>
    </div>
  )
}
