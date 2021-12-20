import { useEffect, useState } from 'react';

import { Product, ProductContext, Products } from '../../@types/products';
import api, { Endpoints } from '../../services/api';

export const INITIAL_PRODUCTS: Products = {
  products: [],
  loading: false,
  meta: {
    page: 1,
    total: 1,
  },
};

const PAGINATE_COUNT = 4;

export default function useProducts(): ProductContext & Products {
  const [state, setState] = useState<Products>(INITIAL_PRODUCTS);

  const fetchProducts = async (page = 1) => {
    try {
      if (state.loading || page > state.meta.total) return;

      setState((_state) => ({
        ..._state,
        loading: true,
      }));
      const { data } = await api.get<Product[]>(Endpoints.PRODUCTS);

      const _products = data
        .slice((page - 1) * PAGINATE_COUNT, (page + 1) * PAGINATE_COUNT)
        .map((product) => ({
          ...product,
          available: Math.floor(Math.random() * 6),
        }));

      setState((_state) => ({
        ..._state,
        products: page === 1 ? _products : [...state.products, ..._products],
        loading: false,
        meta: {
          // eslint-disable-next-line no-param-reassign
          page: ++page,
          total: Math.ceil(data.length / PAGINATE_COUNT),
        },
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
    fetchProducts,
  };
}
