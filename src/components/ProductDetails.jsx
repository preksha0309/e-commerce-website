import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shimmer from "./Shimmer";

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails(id);
  }, [id]);

  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  const addToCart = (id, price, title, description, thumbnail) => {
    const obj = {
      id,
      price,
      title,
      description,
      thumbnail,
    };
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success('Item added on cart', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

}

  return (

    <><ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
              <h1 className="font-bold text-2xl sm:text-3xl flex gap-2 text-blue-900">Product Details</h1>
              {product ? (
                  <>
                      <div className="order-1 sm:order-2">
                          <div
                              data-aos="zoom-in"
                              data-aos-once="true"
                              className="relative z-10"
                          >
                              <Slider {...settings}>
                                  {product.images.map((image, index) => (
                                      <img
                                          key={index}
                                          src={image}
                                          alt={`Product ${index + 1}`}
                                          className="w-[200px] h-[250px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto" />
                                  ))}
                              </Slider>
                          </div>
                      </div>
                      <div className="container mx-auto p-6 bg-yellow-100 w-[550px]  rounded-lg shadow-md my-8">
                          <h2 className="text-2xl font-semibold">{product.title}</h2>
                          <p className="text-gray-700 mt-2 ">Brand: {product.brand}</p>
                          <p className="text-gray-700 mt-2">
                              Description: {product.description}
                          </p>
                          <p className="text-gray-700 mt-2">Stock: {product.stock} units</p>
                          <p className="text-gray-700 mt-2">
                              Discount: {product.discountPercentage}% off
                          </p>

                          <div className="flex items-center gap-1">
                              <FaStar className="text-yellow-400" />
                              <span>{product.rating}</span>
                          </div>

                          <button className="mt-4 bg-yellow-600 text-white p-2 rounded hover:bg-yellow-800 mr-1">
                              ${product.price}
                          </button>
                          <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-800" onClick={() => addToCart(
                              product.id,
                              product.price,
                              product.title,
                              product.description,
                              product.thumbnail
                          )}>
                              Add to Cart
                          </button>
                      </div>
                  </>
              ) : (
                  <Shimmer />
              )}
          </div></>
  );
};

export default ProductDetails;
