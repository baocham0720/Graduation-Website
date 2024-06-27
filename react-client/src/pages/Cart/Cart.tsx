import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'iPhone 12 Pro Max 128GB', color: 'Gold', size: 'Small', price: 38, quantity: 1, imageUrl: 'image1_url' },
    { id: 2, name: 'iPhone 12 Pro Max 128GB', color: 'Gold', size: 'Small', price: 38, quantity: 1, imageUrl: 'image2_url' },
    { id: 3, name: 'iPhone 12 Pro Max 128GB', color: 'Gold', size: 'Small', price: 38, quantity: 1, imageUrl: 'image3_url' },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + amount } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/4">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">PRODUCT</th>
                <th className="py-2">COLOR</th>
                <th className="py-2">SIZE</th>
                <th className="py-2">PRICE</th>
                <th className="py-2">QUANTITY</th>
                <th className="py-2">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="border-t">
                  <td className="py-4">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 inline-block mr-4" />
                    {item.name}
                  </td>
                  <td className="text-center">{item.color}</td>
                  <td className="text-center">{item.size}</td>
                  <td className="text-center">${item.price}</td>
                  <td className="text-center">
                    <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </td>
                  <td className="text-center">${item.price * item.quantity}</td>
                  <td className="text-center">
                    <button onClick={() => removeItem(item.id)} className="text-red-500">x</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="text-xl font-semibold">Summary</h3>
            <div className="flex justify-between my-2">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between my-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="flex justify-between my-4 font-semibold">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
            <Link to="/checkout" className="w-full bg-blue-500 text-white py-2 rounded text-center block">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
