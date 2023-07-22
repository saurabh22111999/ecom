import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      console.log(data);
      setCategories(data);
    };
    fetchCategories();
  }, []);

  if (categories.length === 0) {
    return (
      <div
        className="sm:text-3xl text-2xl 
font-medium title-font text-gray-900 text-center m-10"
      >
        Loading.......
      </div>
    );
  }

  return <FeatureCard cards={categories} />;
};

export default Categories;
