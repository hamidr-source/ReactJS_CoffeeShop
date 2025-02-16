import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://fake-coffee-api.vercel.app/api/${params.id}`
        );
        setProduct(res.data[0])
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  return <div>{product.name}</div>;
};

export default ProductPage;
