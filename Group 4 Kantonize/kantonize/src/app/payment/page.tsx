"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation"; // Import the useRouter hook

// Product Summary Component
interface ProductSummaryProps {
  name: string;
  price: string;
  image: string;
}

const ProductSummary = ({ name, price, image }: ProductSummaryProps) => {
  return (
    <motion.div
      className="bg-[#912828] p-4 relative shadow-md w-[18rem] top-24 left-28"
      style={{ borderRadius: "40px 0px 40px 0px" }}
      whileHover={{ scale: 1.1 }}
    >
      <div className="w-10 h-20 rounded-lg mb-4 items-center">
        <img
          src={image}
          alt={name}
          className="absolute left-7 -top-20 w-[220px] h-[220px] z-10"
        />
      </div>

      <div className="flex flex-col items-start justify-between">
        <div>
          <div className="border-t-2 border-[#FFCECE] my-6 w-[15rem]"></div>
          <h2 className="text-white text-md font-semibold">{name}</h2>
          <p className="text-white text-sm mt-1">₱ {price}</p>
        </div>

        <div className="flex items-center mt-3 space-x-2">
          <span className="text-[#FFCECE] text-[1.5rem] tracking-widest">
            ★★★★★
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Checkout Form Component
const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const router = useRouter(); // Initialize useRouter for navigation

  // Handle form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform validation if necessary
    if (
      formData.name &&
      formData.email &&
      formData.address &&
      formData.city &&
      formData.zipCode
    ) {
      // Display success toast
      toast("Purchase Successful", {
        description: "Enjoy Your Kantonized Kanton",
        action: {
          label: "Thanks",
          onClick: () => console.log("Noted"),
        },
      });

      // Add slight delay before redirecting to home page
      setTimeout(() => {
        router.push("/"); // Redirect to the home page
      }, 2000); // 2 seconds delay
    } else {
      toast("Error", {
        description: "Please fill in all required fields.",
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        />
      </div>

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Shipping Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="1234 Main St"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
        />
      </div>

      <div className="flex space-x-2">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Enter city"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Zip Code
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            placeholder="Postal code"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          />
        </div>
      </div>

      <div>
        <Button
          type="submit" // Button type is now submit
          className="w-full font-bold tracking-widest bg-[#912828] border-black"
        >
          PROCEED TO PAYMENT
        </Button>
      </div>
    </form>
  );
};

// Checkout Page Component
export default function CheckoutPage() {
  const product = {
    name: "Kantong Puti",
    price: "190.00",
    image: "/assets/pancit-canton-2.png",
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Summary */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Order Summary
          </h2>
          <ProductSummary
            name={product.name}
            price={product.price}
            image={product.image}
          />
        </div>

        {/* Checkout Form */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Checkout Details
          </h2>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
