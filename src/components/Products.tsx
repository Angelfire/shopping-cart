import { FC } from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

import { useCart } from "../hooks/useCart";
import { IProduct } from "../context/cart";
import { Button } from "./ui/Button";

interface ProductsProps {
  products: IProduct[];
}

export const Products: FC<ProductsProps> = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product: IProduct) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul className="container grid grid-cols-3 gap-4">
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product);

          return (
            <li
              key={product.id}
              className="bg-slate-900 flex flex-col gap-4 items-center p-4 rounded"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="aspect-video rounded-md"
              />
              <p className="text-slate-100">
                {product.title} - ${product.price}
              </p>
              <div>
                <Button
                  className={`${
                    isProductInCart ? "bg-red-600" : "bg-green-600"
                  }`}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
