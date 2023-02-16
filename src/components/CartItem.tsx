import { IProduct } from "../context/cart";
import { Button } from "./ui/Button";

type CartItemProps = IProduct & { addToCart: () => void };

export function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
}: CartItemProps) {
  return (
    <li className="text-slate-900 grid grid-cols-4 gap-2">
      <img src={thumbnail} alt={title} className="w-16 h-16" />
      <p>
        {title}- ${price}
      </p>
      <p>Qty: {quantity}</p>
      <Button onClick={addToCart}>+</Button>
    </li>
  );
}
