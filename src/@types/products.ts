export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string | string[];
  available: number;
  rating: {
    rate: number;
    count: number;
  };
};

export interface ProductContext {
  fetchProducts: (_page?: number) => void;
  loading: boolean;
  products: Product[];
}
