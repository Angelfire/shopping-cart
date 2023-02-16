import { useReducer, createContext, ReactNode } from "react";
import {
  cartReducer,
  cartInitialState,
  CART_ACTION_TYPES,
} from "../reducers/cart";

export interface IProduct {
  id: number;
  price: number;
  quantity: number;
  title: string;
  thumbnail: string;
}

export interface ICartContext {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

function useCartReducer(): ICartContext {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product: IProduct) =>
    dispatch({
      type: CART_ACTION_TYPES.ADD_TO_CART,
      payload: product,
    });

  const removeFromCart = (product: IProduct) =>
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_FROM_CART,
      payload: product,
    });

  const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });

  return { cart: state, addToCart, removeFromCart, clearCart };
}

interface ICartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: ICartProviderProps) {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
