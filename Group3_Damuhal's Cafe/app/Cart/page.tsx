"use client"; // Enable Client-Side Rendering

import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const cartItems = [
    {
        name: "Iced Latte",
        price: 150,
        quantity: 2,
        image: "/menu_pics/iced-espresso.jpg", // Add your image path
    },
    {
        name: "Cappuccino",
        price: 130,
        quantity: 1,
        image: "/menu_pics/iced-macchiato.jpg", // Add your image path
    },
];

const paymentMethods = ["Credit Card", "PayPal", "Cash on Delivery"];

const Cart = () => {
    const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);
    const [isMounted, setIsMounted] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const router = useRouter();

    // Ensure the component is mounted before accessing the router
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Calculate total price with quantity
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Handle payment
    const handlePayment = () => {
        if (!isMounted) return; // Ensure it's mounted before using the router

        setShowNotification(true); // Show success notification
        setTimeout(() => {
            setShowNotification(false); // Hide notification after 3 seconds
            router.push("/"); // Redirect to home
        }, 3000);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f5e9e2] to-[#d1c4b7] mt-14">
            <main className="flex-1 flex flex-col items-center justify-center p-8">
                {/* Main Container with Cart Items on Left and Payment Section on Right */}
                <div className="w-full max-w-4xl flex bg-white rounded-xl shadow-lg p-6 mb-10">

                    {/* Left: Cart Items */}
                    <div className="flex-1 pr-6">
                        <h2 className="text-2xl font-bold text-[#6b4e3d] mb-4">Your Cart</h2>

                        {cartItems.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty.</p>
                        ) : (
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item.name} className="flex justify-between items-center py-2 border-b">
                                        <div className="flex items-center">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 mr-4 rounded" />
                                            <div>
                                                <p className="font-semibold text-[#6b4e3d]">
                                                    {item.quantity}x {item.name}
                                                </p>
                                                <p className="text-sm text-gray-600">₱{item.price}</p>
                                            </div>
                                        </div>
                                        <button className="text-red-600 hover:text-red-800">
                                            <FaTrash />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Total Price */}
                        <div className="mt-6 text-right">
                            <p className="text-xl font-semibold text-[#6b4e3d]">Total: ₱{total}</p>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="border-l border-gray-300 mx-6"></div>

                    {/* Right: Payment Section */}
                    <div className="flex-1 pl-6">
                        <h2 className="text-2xl font-bold text-[#6b4e3d] mb-4">Payment</h2>

                        {/* Payment Method Selection */}
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Select Payment Method:
                        </label>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="block w-full px-3 py-2 mb-4 border text-[#6b4e3d] border-gray-300 rounded-md focus:outline-none focus:ring-[#6b4e3d] focus:border-[#6b4e3d]"
                        >
                            {paymentMethods.map((method) => (
                                <option key={method} value={method}>
                                    {method}
                                </option>
                            ))}
                        </select>

                        {/* Pay Now Button */}
                        <button
                            className="bg-[#8d6e5a] hover:bg-[#6b4e3d] text-white rounded-lg px-6 py-3 w-full font-semibold text-lg"
                            onClick={handlePayment}
                            disabled={!isMounted} // Disable until it's mounted
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </main>

            <Footer />

            {/* Payment Success Notification with Smooth Transition */}
            <div
                className={`fixed top-8 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black py-2 px-6 rounded-lg shadow-lg z-50 transition-opacity duration-500 ease-in-out ${showNotification ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
                <p>Payment Successful! Redirecting to Home...</p>
            </div>
        </div>
    );
};

export default Cart;
