import { useEffect, useMemo, useState } from 'react';

import { findIndex } from 'lodash';

import { Cart, CartContext } from '../../@types/cart';
import { Product } from '../../@types/products';

export const INITIAL_CART: Cart = {
  products: [],
  amount: 0,
  quantity: 0,
};

export default function useCart(): CartContext {
  const [cart, setCart] = useState<Cart>(INITIAL_CART);

  const deepsString = useMemo(() => JSON.stringify(cart.products), [cart]);

  useEffect(() => {
    const amount = cart.products.reduce(
      (value, product) => value + product.quantity * product.price,
      0
    );

    const quantity = cart.products.reduce((value, product) => value + product.quantity, 0);

    setCart((state) => ({ ...state, amount, quantity }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deepsString]);

  const addProduct = (product: Product, quantity = 1) => {
    const { products } = cart;
    const index = findIndex(products, { id: product.id });

    if (index >= 0) {
      products[index].quantity += quantity;
    } else {
      products.push({ ...product, quantity });
    }

    setCart((state) => ({ ...state, products }));
  };

  const deleteProduct = (id: number, quantity = 1) => {
    const { products } = cart;
    const index = findIndex(products, { id });

    if (index < 0) {
      return;
    }

    const product = products[index];

    if (product.quantity > quantity) {
      products[index].quantity -= quantity;
    } else {
      products.splice(index, 1);
    }

    setCart((state) => ({ ...state, products }));
  };

  return { cart, deleteProduct, addProduct };
}
