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
        setProduct(res.data[0]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="h-screen w-screen container text-xl">
      <img src={product.image_url} className="h-1/3 w-full mt-4" />
      <div className="flex justify-evenly">
        <p className="font-bold">{product.name}</p>
        <p className="text-green-500 font-bold">{product.price} $</p>
      </div>
      <p className="px-4 mt-4">{product.description}</p>
    </div>
  );
};

export default ProductPage;
