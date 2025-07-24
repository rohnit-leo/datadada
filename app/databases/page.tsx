import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DATABASE_CATEGORIES } from "@/lib/utils/constants"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Users } from "lucide-react"

export default function DatabasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-datadadaYellow-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-datadadaYellow-500 to-datadadaYellow-600 py-20">
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

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATABASE_CATEGORIES.map((category, index) => (
              <Link href={`/databases/${category.slug}`} key={category.slug}>
                <Card className="h-full p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white hover:bg-datadadaYellow-50 group transform hover:-translate-y-2">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-datadadaYellow-100 text-datadadaYellow-800 px-3 py-1">
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
                    <div className="flex items-center justify-between pt-4">
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
      <section className="py-16 bg-datadadaYellow-100">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-datadadaText">Need Help Choosing the Right Database?</h2>
            <p className="text-lg text-datadadaGray-600">
              Our team is here to help you find the perfect student database for your specific needs.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-datadadaYellow-600 hover:bg-datadadaYellow-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
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
