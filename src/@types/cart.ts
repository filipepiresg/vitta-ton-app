/* eslint-disable no-unused-vars */

export interface Cart {
  products: CartProduct[];
  amount: number;
  quantity: number;
}

export interface CartProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string | string[];
  quantity: number;
}

export interface CartContext {
  deleteProduct: (id: number, quantity?: number) => void;
  addProduct: (product: CartProduct, quantity?: number) => void;
  cart: Cart;
}
