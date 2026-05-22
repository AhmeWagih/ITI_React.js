import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "src/store/store";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "src/store/cartSlice";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Button } from "src/components/ui/button";

const Cart = () => {
  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems
  );
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold">Cart</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Your cart is currently empty.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-semibold">
        Cart ({cartItems.length})
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cartItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="aspect-square overflow-hidden rounded-md bg-muted/30">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain p-4"
                />
              </div>
              <CardTitle className="line-clamp-2 text-sm leading-snug">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <p className="text-xs text-muted-foreground">
                ${item.price.toFixed(2)} each
              </p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </Button>
                <span className="w-8 text-center text-sm font-medium">
                  {item.quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </Button>
              </div>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Cart;