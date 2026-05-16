import { Badge } from "src/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import type { ProductCardProps } from "src/types";


export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full">
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-4"
        />
        {product.price > 100 ? (
          <Badge className="absolute top-3 right-3 border-blue-600/30 bg-blue-600 text-white hover:bg-blue-600">
            Premium
          </Badge>
        ) : (
          <Badge className="absolute top-3 right-3 border-green-600/30 bg-green-600 text-white hover:bg-green-600">
            Best Seller
          </Badge>
        )}
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2 text-sm leading-snug">
          {product.title}
        </CardTitle>
        <CardDescription className="capitalize">
          {product.category}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-lg font-semibold text-foreground">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
    </Card>
  );
}
