import React from 'react';

import { ProductsProvider } from './contexts/ProductsContext';
import Router from './routes/router';

const App = () => {
  return (
    <ProductsProvider>
      <Router />
    </ProductsProvider>
  );
};

export default App;
