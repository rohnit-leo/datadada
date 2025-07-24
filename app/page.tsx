import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BRAND_NAME, BRAND_SLOGAN, DATABASE_CATEGORIES } from "@/lib/utils/constants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Database, Shield, Zap } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Database,
      title: "Curated Databases",
      description: "Meticulously verified and updated student databases across 8+ categories",
    },
    {
      icon: Shield,
      title: "Data Integrity",
      description: "100% authentic data with regular verification and quality checks",
    },
    {
      icon: Users,
      title: "Targeted Reach",
      description: "Precise demographic targeting for maximum campaign effectiveness",
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Quick delivery via WhatsApp with immediate download links",
    },
  ]

  const stats = [
    { number: "500K+", label: "Student Records" },
    { number: "8", label: "Categories" },
    { number: "25+", label: "States Covered" },
    { number: "99%", label: "Data Accuracy" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-datadadaYellow-400 via-datadadaYellow-500 to-datadadaYellow-600 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="relative container py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-2">
                  🚀 Premium Student Database Platform
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  Welcome to <span className="text-white drop-shadow-lg">{BRAND_NAME}</span>
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 font-medium">{BRAND_SLOGAN}</p>
                <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
                  Unlock unparalleled outreach with our meticulously curated and filtered student databases. Perfect for
                  educational institutions, coaching centers, and businesses targeting the student demographic.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/databases">
                  <Button
                    size="lg"
                    className="bg-white text-datadadaYellow-600 hover:bg-datadadaYellow-50 font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
                  >
                    Explore Databases
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-datadadaYellow-600 font-bold px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105 bg-transparent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl"></div>
                <Image
                  src="/images/datadada-logo.png"
                  alt={`${BRAND_NAME} Logo`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2 animate-slide-in">
                <div className="text-3xl lg:text-4xl font-bold text-datadadaYellow-600">{stat.number}</div>
                <div className="text-datadadaGray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-datadadaYellow-50 to-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-datadadaText">Why Choose {BRAND_NAME}?</h2>
            <p className="text-xl text-datadadaGray-600 max-w-3xl mx-auto">
              We understand the critical need for accurate and relevant data. Our platform delivers the highest quality
              leads for your marketing campaigns and academic research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:bg-datadadaYellow-50 group"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto w-16 h-16 bg-datadadaYellow-100 rounded-full flex items-center justify-center group-hover:bg-datadadaYellow-200 transition-colors">
                    <feature.icon className="h-8 w-8 text-datadadaYellow-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-datadadaText group-hover:text-datadadaYellow-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-datadadaGray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-datadadaText">Our Database Categories</h2>
            <p className="text-xl text-datadadaGray-600 max-w-3xl mx-auto">
              Comprehensive student databases across multiple educational segments and career paths
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATABASE_CATEGORIES.map((category, index) => (
              <Link href={`/databases/${category.slug}`} key={category.slug}>
                <Card className="h-full p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-white to-datadadaYellow-50 hover:from-datadadaYellow-50 hover:to-datadadaYellow-100 group transform hover:-translate-y-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-datadadaYellow-100 text-datadadaYellow-800">
                        Category {index + 1}
                      </Badge>
                      <ArrowRight className="h-5 w-5 text-datadadaYellow-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <CardTitle className="text-xl font-bold text-datadadaYellow-700 group-hover:text-datadadaYellow-800 transition-colors leading-tight">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-datadadaGray-600 leading-relaxed">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-datadadaYellow-500 to-datadadaYellow-600">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Transform Your Outreach?</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join hundreds of educational institutions and businesses who trust {BRAND_NAME}
              for their student database needs. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/databases">
                <Button
                  size="lg"
                  className="bg-white text-datadadaYellow-600 hover:bg-datadadaYellow-50 font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
                >
                  Browse All Databases
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-datadadaYellow-600 font-bold px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
