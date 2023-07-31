import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const CategoryProducts = () => {
  const { name } = useParams();
  console.log(useParams());
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      const data = await response.json();

      setProducts(data);
    };
    fetchProducts();
  }, []);
  if (products.length === 0)
    return (
      <div
        className="sm:text-3xl text-2xl 
font-medium title-font text-gray-900 text-center m-10"
      >
        Loading.....
      </div>
    );
  return <ProductCard products={products} />;
};

export default CategoryProducts;
