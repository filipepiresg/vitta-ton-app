import { Product } from './products';

export interface Cart {
  products: CartProduct[];
  amount: number;
  quantity: number;
}

export interface CartProduct extends Product {
  quantity: number;
}

export interface CartContext {
  deleteProduct: (id: number, quantity?: number) => void;
  addProduct: (product: Product, quantity?: number) => void;
  buyCart: () => void;
  cart: Cart;
}
