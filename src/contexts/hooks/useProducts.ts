import { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { Product, ProductContext } from '~/@types/products';
import api, { Endpoints } from '~/services/api';

export default function useProducts(): ProductContext {
  const [state, setState] = useState<{ loading: boolean; products: Product[] }>({
    products: [],
    loading: true,
  });

  const fetchProducts = async (page = 0) => {
    try {
      setState((_state) => ({
        ..._state,
        loading: true,
      }));
      const { data: _products } = await api.get<Product[]>(Endpoints.PRODUCTS);

      setState((_state) => ({
        products: page > 0 ? [..._state.products, ..._products] : _products,
        loading: false,
      }));
    } catch (error) {
      console.error(error);

      setState((_state) => ({
        ..._state,
        loading: false,
      }));
    } finally {
      SplashScreen.hide();
    }
  };

  useEffect(() => {
    (async () => {
      await fetchProducts();

      SplashScreen.hide();
    })();
  }, []);

  return {
    ...state,
    fetchProducts,
  };
}
