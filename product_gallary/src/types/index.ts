export interface Product  {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductCardProps {
  product: Product;
}

export interface GalleryHeaderProps {
  search: string
  onSearchChange: (value: string) => void
}

export interface ProductGalleryProps {
  products: Product[]
  loading: boolean
  error: string | null
  search: string
}