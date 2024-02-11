import React from "react";
import Banner from "./Banner";
import Carousal from "./Carousal";
import HomePage from "./HomePage";
import Subscribe from "./Subscribe";

const Body = ({ cart, setCart }) => {
  return (
    <>
      <Carousal />
      <HomePage cart={cart} setCart={setCart} />
      <Banner />
      <Subscribe />
    </>
  );
};

export default Body;
