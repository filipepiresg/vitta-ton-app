import { useEffect, useState } from 'react';

import { Product, ProductContext, Products } from '../../@types/products';
import { Constants } from '../../common';
import api, { Endpoints } from '../../services/api';

export const INITIAL_PRODUCTS: Products = {
  products: [],
  loading: false,
  meta: {
    page: 1,
    total: 1,
  },
};

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

      // TODO lista de produtos inativos
      const PRODUCTS_UNAVAILABLE = [5, 9, 12, 17];
      const _products = data
        .slice((page - 1) * Constants.PAGINATE_COUNT, (page + 1) * Constants.PAGINATE_COUNT)
        .map((product) => ({
          ...product,
          available: PRODUCTS_UNAVAILABLE.includes(product.id)
            ? 0
            : Math.floor(Math.random() * 6) + 1,
        }));

      setState((_state) => ({
        ..._state,
        products: page === 1 ? _products : [...state.products, ..._products],
        loading: false,
        meta: {
          // eslint-disable-next-line no-param-reassign
          page: ++page,
          total: Math.ceil(data.length / Constants.PAGINATE_COUNT),
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
