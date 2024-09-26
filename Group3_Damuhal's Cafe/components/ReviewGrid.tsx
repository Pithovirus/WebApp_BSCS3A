import { motion } from 'framer-motion'; // Importing motion from Framer Motion
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const reviews = [
  { name: "Jane Doe", text: "Great coffee and friendly staff!", rating: 5, imageUrl: "/review/mark.jpg" },
  { name: "John Smith", text: "Love the caramel iced latte. Will be back!", rating: 4, imageUrl: "/review/mark.jpg" },
  { name: "Alice Johnson", text: "The best mocha I've ever had!", rating: 5, imageUrl: "/review/mark.jpg" },
  { name: "Bob Brown", text: "Good ambiance and excellent service.", rating: 4, imageUrl: "/review/mark.jpg" },
  { name: "Charlie Green", text: "Cozy place to relax with a book.", rating: 5, imageUrl: "/review/mark.jpg" },
  { name: "Emily White", text: "Friendly baristas and delicious pastries!", rating: 4, imageUrl: "/review/mark.jpg" },
];

export default function ReviewGrid() {
  return (
    <section className="py-12 bg-transparent mb-16 -mt-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#6b4e3d] mb-4 text-center">Customer Reviews</h2>
        
        {/* Review Summary */}
        <p className="text-lg text-gray-600 mb-8 text-center">
          Our customers love us! Here’s what they have to say about their experience.
        </p>

        {/* Call to Action */}
        <div className="text-center mb-8">
          <p className="text-md text-[#8d6e5a]">
            Have you visited us? We’d love to hear your feedback!
          </p>
        <Link href={"/Contact"}>
        <button className="mt-2 px-4 py-2 bg-[#6b4e3d] text-white rounded-lg transition duration-300 hover:bg-brown-700">
            Share Your Review
          </button>
        </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex items-center transition-transform duration-300 transform hover:shadow-xl hover:scale-105"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1, delay: index * 0.01, ease: 'easeInOut',stagger: 0.01 }}
            >
              <Image
                src={review.imageUrl}
                alt={`${review.name}'s photo`}
                width={50}
                height={50}
                className="rounded-full mr-4 transition duration-300"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#6b4e3d]">{review.name}</h3>
                <p className="text-[#8d6e5a] mb-2">{review.text}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-yellow-500 ${i < review.rating ? '' : 'text-gray-300'} text-lg`} />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({review.rating})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
