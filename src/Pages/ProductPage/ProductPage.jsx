import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "./Dropdown";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://fake-coffee-api.vercel.app/api/${params.id}`
        );
        console.log(res.data[0]);
        setProduct(res.data[0]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);
  console.log(product);

  return (
    <div className="h-screen w-screen container text-xl">
      <img src={product.image_url} className="h-1/3 w-full mt-4" />
      <div className="flex justify-between p-4">
        <p className="font-bold">{product.name}</p>
        <p className="text-green-500 font-bold">{product.price} $</p>
      </div>
      <p className="px-4 mt-4">Flavor : {product.flavor_profile?.join(", ")}</p>
      <p className="px-4 mt-4">{product.description}</p>
      <Dropdown grindOption={product.grind_option} />
    </div>
  );
};

export default ProductPage;
