import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        city: '',
        postalCode: '',
        createAccount: false,
        differentAddress: false,
        paymentMethod: 'bank'
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Simulate a successful order placement
        navigate('/success');
    };

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="border p-2"/>
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="border p-2"/>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="border p-2"/>
                    <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="border p-2"/>
                </div>
                <div className="mb-4">
                    <select name="country" value={formData.country} onChange={handleChange} className="border p-2 w-full">
                        <option value="">Select Country</option>
                        <option value="Vietnam">Vietnam</option>
                        {/* Add more countries as needed */}
                    </select>
                </div>
                <div className="mb-4">
                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="border p-2 w-full"/>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <input type="text" name="city" placeholder="Town / City" value={formData.city} onChange={handleChange} className="border p-2"/>
                    <input type="text" name="postalCode" placeholder="Postcode / ZIP" value={formData.postalCode} onChange={handleChange} className="border p-2"/>
                </div>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input type="checkbox" name="createAccount" checked={formData.createAccount} onChange={handleChange} className="mr-2"/>
                        Create an account?
                    </label>
                </div>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input type="checkbox" name="differentAddress" checked={formData.differentAddress} onChange={handleChange} className="mr-2"/>
                        Ship to a different address
                    </label>
                </div>

                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="border p-4 mb-4">
                    <div className="flex justify-between mb-2">
                        <span>Apple Watch x1</span>
                        <span>$38</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Apple Watch x1</span>
                        <span>$38</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Apple Watch x1</span>
                        <span>$38</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>SUBTOTAL</span>
                        <span>$114</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>SHIPPING</span>
                        <span>Free Shipping</span>
                    </div>
                    <div className="flex justify-between font-bold text-xl">
                        <span>Total</span>
                        <span>$114</span>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
                <div className="mb-4">
                    <label className="flex items-center mb-2">
                        <input type="radio" name="paymentMethod" value="bank" checked={formData.paymentMethod === 'bank'} onChange={handleChange} className="mr-2"/>
                        Direct Bank Transfer
                    </label>
                    <label className="flex items-center mb-2">
                        <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} className="mr-2"/>
                        Cash on Delivery
                    </label>
                    <label className="flex items-center mb-2">
                        <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange} className="mr-2"/>
                        Credit/Debit Cards or Paypal
                    </label>
                </div>

                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Place Order Now</button>
            </form>
        </div>
    );
}

export default Checkout;
