import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [sp, setSp] = useState("");
  const nv = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/5");
      const data = await response.json();
      console.log(data);
      setSp(data);
    };
    fetchProducts();
  }, []);
  console.log(sp);
  const handleCart = (id) => {
    nv(`/products/${id}`);
  };

  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before they sold out
            <br className="hidden lg:inline-block" />
          </h1>
          <h3 className="text-gray-500 text-xl tracking-widest title-font mb-1 capitalize">
            {sp?.category}
          </h3>
          <p className="mb-8 leading-relaxed">{sp?.description}</p>
          <div className="flex justify-center">
            <button
              className=" ml-[-1] inline-flex  bg-gray-100   text-lg
              text-black  border-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white  rounded"
              onClick={() => {
                handleCart(sp?.id);
              }}
            >
              Check it out
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-contain object-center rounded h-[40vh]"
            alt="hero"
            src={sp?.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
