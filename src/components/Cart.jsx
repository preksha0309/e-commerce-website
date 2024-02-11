import React from 'react';
import { Link } from 'react-router-dom';
import Caart from '../assets/cart.png'

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5">
        {cart.length === 0 ? (
          <>
            <div className="text-center">
              <h1 className='my-8'>Ooops ! Your Cart is Empty</h1>
              <Link to={"/"} className="pb-3 bg-red-500 text-white p-2 rounded hover:bg-red-700">
                Continue Shopping...
              </Link>
              <img src={Caart} alt='cart' className=' mx-auto'/>
            </div>
          </>
        ) : (
          cart.map((product) => (
            <div key={product.id} className=" bg-center my-2  bg-white shadow-lg rounded-lg overflow-hidden max-w-screen-xl mx-28">
              <div>
                <div>
                  <img
                    src={product.thumbnail}
                    className="object-cover w-56 h-40 rounded-start p-3"
                    alt="Product"
                  />
                </div>
                <div className="flex flex-col justify-center p-4">
                  <h5 className="text-xl font-semibold mb-2">{product.title}</h5>
                  <p className="mb-4">{product.description}</p>
                  <div className="flex items-center space-x-3">
                    <button className="mt-4 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700 ">{product.price} ₹</button>
                    <button className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-700">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length !== 0 && (
        <div className="container text-center my-5 flex justify-center items-center">
          <button className="mt-4 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700 mr-4">CheckOut</button>
          <button onClick={() => setCart([])} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-800">
            Clear Cart
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
