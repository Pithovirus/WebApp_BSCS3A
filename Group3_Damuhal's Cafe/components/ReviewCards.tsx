import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  { name: "Jane Doe", text: "Great coffee and friendly staff!", rating: 5, imageUrl: "/images/customer1.jpg" },
  { name: "John Smith", text: "Love the caramel iced latte. Will be back!", rating: 4, imageUrl: "/images/customer2.jpg" },
  { name: "Alice Johnson", text: "The best mocha I've ever had!", rating: 5, imageUrl: "/images/customer3.jpg" },
  { name: "Bob Brown", text: "Good ambiance and excellent service.", rating: 4, imageUrl: "/images/customer4.jpg" },
];

export default function ReviewCards() {
  const ref = React.createRef<HTMLDivElement>();
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="py-12 bg-gradient-to-b from-[#f5e9e2] to-[#d1c4b7]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#6b4e3d] mb-8 text-center">Customer Reviews</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-80"
            >
              <div className="p-4">
                <Image
                  src={review.imageUrl}
                  alt={`${review.name}'s photo`}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-[#6b4e3d] text-center">{review.name}</h3>
                <p className="text-[#8d6e5a] text-center mb-2">{review.text}</p>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-yellow-500 ${i < review.rating ? '' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}