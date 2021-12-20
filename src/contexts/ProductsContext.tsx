import React, { createContext } from 'react';

import { ProductContext, Products } from '../@types/products';
import useProducts, { INITIAL_PRODUCTS } from './hooks/useProducts';

const Context = createContext<ProductContext & Products>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  fetchProducts: () => {},
  ...INITIAL_PRODUCTS,
});

const ProductsProvider: React.FC = ({ children }) => {
  const context = useProducts();

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { Context, ProductsProvider };
