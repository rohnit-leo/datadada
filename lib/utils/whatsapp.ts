import { CONTACT_INFO, type DatabaseProduct } from "./constants"

export function getWhatsAppLink(product: DatabaseProduct): string {
  const categoryName = product.category
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const message = `Hello, I am interested in purchasing the following student database:

- Title: ${product.title}
- Category: ${categoryName}
- Record Count: ${product.record_count.toLocaleString()}
- Price: ₹${product.price.toLocaleString()}

Please share the payment and delivery details.`

  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`
}
