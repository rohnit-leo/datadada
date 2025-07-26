import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BRAND_NAME, BRAND_SLOGAN, DATABASE_CATEGORIES } from "@/lib/utils/constants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Database, Shield, Zap, CheckCircle, TrendingUp, Award, Clock } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Database,
      title: "Curated Databases",
      description: "Meticulously verified and updated student databases across 8+ categories",
      color: "bg-datadadaBlue-100 text-datadadaBlue-600",
    },
    {
      icon: Shield,
      title: "Data Integrity",
      description: "100% authentic data with regular verification and quality checks",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Targeted Reach",
      description: "Precise demographic targeting for maximum campaign effectiveness",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "Quick delivery via WhatsApp with immediate download links",
      color: "bg-datadadaYellow-100 text-datadadaYellow-600",
    },
  ]

  const stats = [
    { number: "500K+", label: "Student Records", icon: Users },
    { number: "8", label: "Categories", icon: Database },
    { number: "25+", label: "States Covered", icon: TrendingUp },
    { number: "99%", label: "Data Accuracy", icon: Award },
  ]

  const benefits = [
    "Verified and updated databases",
    "Instant WhatsApp delivery",
    "Multiple format options",
    "24/7 customer support",
    "Competitive pricing",
    "Regular data updates",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-datadadaYellow-50 to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
        <div className="relative container py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-datadadaYellow-200 to-amber-200 text-datadadaYellow-900 border-datadadaYellow-300 hover:from-datadadaYellow-300 hover:to-amber-300 text-sm px-4 py-2 font-medium shadow-md">
                  🚀 Premium Student Database Platform
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-datadadaText leading-tight">
                  Welcome to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-datadadaYellow-600 via-amber-500 to-orange-500">
                    {BRAND_NAME}
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-datadadaGray-600 font-medium">{BRAND_SLOGAN}</p>
                <p className="text-lg text-datadadaGray-600 max-w-2xl leading-relaxed">
                  Unlock unparalleled outreach with our meticulously curated and filtered student databases. Perfect for
                  educational institutions, coaching centers, and businesses targeting the student demographic.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/databases">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-datadadaYellow-500 to-amber-500 hover:from-datadadaYellow-600 hover:to-amber-600 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    Explore Databases
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-datadadaYellow-400 text-datadadaYellow-700 hover:bg-gradient-to-r hover:from-datadadaYellow-500 hover:to-amber-500 hover:border-transparent hover:text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-datadadaYellow-200 via-amber-200 to-orange-200 rounded-full flex items-center justify-center shadow-2xl animate-float border-4 border-white/30">
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                    <Image
                      src="/images/datadada-logo.png"
                      alt={`${BRAND_NAME} Logo`}
                      fill
                      className="object-contain drop-shadow-lg"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-datadadaBlue-100 rounded-full flex items-center justify-center animate-pulse-glow">
                  <CheckCircle className="h-12 w-12 text-datadadaBlue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-white via-datadadaYellow-50 to-amber-50 border-t border-datadadaYellow-100">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3 animate-slide-in group">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-datadadaYellow-200 to-amber-200 rounded-full mx-auto group-hover:from-datadadaYellow-300 group-hover:to-amber-300 transition-all duration-300 shadow-md">
                  <stat.icon className="h-8 w-8 text-datadadaYellow-700" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-datadadaText">{stat.number}</div>
                <div className="text-datadadaGray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 via-datadadaYellow-50 to-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-datadadaBlue-100 to-cyan-100 text-datadadaBlue-800 border-datadadaBlue-200 px-4 py-2 shadow-sm">
              Why Choose Us
            </Badge>
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
                className="text-center p-6 border border-datadadaGray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:border-datadadaYellow-300 group"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`mx-auto w-16 h-16 ${feature.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="h-8 w-8" />
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 px-4 py-2 shadow-sm">
                <Clock className="h-4 w-4 mr-2" />
                Trusted Since 2020
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-datadadaText">
                Everything You Need for Successful Outreach
              </h2>
              <p className="text-lg text-datadadaGray-600 leading-relaxed">
                Our comprehensive platform provides all the tools and data you need to reach your target student
                audience effectively.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-datadadaGray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-datadadaYellow-100 to-datadadaBlue-100 rounded-2xl flex items-center justify-center shadow-xl">
                <div className="relative w-64 h-64">
                  <Image
                    src="/images/datadada-logo.png"
                    alt={`${BRAND_NAME} Features`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 via-datadadaYellow-50 to-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-gradient-to-r from-datadadaYellow-200 to-amber-200 text-datadadaYellow-900 border-datadadaYellow-300 px-4 py-2 shadow-md">
              Database Categories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-datadadaText">Our Database Categories</h2>
            <p className="text-xl text-datadadaGray-600 max-w-3xl mx-auto">
              Comprehensive student databases across multiple educational segments and career paths
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATABASE_CATEGORIES.map((category, index) => (
              <Link href={`/databases/${category.slug}`} key={category.slug}>
                <Card className="h-full p-6 border border-datadadaGray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white hover:border-datadadaYellow-300 group transform hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-datadadaGray-100 text-datadadaGray-700 px-3 py-1">
                        Category {index + 1}
                      </Badge>
                      <div className="w-10 h-10 bg-datadadaYellow-100 rounded-full flex items-center justify-center group-hover:bg-datadadaYellow-200 transition-colors">
                        <Users className="h-5 w-5 text-datadadaYellow-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold text-datadadaText group-hover:text-datadadaYellow-700 transition-colors leading-tight">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-datadadaGray-600 leading-relaxed text-sm">{category.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-medium text-datadadaYellow-600">View Databases</span>
                      <ArrowRight className="h-4 w-4 text-datadadaYellow-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-datadadaYellow-500 via-amber-500 to-orange-400">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Transform Your Outreach?</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join hundreds of educational institutions and businesses who trust {BRAND_NAME} for their student database
              needs. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/databases">
                <Button
                  size="lg"
                  className="bg-white text-datadadaYellow-700 hover:bg-gray-50 font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Browse All Databases
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-datadadaYellow-700 font-bold px-8 py-4 text-lg rounded-xl transition-all duration-200 transform hover:scale-105 bg-transparent backdrop-blur-sm"
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
