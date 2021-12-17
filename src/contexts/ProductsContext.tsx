import React, { createContext, ReactNode } from 'react';

import { ProductContext } from '~/@types/products';

import useProducts from './hooks/useProducts';

const Context = createContext<ProductContext>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  fetchProducts: () => {},
  products: [],
  loading: true,
});

export type Props = {
  children: ReactNode;
};

function ProductsProvider({ children }: Props) {
  const context = useProducts();

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export { Context, ProductsProvider };
