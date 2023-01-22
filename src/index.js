import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'

import App from './App';
import theme from './config/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme} resetCss={false} w='100%'>
      <App />
  </ChakraProvider>
);