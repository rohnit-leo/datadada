import { BRAND_NAME } from "@/lib/utils/constants"

export default function TermsAndConditionsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center text-datadadaText mb-8">Terms & Conditions</h1>
      <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
        <p>
          Welcome to {BRAND_NAME}! These terms and conditions outline the rules and regulations for the use of{" "}
          {BRAND_NAME}&apos;s Website, located at [Your Website URL, e.g., datadada.com].
        </p>
        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use {BRAND_NAME}{" "}
          if you do not agree to take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">1. Intellectual Property Rights</h2>
        <p>
          Unless otherwise stated, {BRAND_NAME} and/or its licensors own the intellectual property rights for all
          material on {BRAND_NAME}. All intellectual property rights are reserved. You may access this from {BRAND_NAME}{" "}
          for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Republish material from {BRAND_NAME}</li>
          <li>Sell, rent or sub-license material from {BRAND_NAME}</li>
          <li>Reproduce, duplicate or copy material from {BRAND_NAME}</li>
          <li>Redistribute content from {BRAND_NAME}</li>
        </ul>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">2. Use of Our Databases</h2>
        <p>
          The student databases provided by {BRAND_NAME} are for marketing and academic outreach purposes only. You
          agree not to use the data for any illegal, unethical, or unauthorized activities. You are responsible for
          ensuring your use of the data complies with all applicable laws and regulations, including data protection and
          privacy laws.
        </p>
        <p>
          Resale or redistribution of the purchased databases is strictly prohibited without explicit written consent
          from {BRAND_NAME}.
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">3. No Guarantees</h2>
        <p>
          While we strive to provide accurate and up-to-date information, {BRAND_NAME} makes no representations or
          warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or
          availability with respect to the website or the information, products, services, or related graphics contained
          on the website for any purpose. Any reliance you place on such information is therefore strictly at your own
          risk.
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">4. Limitation of Liability</h2>
        <p>
          In no event will {BRAND_NAME} be liable for any loss or damage including without limitation, indirect or
          consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising
          out of, or in connection with, the use of this website or the databases purchased from us.
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">5. External Links</h2>
        <p>
          Our website may contain links to external websites that are not provided or maintained by or in any way
          affiliated with {BRAND_NAME}. Please note that {BRAND_NAME} does not guarantee the accuracy, relevance,
          timeliness, or completeness of any information on these external websites.
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">6. Changes to Terms</h2>
        <p>
          {BRAND_NAME} reserves the right to revise these terms and conditions at any time as it sees fit, and by using
          this website you are expected to review these terms on a regular basis.
        </p>

        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">7. Governing Law & Jurisdiction</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of India, and you
          irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
        </p>
      </div>
    </div>
  )
}
