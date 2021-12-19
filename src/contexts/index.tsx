import React from 'react';

import { CartProvider } from './CartContext';
import { ProductsProvider } from './ProductsContext';

const Providers: React.FC = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};
export default Providers;
