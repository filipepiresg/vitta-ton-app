import { useEffect, useState } from 'react';

import { Product, ProductContext } from '../../@types/products';
import api, { Endpoints } from '../../services/api';

export default function useProducts(): ProductContext {
  const [state, setState] = useState<{ loading: boolean; products: Product[] }>({
    products: [],
    loading: true,
  });

  const fetchProducts = async () => {
    try {
      setState((_state) => ({
        ..._state,
        loading: true,
      }));
      const { data: _products } = await api.get<Product[]>(Endpoints.PRODUCTS);

      setState((_state) => ({
        products: _products.map((product) => ({
          ...product,
          available: Math.floor(Math.random() * 6),
        })),
        loading: false,
      }));
    } catch (error) {
      console.error(error);

      setState((_state) => ({
        ..._state,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    (async () => {
      await fetchProducts();
    })();
  }, []);

  return {
    ...state,
    fetchProducts,
  };
}
