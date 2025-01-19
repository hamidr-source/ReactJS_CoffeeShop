import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get("https://fake-coffee-api.vercel.app/api")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
