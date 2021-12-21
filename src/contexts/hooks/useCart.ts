import { useEffect, useMemo, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';

import RNAsyncStorage from '@react-native-async-storage/async-storage';

import { findIndex } from 'lodash';

import { Cart, CartContext } from '../../@types/cart';
import { Product } from '../../@types/products';
import { Constants } from '../../common';

export const INITIAL_CART: Cart = {
  products: [],
  amount: 0,
  quantity: 0,
};

const CART_MEMORY = Constants.APP_NAME + '/cart';

export default function useCart(): CartContext {
  const [cart, setCart] = useState<Cart>(INITIAL_CART);

  const deepsString = useMemo(() => JSON.stringify(cart.products), [cart]);

  useEffect(() => {
    (async () => {
      try {
        const _cart = await RNAsyncStorage.getItem(CART_MEMORY);
        if (_cart) {
          setCart(JSON.parse(_cart));
        }
      } catch (error) {
        console.log('Error on get cart');
        console.log(error);
      } finally {
        SplashScreen.hide();
      }
    })();
  }, []);

  useEffect(() => {
    const amount = cart.products.reduce(
      (value, product) => value + product.quantity * product.price,
      0
    );

    const quantity = cart.products.reduce((value, product) => value + product.quantity, 0);

    setCart((state) => {
      const newState = { ...state, amount, quantity };
      RNAsyncStorage.setItem(CART_MEMORY, JSON.stringify(newState));
      return newState;
    });

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

  const buyCart = () => {
    setCart({ products: [], amount: 0, quantity: 0 });
    RNAsyncStorage.clear();
  };

  return { cart, deleteProduct, addProduct, buyCart };
}
