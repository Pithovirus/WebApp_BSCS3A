import Image from 'next/image';
import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa';

const reviews = [
  { name: "Jane Doe", text: "Great coffee and friendly staff!", rating: 5, imageUrl: "/images/customer1.jpg" },
  { name: "John Smith", text: "Love the caramel iced latte. Will be back!", rating: 4, imageUrl: "/images/customer2.jpg" },
  { name: "Alice Johnson", text: "The best mocha I've ever had!", rating: 5, imageUrl: "/images/customer3.jpg" },
  { name: "Bob Brown", text: "Good ambiance and excellent service.", rating: 4, imageUrl: "/images/customer4.jpg" },
];

export default function ReviewTestimonials() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#f5e9e2] to-[#d1c4b7]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#6b4e3d] mb-8 text-center">Customer Testimonials</h2>
        <div className="space-y-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 relative">
              <FaQuoteLeft className="absolute top-2 left-2 text-3xl text-gray-400" />
              <FaQuoteRight className="absolute bottom-2 right-2 text-3xl text-gray-400" />
              <div className="flex items-center mb-4">
                <Image
                  src={review.imageUrl}
                  alt={`${review.name}'s photo`}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#6b4e3d]">{review.name}</h3>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`text-yellow-500 ${i < review.rating ? '' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({review.rating})</span>
                  </div>
                </div>
              </div>
              <p className="text-[#8d6e5a]">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
