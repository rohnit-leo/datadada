import type { DatabaseProduct } from "@/lib/utils/constants"
import { getWhatsAppLink } from "@/lib/utils/whatsapp"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, MapPin, MessageCircle } from "lucide-react"
import Link from "next/link"

type DatabaseCardProps = {
  product: DatabaseProduct
}

export function DatabaseCard({ product }: DatabaseCardProps) {
  const whatsappLink = getWhatsAppLink(product)

  return (
    <Card className="group flex flex-col justify-between h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-datadadaYellow-50 hover:from-datadadaYellow-50 hover:to-datadadaYellow-100 transform hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge
            variant="secondary"
            className="bg-datadadaYellow-100 text-datadadaYellow-800 hover:bg-datadadaYellow-200"
          >
            {product.format}
          </Badge>
          {product.region && (
            <Badge variant="outline" className="border-datadadaYellow-300 text-datadadaYellow-700">
              <MapPin className="h-3 w-3 mr-1" />
              {product.region}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-bold text-datadadaText group-hover:text-datadadaYellow-700 transition-colors leading-tight">
          {product.title}
        </CardTitle>
        {product.description && (
          <CardDescription className="text-datadadaGray-600 text-sm leading-relaxed">
            {product.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-4 text-sm">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-datadadaYellow-100 rounded-full">
              <Users className="h-4 w-4 text-datadadaYellow-600" />
            </div>
            <div>
              <p className="font-semibold text-datadadaText">Records</p>
              <p className="text-datadadaGray-600">{product.record_count.toLocaleString()}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
            <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
              <DollarSign className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-datadadaText">Price</p>
              <p className="text-2xl font-bold text-green-600">₹{product.price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
            <MessageCircle className="h-5 w-5 mr-2" />
            Buy via WhatsApp
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
