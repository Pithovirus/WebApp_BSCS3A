import { motion } from "framer-motion";
import Link from "next/link";

interface SpecialProductProps {
  name: string;
  price: string;
  image: string;
}

const SpecialProduct = ({ name, price, image }: SpecialProductProps) => (
  <motion.div
    className="bg-[#9b3737] p-6 relative shadow-md w-[25rem]"
    whileHover={{ scale: 1.1 }}
    style={{ borderRadius: "40px 0px 40px 0px" }}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="w-10 h-20 rounded-lg mb-4">
        <img
          src={image}
          alt={name}
          className="absolute -top-16 w-[170px] h-[170px] z-10"
        />
      </div>

      <div className="flex flex-col items-start justify-center text-center">
        <div>
          <h2 className="text-white text-md font-bold text-[1.25rem]">
            {name}
          </h2>
          <p className="text-white text-base mt-1">₱ {price}</p>
        </div>
      </div>
    </div>

    <div>
      <div className="w-[22rem] border-t-2 border-[#FFCECE] mt-4 pb-2 text-center"></div>
    </div>

    <div className="flex items-center pt-1 space-x-2">
      <span className="text-[#FFCECE] text-[1.75rem] tracking-widest">
        ★★★★★
      </span>
      <Link href="/payment">
        <button
          className="bg-[#FFCECE] text-[#912828] p-2 px-4 shadow-slate-800 shadow-2xl absolute right-6"
          style={{ borderRadius: "0px 20px 0px 20px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </Link>
    </div>
  </motion.div>
);

export default function ProductList() {
  return (
    <div>
      <SpecialProduct
        name="Noypi Savor Blend Bowl"
        price="90.00"
        image="/assets/bowl_blend.png"
      />
    </div>
  );
}
