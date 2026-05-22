import { Badge } from "src/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Link } from "react-router";
import type { ProductCardProps } from "src/types";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "src/store/cartSlice";

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  return (
    <Card className="h-full transition-shadow hover:shadow-md">
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
        <Link to={`/product/${product.id}`}>
          <CardTitle className="line-clamp-2 text-sm leading-snug">
            {product.title}
          </CardTitle>
        </Link>
        <CardDescription className="capitalize">
          {product.category}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-lg font-semibold text-foreground">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          className="flex-1 cursor-pointer"
          variant="default"
          size="lg"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
        <Link to={`/product/${product.id}`}>
          <Button className="cursor-pointer" variant="outline" size="lg">
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
