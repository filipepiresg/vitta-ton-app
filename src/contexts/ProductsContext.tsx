import React, { createContext } from 'react';

import { ProductContext } from '../@types/products';
import useProducts from './hooks/useProducts';

const Context = createContext<ProductContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  fetchProducts: () => {},
  products: [],
  loading: true,
});

const ProductsProvider: React.FC = ({ children }) => {
  const context = useProducts();

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { Context, ProductsProvider };
