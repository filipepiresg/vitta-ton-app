import React from 'react';

import Providers from './contexts';
import Router from './routes/router';

const App = () => {
  return (
    <Providers>
      <Router />
    </Providers>
  );
};

export default App;
