import { useState } from "react"
import { GalleryHeader } from "src/components/shared/GalleryHeader"
import { ProductGallery } from "src/components/shared/ProductGallery"
import { useProducts } from "src/hooks/useProducts"

function App() {
  const { products, loading, error } = useProducts()
  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase().trim())
  )

  return (
    <div className="min-h-screen bg-background">
      <GalleryHeader search={search} onSearchChange={setSearch} />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ProductGallery
          products={filteredProducts}
          loading={loading}
          error={error}
          search={search}
        />
      </main>
    </div>
  )
}

export default App
