export type Product = {
  id: number;
  name: string;
  description: string;
  value: number;
  image_url: string | string[];
};

export interface ProductContext {
  fetchProducts: (_page?: number) => void;
  loading: boolean;
  products: Product[];
}
