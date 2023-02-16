import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import { Button } from "./ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog";

import { CartItem } from "./CartItem";
import { IProduct } from "../context/cart";

export function Cart() {
  const { cart, clearCart, addToCart } = useCart();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <CartIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Cart</DialogTitle>
          <DialogDescription>Make changes in your cart.</DialogDescription>
        </DialogHeader>
        <div>
          <ul className="flex flex-col">
            {cart.map((product: IProduct) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))}
          </ul>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
          <Button onClick={clearCart}>
            <ClearCartIcon />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
