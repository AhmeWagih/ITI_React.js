import { Alert, AlertDescription } from "src/components/ui/alert";
import { Spinner } from "src/components/ui/spinner";
import { ProductCard } from "src/components/shared/ProductCard";
import type { ProductGalleryProps } from "src/types";

export function ProductGallery({
  products,
  loading,
  error,
  search,
}: ProductGalleryProps) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24">
        <Spinner className="size-8 text-primary" />
        <p className="text-sm text-muted-foreground">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-lg">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-muted-foreground">
        {search ? `No products match "${search}".` : "No products available."}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
