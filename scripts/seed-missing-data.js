// Script to add any missing basic products to ensure all categories have data
// This ensures every category page shows products

import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("Error: SUPABASE_URL and SUPABASE_ANON_KEY environment variables must be set.")
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Ensure each category has at least these basic products
const basicProductsPerCategory = {
  "mba-bba-bbm-entrance-exams": [
    {
      title: "MBA Aspirants Database 2025",
      description: "Comprehensive database of MBA entrance exam aspirants across India for 2025",
      format: "Excel",
      record_count: 85000,
      price: 3499,
      region: "PAN India",
    },
    {
      title: "BBA Entrance Aspirants 2025",
      description: "Database of BBA entrance exam aspirants in Karnataka for 2025",
      format: "Excel",
      record_count: 21000,
      price: 1499,
      region: "Karnataka",
    },
  ],
  "upto-12th-standard": [
    {
      title: "10th Grade Students – CBSE",
      description: "CBSE 10th grade students database across PAN India",
      format: "Excel",
      record_count: 75000,
      price: 2999,
      region: "PAN India",
    },
    {
      title: "12th Science Students – Gujarat Board",
      description: "Gujarat Board 12th Science stream students database",
      format: "Excel",
      record_count: 32000,
      price: 1399,
      region: "Gujarat Board",
    },
  ],
  "engineering-diploma-aspirants": [
    {
      title: "Engineering Entrance Aspirants – 2025 – India",
      description: "Engineering entrance exam aspirants database across India for 2025",
      format: "Excel",
      record_count: 110000,
      price: 3999,
      region: "India",
    },
    {
      title: "Diploma Final Year Students – Telangana",
      description: "Final year diploma students database in Telangana",
      format: "Excel",
      record_count: 22000,
      price: 1499,
      region: "Telangana",
    },
  ],
  "medical-aspirants": [
    {
      title: "NEET Aspirants 2025 – PAN India",
      description: "NEET entrance exam aspirants database across PAN India for 2025",
      format: "Excel",
      record_count: 125000,
      price: 4499,
      region: "PAN India",
    },
    {
      title: "Medical Entrance Coaching Students – Telangana",
      description: "Students enrolled in medical entrance coaching institutes in Telangana",
      format: "Excel",
      record_count: 18000,
      price: 1199,
      region: "Telangana",
    },
  ],
  "final-year-graduates": [
    {
      title: "Graduate Passed-Out 2023 – PAN India",
      description: "Graduates who passed out in 2023 across PAN India",
      format: "Excel",
      record_count: 55000,
      price: 2499,
      region: "PAN India",
    },
    {
      title: "Job Seeking Graduates – India",
      description: "Graduates actively seeking jobs across India",
      format: "Excel",
      record_count: 100000,
      price: 3299,
      region: "India",
    },
  ],
  "ug-entrance-exams": [
    {
      title: "UG Entrance Aspirants 2025 – India",
      description: "Undergraduate entrance exam aspirants database across India for 2025",
      format: "Excel",
      record_count: 110000,
      price: 3499,
      region: "India",
    },
    {
      title: "CLAT Aspirants – North India",
      description: "CLAT entrance exam aspirants database in North India",
      format: "Excel",
      record_count: 8000,
      price: 999,
      region: "North India",
    },
  ],
  "ca-law-journalism-mass-comm-entrance-exams": [
    {
      title: "CA Foundation Students – India",
      description: "CA Foundation course students database across India",
      format: "Excel",
      record_count: 45000,
      price: 2199,
      region: "India",
    },
    {
      title: "Law Entrance Aspirants – Maharashtra",
      description: "Law entrance exam aspirants database in Maharashtra",
      format: "Excel",
      record_count: 20000,
      price: 1299,
      region: "Maharashtra",
    },
  ],
  "mca-me-mtech-march-entrance-exams": [
    {
      title: "MCA Entrance Aspirants – 2025",
      description: "MCA entrance exam aspirants database for 2025",
      format: "Excel",
      record_count: 25000,
      price: 1799,
      region: "PAN India",
    },
    {
      title: "M.Tech 1st Year Students – Karnataka",
      description: "First year M.Tech students database in Karnataka",
      format: "Excel",
      record_count: 10000,
      price: 899,
      region: "Karnataka",
    },
  ],
}

async function seedMissingData() {
  console.log("🔍 Checking for missing data in categories...\n")

  for (const [category, products] of Object.entries(basicProductsPerCategory)) {
    console.log(`Checking category: ${category}`)

    // Check if category has any products
    const { data: existingProducts, error } = await supabase.from("products").select("id").eq("category", category)

    if (error) {
      console.error(`❌ Error checking ${category}:`, error)
      continue
    }

    if (existingProducts.length === 0) {
      console.log(`  ⚠️  No products found, adding basic products...`)

      // Add category to each product
      const productsToAdd = products.map((product) => ({
        ...product,
        category,
      }))

      const { error: insertError } = await supabase.from("products").insert(productsToAdd)

      if (insertError) {
        console.error(`  ❌ Error adding products to ${category}:`, insertError)
      } else {
        console.log(`  ✅ Added ${productsToAdd.length} products to ${category}`)
      }
    } else {
      console.log(`  ✅ Category has ${existingProducts.length} products`)
    }
  }

  console.log("\n🎉 Missing data check complete!")
  console.log("🌐 All category pages should now show products")
}

// Run the seeding
seedMissingData()
