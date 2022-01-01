import React from 'react'

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { AuthProvider } from "./context/AuthContext";


ReactDOM.render(
 <AuthProvider>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </AuthProvider>,
 document.getElementById("root")
);
