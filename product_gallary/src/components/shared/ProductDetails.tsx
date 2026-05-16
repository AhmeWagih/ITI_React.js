import { Link, useParams } from "react-router";
import { Badge } from "src/components/ui/badge";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Spinner } from "src/components/ui/spinner";
import { useProductDetails } from "src/hooks/useProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductDetails(id);

  if (loading) {
    return (
      <div className="mx-auto flex max-w-7xl items-center justify-center py-16">
        <Spinner className="size-8 text-primary" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm text-destructive">
          {error ?? "Product not found."}
        </p>
        <Button asChild variant="outline">
          <Link to="/">Back to products</Link>
        </Button>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col gap-6">
      <Button asChild variant="outline" className="w-fit">
        <Link to="/">Back to products</Link>
      </Button>
      <Card className="overflow-hidden">
        <div className="grid gap-6 p-6 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-lg bg-muted/30 p-6">
            <img
              src={product.image}
              alt={product.title}
              className="h-80 w-full object-contain"
            />
          </div>

          <div>
            <CardHeader className="px-0 pt-0">
              <Badge className="mb-3 w-fit capitalize" variant="secondary">
                {product.category}
              </Badge>
              <CardTitle className="text-2xl">{product.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 px-0 pb-0">
              <p className="text-2xl font-bold text-blue-700">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                {product.description}
              </p>
            </CardContent>
            <CardFooter className="px-0 py-8">
              <Button variant="default" size='lg' className="bg-blue-800">Add to Cart</Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default ProductDetails;
