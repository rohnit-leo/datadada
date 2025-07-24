import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DATABASE_CATEGORIES } from "@/lib/utils/constants"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Users, Search, Filter } from "lucide-react"

export default function DatabasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-datadadaGray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-datadadaYellow-500 to-datadadaYellow-400 py-20">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
              <Database className="h-4 w-4 mr-2" />
              Premium Database Collection
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Student Database Categories</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Browse through our extensive collection of curated student databases. Each category contains verified,
              up-to-date information for targeted outreach campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-datadadaGray-100">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-datadadaGray-500" />
              <span className="text-lg font-semibold text-datadadaText">
                {DATABASE_CATEGORIES.length} Categories Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-datadadaGray-500" />
              <Badge variant="outline" className="border-datadadaYellow-300 text-datadadaYellow-700 px-3 py-1">
                All verified & updated
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATABASE_CATEGORIES.map((category, index) => (
              <Link href={`/databases/${category.slug}`} key={category.slug}>
                <Card className="h-full p-6 border border-datadadaGray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white hover:border-datadadaYellow-300 group transform hover:-translate-y-1">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant="secondary"
                        className="bg-datadadaGray-100 text-datadadaGray-700 px-3 py-1 font-medium"
                      >
                        Category {index + 1}
                      </Badge>
                      <div className="w-12 h-12 bg-datadadaYellow-100 rounded-full flex items-center justify-center group-hover:bg-datadadaYellow-200 transition-colors">
                        <Users className="h-6 w-6 text-datadadaYellow-600" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-datadadaText group-hover:text-datadadaYellow-700 transition-colors leading-tight">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-datadadaGray-600 leading-relaxed">{category.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-datadadaGray-100">
                      <span className="text-sm font-medium text-datadadaYellow-600">View Databases</span>
                      <ArrowRight className="h-5 w-5 text-datadadaYellow-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-datadadaYellow-50 border-t border-datadadaYellow-100">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-datadadaText">Need Help Choosing the Right Database?</h2>
            <p className="text-lg text-datadadaGray-600">
              Our team is here to help you find the perfect student database for your specific needs.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-datadadaYellow-500 hover:bg-datadadaYellow-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
