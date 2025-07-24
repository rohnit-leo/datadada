import { notFound } from "next/navigation"
import { DatabaseCard } from "@/components/database-card"
import { DATABASE_CATEGORIES, type DatabaseProduct } from "@/lib/utils/constants"
import { createServerSupabaseClient } from "@/lib/supabase/server"
import { Badge } from "@/components/ui/badge"
import { Database, Filter } from "lucide-react"

type CategoryPageProps = {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  return DATABASE_CATEGORIES.map((category) => ({
    category: category.slug,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = params

  const categoryInfo = DATABASE_CATEGORIES.find((cat) => cat.slug === categorySlug)

  if (!categoryInfo) {
    notFound()
  }

  const supabase = createServerSupabaseClient()
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", categorySlug)
    .order("title", { ascending: true })

  if (error) {
    console.error("Error fetching products:", error)
    return (
      <div className="min-h-screen bg-gradient-to-b from-datadadaYellow-50 to-white">
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-datadadaText mb-4">Error Loading Databases</h1>
          <p className="text-datadadaGray-600">
            Could not load products for {categoryInfo.name}. Please try again later.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-datadadaYellow-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-datadadaYellow-500 to-datadadaYellow-600 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
              <Database className="h-4 w-4 mr-2" />
              {products.length} Databases Available
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">{categoryInfo.name}</h1>
            <p className="text-xl text-white/90 leading-relaxed">{categoryInfo.description}</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container">
          {products.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-datadadaYellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="h-12 w-12 text-datadadaYellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-datadadaText mb-4">No Databases Available</h2>
              <p className="text-datadadaGray-600 text-lg">
                No database products found in this category yet. Please check back later or contact us for custom
                requirements!
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Filter className="h-5 w-5 text-datadadaYellow-600" />
                  <span className="text-lg font-semibold text-datadadaText">
                    {products.length} Database{products.length !== 1 ? "s" : ""} Found
                  </span>
                </div>
                <Badge variant="outline" className="border-datadadaYellow-300 text-datadadaYellow-700 px-3 py-1">
                  All verified & updated
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product: DatabaseProduct) => (
                  <div key={product.id} className="animate-fade-in">
                    <DatabaseCard product={product} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
