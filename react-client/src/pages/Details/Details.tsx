
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';  // Make sure to install react-icons package

const Details = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    

    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-md rounded-lg p-6">
        <div className="lg:w-1/3 w-full">
          <img
            src="https://shopo-next.vercel.app/assets/images/product-details-1.png"
            alt="Samsung Galaxy Z Fold3"
            className="w-full h-auto rounded-md"
          />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <img src="https://shopo-next.vercel.app/assets/images/product-details-1.png" alt="Thumbnail 1" className="w-full h-auto rounded-md" />
            <img src="https://shopo-next.vercel.app/assets/images/product-details-2.png" alt="Thumbnail 2" className="w-full h-auto rounded-md" />
            <img src="https://shopo-next.vercel.app/assets/images/product-details-3.png" alt="Thumbnail 3" className="w-full h-auto rounded-md" />
            <img src="https://shopo-next.vercel.app/assets/images/product-details-4.png" alt="Thumbnail 4" className="w-full h-auto rounded-md" />
            <img src="https://shopo-next.vercel.app/assets/images/product-details-5.png" alt="Thumbnail 5" className="w-full h-auto rounded-md" />
          </div>
        </div>
        
        <div className="lg:w-2/3 w-full lg:ml-6 mt-6 lg:mt-0">
          <h1 className="text-3xl font-semibold">Samsung Galaxy Z Fold3 5G 3 colors in 512GB</h1>
          <div className="flex items-center my-2">
            <span className="text-gray-500 line-through mr-2">$13.99</span>
            <span className="text-red-600 text-xl font-bold">$6.99</span>
          </div>
          <div className="flex items-center my-4">
            <span className="text-yellow-500">★★★★★</span>
            <span className="ml-2 text-gray-600">(6 Reviews)</span>
          </div>
          <p className="text-gray-700 mb-4">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
          
          <div className="my-4">
            <span className="block mb-2">Color:</span>
            <div className="flex">
              <span className="w-6 h-6 rounded-full bg-orange-500 mr-2"></span>
              <span className="w-6 h-6 rounded-full bg-blue-500 mr-2"></span>
              <span className="w-6 h-6 rounded-full bg-gray-500 mr-2"></span>
              <span className="w-6 h-6 rounded-full bg-red-500"></span>
            </div>
          </div>

          <div className="my-4">
            <span className="block mb-2">Size:</span>
            <select className="p-2 border rounded w-full">
              <option className="flex justify-between">
                <span>3"W x 3"D x 7"H</span>
                <span className="ml-auto">Medium</span>
              </option>
              <option className="flex justify-between">
                <span>3"W x 3"D x 7"H</span>
                <span className="ml-auto">Large</span>
              </option>
              <option className="flex justify-between">
                <span>3"W x 3"D x 7"H</span>
                <span className="ml-auto">Small</span>
              </option>
            </select>
          </div>

          <div className="flex items-center my-4">
            <div className="flex items-center border border-gray-300 rounded mr-4">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-3 py-1 bg-black text-white"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-12 text-center border-l border-r border-gray-300"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-black text-white"
              >
                +
              </button>
            </div>
            <button className="p-2 border border-black rounded mx-2">
              <FaHeart size={20} />
            </button>
            <button className="bg-black text-white px-6 py-2 rounded ml-2 hover:bg-gray-800">
              Add To Cart
            </button>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Features:</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Slim body with metal cover</li>
              <li>Latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
              <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
              <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card, backlit keyboard, touchpad with gesture support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  
    
  );
}

export default Details;
