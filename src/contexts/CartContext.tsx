/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from 'react';

import { CartContext, CartProduct } from '../@types/cart';
import useCart, { INITIAL_CART } from './hooks/useCart';

const Context = createContext<CartContext>({
  addProduct: (_product: CartProduct) => {},
  deleteProduct: (_id: number) => {},
  cart: INITIAL_CART,
});

const CartProvider: React.FC = ({ children }) => {
  const context = useCart();

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { Context, CartProvider };
