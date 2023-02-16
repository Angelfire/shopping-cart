import { Cart } from "./Cart";
import { Filters } from "./Filters";

export const Header = () => (
  <header className="py-4">
    <div className="container flex flex-row justify-between">
      <h1 className="text-3xl font-bold">React Shop</h1>
      <Filters />
      <Cart />
    </div>
  </header>
);
