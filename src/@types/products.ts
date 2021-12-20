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

export type Products = {
  loading: boolean;
  products: Product[];
  meta: {
    page: number;
    total: number;
  };
};

export interface ProductContext {
  fetchProducts: (_page?: number) => void;
  loading: boolean;
  products: Product[];
}
