import { useEffect, useState } from 'react';

import { findIndex } from 'lodash';

import { Cart, CartProduct } from '../../@types/cart';

export const INITIAL_CART: Cart = {
  products: [],
  amount: 0,
  quantity: 0,
};

export default function useCart() {
  const [cart, setCart] = useState<Cart>(INITIAL_CART);

  useEffect(() => {
    const amount = cart.products.reduce(
      (value, product) => value + product.quantity * product.price,
      0
    );

    const quantity = cart.products.reduce((value, product) => value + product.quantity, 0);

    setCart((state) => ({ ...state, amount, quantity }));
  }, [cart.products]);

  const addProduct = (product: CartProduct, quantity = 1) => {
    const { products } = cart;
    const index = findIndex(products, { id: product.id });

    if (index >= 0) {
      products[index].quantity += quantity;
    } else {
      products.push(product);
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
