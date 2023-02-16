import { createContext, useState, ReactNode } from "react";

type FiltersContextType = {
  filters: { category: string; minPrice: number };
  setFilters: React.Dispatch<
    React.SetStateAction<{ category: string; minPrice: number }>
  >;
};

// Este es el que tenemos que consumir
export const FiltersContext = createContext<FiltersContextType>({
  filters: { category: "all", minPrice: 250 },
  setFilters: () => {},
});

type FiltersProviderProps = {
  children: ReactNode;
};

// Este es el que nos provee de acceso al contexto
export function FiltersProvider({ children }: FiltersProviderProps) {
  const [filters, setFilters] = useState<{
    category: string;
    minPrice: number;
  }>({
    category: "all",
    minPrice: 250,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
