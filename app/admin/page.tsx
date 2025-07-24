"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Trash2, Eye, Plus } from "lucide-react"
import { DATABASE_CATEGORIES, type DatabaseProduct } from "@/lib/utils/constants"
import { createClient } from "@/lib/supabase/client"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")

  // Form states
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [format, setFormat] = useState("")
  const [recordCount, setRecordCount] = useState<number | string>("")
  const [price, setPrice] = useState<number | string>("")
  const [category, setCategory] = useState("")
  const [region, setRegion] = useState("")
  const [loading, setLoading] = useState(false)
  const [addError, setAddError] = useState("")

  // Product management states
  const [products, setProducts] = useState<DatabaseProduct[]>([])
  const [loadingProducts, setLoadingProducts] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const supabase = createClient()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")
    if (username === "admin" && password === "datadada2025") {
      setIsAuthenticated(true)
      loadProducts()
    } else {
      setLoginError("Invalid username or password.")
    }
  }

  const loadProducts = async () => {
    setLoadingProducts(true)
    try {
      const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error loading products:", error)
      } else {
        setProducts(data || [])
      }
    } catch (error) {
      console.error("Error loading products:", error)
    }
    setLoadingProducts(false)
  }

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    setAddError("")
    setLoading(true)

    if (!title || !format || !recordCount || !price || !category) {
      setAddError("Please fill in all required fields.")
      setLoading(false)
      return
    }

    const newProduct: Omit<DatabaseProduct, "id" | "created_at"> = {
      title,
      description: description || undefined,
      format,
      record_count: Number(recordCount),
      price: Number(price),
      category,
      region: region || undefined,
    }

    const { data, error } = await supabase.from("products").insert([newProduct])

    setLoading(false)

    if (error) {
      console.error("Error adding product:", error)
      setAddError("Failed to add product: " + error.message)
    } else {
      // Clear form
      setTitle("")
      setDescription("")
      setFormat("")
      setRecordCount("")
      setPrice("")
      setCategory("")
      setRegion("")
      setAddError("")

      alert("Product added successfully! It will now appear on the website.")
      loadProducts() // Reload products list
      router.refresh()
    }
  }

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm("Are you sure you want to delete this product?")) {
      return
    }

    const { error } = await supabase.from("products").delete().eq("id", productId)

    if (error) {
      console.error("Error deleting product:", error)
      alert("Failed to delete product.")
    } else {
      alert("Product deleted successfully!")
      loadProducts() // Reload products list
      router.refresh()
    }
  }

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  const getCategoryName = (slug: string) => {
    const category = DATABASE_CATEGORIES.find((cat) => cat.slug === slug)
    return category ? category.name : slug
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadProducts()
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-datadadaBackground">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-datadadaText">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
              <Button
                type="submit"
                className="w-full bg-datadadaYellow text-datadadaText hover:bg-datadadaYellow-dark hover:text-white"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-12 space-y-8">
      <h1 className="text-4xl font-bold text-center text-datadadaText mb-8">Admin Dashboard</h1>

      {/* Add New Product Form */}
      <Card className="max-w-2xl mx-auto shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-datadadaText flex items-center gap-2">
            <Plus className="h-6 w-6" />
            Add New Database Product
          </CardTitle>
          <CardDescription>Fill in the details to add a new student database entry.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddProduct} className="space-y-6">
            <div>
              <Label htmlFor="title">Title of Database</Label>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., MBA Aspirants Database 2025"
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="e.g., Comprehensive list of MBA aspirants across India."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="format">Format Type</Label>
                <Select value={format} onValueChange={setFormat} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Excel">Excel</SelectItem>
                    <SelectItem value="CSV">CSV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="recordCount">Record Count</Label>
                <Input
                  id="recordCount"
                  type="number"
                  value={recordCount}
                  onChange={(e) => setRecordCount(e.target.value)}
                  placeholder="e.g., 85000"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Price (₹)</Label>
                <Input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g., 3499"
                  required
                />
              </div>
              <div>
                <Label htmlFor="region">Region (Optional)</Label>
                <Input
                  id="region"
                  type="text"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  placeholder="e.g., PAN India, Maharashtra"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="category">Database Category</Label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {DATABASE_CATEGORIES.map((cat) => (
                    <SelectItem key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {addError && <p className="text-red-500 text-sm">{addError}</p>}
            <Button
              type="submit"
              className="w-full bg-datadadaYellow text-datadadaText hover:bg-datadadaYellow-dark hover:text-white"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Product"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Existing Products Management */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-datadadaText flex items-center gap-2">
            <Eye className="h-6 w-6" />
            Manage Existing Products
          </CardTitle>
          <CardDescription>View and manage all database products in the system.</CardDescription>

          {/* Category Filter */}
          <div className="flex items-center gap-4 pt-4">
            <Label htmlFor="categoryFilter">Filter by Category:</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-64">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {DATABASE_CATEGORIES.map((cat) => (
                  <SelectItem key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {loadingProducts ? (
            <p className="text-center py-8">Loading products...</p>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              {filteredProducts.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{product.title}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">{getCategoryName(product.category)}</Badge>
                        <Badge variant="outline">{product.format}</Badge>
                        <Badge variant="outline">{product.record_count.toLocaleString()} records</Badge>
                        <Badge variant="outline">₹{product.price.toLocaleString()}</Badge>
                        {product.region && <Badge variant="outline">{product.region}</Badge>}
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteProduct(product.id)}
                      className="ml-4"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <p className="text-center py-8 text-gray-500">No products found in this category.</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
