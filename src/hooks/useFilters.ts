import { useContext } from 'react';
import { FiltersContext, FiltersContextValue } from '../context/filters';

export function useFilters() {
  const { filters, setFilters } = useContext<FiltersContextValue>(FiltersContext);

  const filterProducts = (products: any[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}
