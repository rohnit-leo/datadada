export const BRAND_NAME = "DataDADA"
export const BRAND_SLOGAN = "Your Premium Source for Curated Student Databases"

export const CONTACT_INFO = {
  address: "23-4-19/6/B1, 6th Cross Rd, Sri Krishna Nagar, Tirupati, Andhra Pradesh 517502, India",
  phone: "+91-7702143119",
  email: "daatadadaa@gmail.com",
  whatsappNumber: "917702143119", // Without '+' for WhatsApp URL
}

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Databases", href: "/databases" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

export const POLICY_LINKS = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
]

export const DATABASE_CATEGORIES = [
  {
    name: "MBA, BBA, BBM Entrance Exams",
    slug: "mba-bba-bbm-entrance-exams",
    description: "Databases for MBA, BBA, and BBM entrance exam aspirants and students.",
  },
  {
    name: "Upto 12th Standard",
    slug: "upto-12th-standard",
    description: "Student databases for 10th, 11th, and 12th standard students across various boards.",
  },
  {
    name: "Engineering, Diploma Aspirants",
    slug: "engineering-diploma-aspirants",
    description: "Databases for engineering and diploma course aspirants and students.",
  },
  {
    name: "Medical Aspirants",
    slug: "medical-aspirants",
    description: "Databases for NEET and other medical entrance exam aspirants and medical students.",
  },
  {
    name: "Final Year, Graduates",
    slug: "final-year-graduates",
    description: "Databases for final year students and recent graduates across various streams.",
  },
  {
    name: "Under Graduate Entrance Exams",
    slug: "ug-entrance-exams",
    description: "Databases for undergraduate entrance exam aspirants.",
  },
  {
    name: "CA, Law, Journalism, Mass Comm Entrance Exams",
    slug: "ca-law-journalism-mass-comm-entrance-exams",
    description: "Databases for students aspiring for CA, Law, Journalism, and Mass Communication courses.",
  },
  {
    name: "MCA, M.E, M.Tech, M.Arch Entrance Exams",
    slug: "mca-me-mtech-march-entrance-exams",
    description: "Databases for postgraduate engineering and architecture entrance exam aspirants and students.",
  },
]

export type DatabaseProduct = {
  id: string
  title: string
  description?: string
  format: string
  record_count: number
  price: number
  category: string // slug of the category
  region?: string
  created_at?: string
}
