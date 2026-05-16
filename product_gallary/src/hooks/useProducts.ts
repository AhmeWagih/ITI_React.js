import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { Product } from "src/types";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category")?.toLowerCase() ?? "";

  const isAllCategory = category === "";
  const isElectronicsCategory = category === "electronics";
  const isClothingCategory = category === "clothing";

  const categoryLabel = isElectronicsCategory
    ? "Electronics"
    : isClothingCategory
      ? "Clothing"
      : "All Products";

  const updateCategoryFilter = (value?: string) => {
    const next = new URLSearchParams(searchParams);
    if (!value) {
      next.delete("category");
    } else {
      next.set("category", value);
    }
    setSearchParams(next);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch {
        setError("Failed to load products. Please try again later.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase().trim());

    const matchesCategory = isAllCategory
      ? true
      : isClothingCategory
        ? product.category.toLowerCase().includes("clothing")
        : product.category.toLowerCase() === category;

    return matchesSearch && matchesCategory;
  });

  return {
    loading,
    error,
    search,
    setSearch,
    filteredProducts,
    categoryLabel,
    isAllCategory,
    isElectronicsCategory,
    isClothingCategory,
    updateCategoryFilter,
  };
}
