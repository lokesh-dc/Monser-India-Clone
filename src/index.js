import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import AppContextProvider from './Context/AppContext';
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme(
    {
        colors:{
            primary : "#6c54da",
            dark_primary  : "#463592",
            orange : "#f78520"
        }
    }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
  <AppContextProvider>
  <BrowserRouter>
        <App />
  </BrowserRouter>
  </AppContextProvider>
  </ChakraProvider>
);

