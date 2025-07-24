import type { DatabaseProduct } from "@/lib/utils/constants"
import { getWhatsAppLink } from "@/lib/utils/whatsapp"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, MapPin, MessageCircle, FileText, Star } from "lucide-react"
import Link from "next/link"

type DatabaseCardProps = {
  product: DatabaseProduct
}

export function DatabaseCard({ product }: DatabaseCardProps) {
  const whatsappLink = getWhatsAppLink(product)

  return (
    <Card className="group flex flex-col justify-between h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-datadadaGray-200 bg-white hover:border-datadadaYellow-300 transform hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-3">
          <Badge
            variant="secondary"
            className="bg-datadadaYellow-100 text-datadadaYellow-800 hover:bg-datadadaYellow-200 font-medium"
          >
            <FileText className="h-3 w-3 mr-1" />
            {product.format}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-datadadaYellow-500 fill-current" />
            <span className="text-xs text-datadadaGray-500 font-medium">Verified</span>
          </div>
        </div>
        <CardTitle className="text-lg font-bold text-datadadaText group-hover:text-datadadaYellow-700 transition-colors leading-tight line-clamp-2">
          {product.title}
        </CardTitle>
        {product.description && (
          <CardDescription className="text-datadadaGray-600 text-sm leading-relaxed line-clamp-2">
            {product.description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-4 text-sm">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center justify-between p-3 bg-datadadaGray-50 rounded-lg border border-datadadaGray-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 bg-datadadaBlue-100 rounded-full">
                <Users className="h-4 w-4 text-datadadaBlue-600" />
              </div>
              <div>
                <p className="font-semibold text-datadadaText text-xs">Total Records</p>
                <p className="text-datadadaGray-700 font-bold">{product.record_count.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {product.region && (
            <div className="flex items-center gap-2 p-2 bg-datadadaYellow-50 rounded-lg border border-datadadaYellow-200">
              <MapPin className="h-4 w-4 text-datadadaYellow-600" />
              <span className="text-datadadaYellow-800 font-medium text-sm">{product.region}</span>
            </div>
          )}

          <div className="flex items-center justify-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <DollarSign className="h-4 w-4 text-green-600" />
                <span className="text-xs font-medium text-green-700">Price</span>
              </div>
              <p className="text-2xl font-bold text-green-600">₹{product.price.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
            <MessageCircle className="h-4 w-4 mr-2" />
            Buy via WhatsApp
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
