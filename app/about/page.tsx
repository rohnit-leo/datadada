import { BRAND_NAME } from "@/lib/utils/constants"

export default function AboutUsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-center text-datadadaText mb-8">About {BRAND_NAME}</h1>
      <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
        <p>
          At {BRAND_NAME}, we are dedicated to providing the most accurate, relevant, and up-to-date student databases
          for your marketing and academic outreach needs. In today&apos;s competitive landscape, access to high-quality
          data is paramount for effective communication and successful campaigns.
        </p>
        <p>
          Our mission is to bridge the gap between educational institutions, coaching centers, businesses, and the
          student community. We understand the challenges of reaching the right audience, and that&apos;s why we
          specialize in curating databases that are not just extensive but also highly filtered and segmented to meet
          your specific requirements.
        </p>
        <h2 className="text-2xl font-semibold text-datadadaYellow-dark pt-4">How We Curate Our Data</h2>
        <p>
          Our data curation process is rigorous and multi-faceted, ensuring the highest standards of quality and
          reliability:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <span className="font-semibold">Diverse Sources:</span> We gather data from a wide array of legitimate and
            ethical sources, including educational institutions, public records, academic events, and student surveys.
          </li>
          <li>
            <span className="font-semibold">Verification & Validation:</span> Every entry undergoes a stringent
            verification process to ensure accuracy and eliminate outdated or duplicate information. We employ both
            automated tools and manual checks.
          </li>
          <li>
            <span className="font-semibold">Segmentation & Filtering:</span> Our databases are meticulously categorized
            and filtered by various parameters such as location, academic year, course, stream, and entrance exam
            aspirations. This allows you to target your audience with precision.
          </li>
          <li>
            <span className="font-semibold">Regular Updates:</span> The student demographic is dynamic. We continuously
            update our databases to reflect the latest information, ensuring you always have access to fresh and
            relevant leads.
          </li>
          <li>
            <span className="font-semibold">Privacy Compliance:</span> We adhere to strict data privacy guidelines and
            ethical practices, ensuring that all data is collected and handled responsibly.
          </li>
        </ul>
        <p>
          Whether you are looking to promote educational programs, offer coaching services, or market student-centric
          products, {BRAND_NAME} provides the reliable data you need to achieve your goals. Partner with us and
          experience the power of precise outreach.
        </p>
      </div>
    </div>
  )
}
