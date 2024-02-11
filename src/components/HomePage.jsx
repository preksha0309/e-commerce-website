import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

const HomePage = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();

    //   console.log(json.products);
    setProducts(json.products);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* Header section */}
          <div className="flex justify-between items-center gap-4 ml-9 ">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 text-cyan-50 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p
              data-aos="fade-up"
              className="text-2xl text-yellow-500 font-bold "
            >
              Top Selling Products for you
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="flex flex-wrap mx-32 shadow-inner">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="w-52 mr-8 bg-white hover:bg-slate-200 shadow-lg rounded-lg overflow-hidden my-4 h-[370px]  shadow-slate-300">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="relative h-40 w-40 bg-cover bg-center mx-auto mt-3"
                />

                <div className="relative p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {product.title}
                  </h2>
                  <p className="text-gray-700 mt-2">
                    Discount: {product.discountPercentage}% off
                  </p>

                  <p className="text-gray-700 mt-2">Brand: {product.brand}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <FaStar className="text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
