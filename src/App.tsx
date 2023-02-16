import { products } from "./mocks/products.json";

import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { CartProvider } from "./context/cart";
import { useFilters } from "./hooks/useFilters";

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Products products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
