import { Product } from './products';

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
  addProduct: (product: Product, quantity?: number) => void;
  cart: Cart;
}
