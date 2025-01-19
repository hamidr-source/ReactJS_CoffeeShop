import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeProvider from "./Context/ThemeContext";
import ProductProvider from "./Context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ProductProvider>
  </React.StrictMode>
);
