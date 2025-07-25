// Script to verify all database products are properly seeded and visible
// Run this to check if all categories have products

import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("Error: SUPABASE_URL and SUPABASE_ANON_KEY environment variables must be set.")
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const EXPECTED_CATEGORIES = [
  "mba-bba-bbm-entrance-exams",
  "upto-12th-standard",
  "engineering-diploma-aspirants",
  "medical-aspirants",
  "final-year-graduates",
  "ug-entrance-exams",
  "ca-law-journalism-mass-comm-entrance-exams",
  "mca-me-mtech-march-entrance-exams",
]

async function checkDatabaseData() {
  console.log("🔍 Checking database data across all categories...\n")

  try {
    // Get total count
    const { data: allProducts, error: totalError } = await supabase.from("products").select("*")

    if (totalError) {
      console.error("❌ Error fetching products:", totalError)
      return
    }

    console.log(`📊 Total Products in Database: ${allProducts.length}\n`)

    // Check each category
    console.log("📋 Products by Category:")
    console.log("=".repeat(50))

    let totalFound = 0
    const categoryResults = []

    for (const category of EXPECTED_CATEGORIES) {
      const { data: categoryProducts, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", category)
        .order("title", { ascending: true })

      if (error) {
        console.error(`❌ Error fetching ${category}:`, error)
        continue
      }

      const count = categoryProducts.length
      totalFound += count

      const categoryName = category
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      console.log(`${count > 0 ? "✅" : "❌"} ${categoryName}: ${count} products`)

      categoryResults.push({
        category,
        categoryName,
        count,
        products: categoryProducts,
      })

      // Show first few products as examples
      if (count > 0) {
        console.log(`   Sample products:`)
        categoryProducts.slice(0, 3).forEach((product) => {
          console.log(`   - ${product.title} (₹${product.price.toLocaleString()})`)
        })
        if (count > 3) {
          console.log(`   ... and ${count - 3} more`)
        }
      }
      console.log("")
    }

    console.log("=".repeat(50))
    console.log(`📈 Summary:`)
    console.log(`   Total Categories: ${EXPECTED_CATEGORIES.length}`)
    console.log(`   Categories with Products: ${categoryResults.filter((r) => r.count > 0).length}`)
    console.log(`   Empty Categories: ${categoryResults.filter((r) => r.count === 0).length}`)
    console.log(`   Total Products Found: ${totalFound}`)

    // Check for missing categories
    const emptyCategories = categoryResults.filter((r) => r.count === 0)
    if (emptyCategories.length > 0) {
      console.log(`\n⚠️  Empty Categories:`)
      emptyCategories.forEach((cat) => {
        console.log(`   - ${cat.categoryName}`)
      })
      console.log(`\n💡 To add products to empty categories, run the seed-data.js script`)
    }

    // Price range analysis
    if (allProducts.length > 0) {
      const prices = allProducts.map((p) => p.price)
      const minPrice = Math.min(...prices)
      const maxPrice = Math.max(...prices)
      const avgPrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)

      console.log(`\n💰 Price Analysis:`)
      console.log(`   Lowest Price: ₹${minPrice.toLocaleString()}`)
      console.log(`   Highest Price: ₹${maxPrice.toLocaleString()}`)
      console.log(`   Average Price: ₹${avgPrice.toLocaleString()}`)
    }

    // Record count analysis
    if (allProducts.length > 0) {
      const recordCounts = allProducts.map((p) => p.record_count)
      const totalRecords = recordCounts.reduce((a, b) => a + b, 0)
      const avgRecords = Math.round(totalRecords / recordCounts.length)

      console.log(`\n📊 Record Count Analysis:`)
      console.log(`   Total Student Records: ${totalRecords.toLocaleString()}`)
      console.log(`   Average Records per Database: ${avgRecords.toLocaleString()}`)
    }

    console.log(`\n✅ Database check complete!`)

    if (totalFound === 0) {
      console.log(`\n🚀 Next Steps:`)
      console.log(`   1. Run: node scripts/seed-data.js`)
      console.log(`   2. Then run: node scripts/seed-additional-data.js`)
      console.log(`   3. Check your website at /databases`)
    } else {
      console.log(`\n🌐 Your database categories should now be visible at:`)
      EXPECTED_CATEGORIES.forEach((category) => {
        console.log(`   - /databases/${category}`)
      })
    }
  } catch (error) {
    console.error("❌ Unexpected error:", error)
  }
}

// Run the check
checkDatabaseData()
