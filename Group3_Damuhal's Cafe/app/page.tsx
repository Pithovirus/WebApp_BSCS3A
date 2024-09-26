'use client';

import FavoriteProducts from '@/components/FavoriteProducts';
import FloatingOrderButton from '@/components/FloatingOrderButton';
import Footer from '@/components/Footer';
import ReviewGrid from '@/components/ReviewGrid';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Home() {
  return (
    <div className="h-screen flex flex-col overflow-x-hidden bg-cover bg-center bg-[url('/images/Background.jpg')]">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8 pt-12">
        {/* Left Section: Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1 }} // Added delay for staggered effect
          className="w-full md:w-1/2 text-left space-y-6"
        >
          <h1 className="text-5xl font-extrabold text-[#6b4e3d]">
            {Array.from('Welcome to Our Coffee Shop!').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <p className="text-lg text-[#8d6e5a]">
            Indulge in the finest iced coffee made with passion. We serve the best blends, carefully brewed to perfection.
          </p>
          <button
            onClick={() => window.location.href = '/About'}
            className="bg-brown-600 hover:bg-brown-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Learn More
          </button>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }} // Added delay for staggered effect
          className="hidden md:block w-full md:w-1/2 pl-8 mt-12 mb-20"
        >
          <Image
            src="/images/Display.png"
            alt="Iced Coffee"
            className="rounded-xl object-cover"
            width={800}
            height={800}
            priority={true}
          />
        </motion.div>
      </main>

      {/* New Section: Damuhal's Cafe */}
      <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-white shadow-lg rounded-lg mb-12 text">
        {/* Left: Logo Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0"
        >
          <Image
            src="/logo/logo.png" // Update with the path to your logo image
            alt="Damuhal's Cafe Logo"
            className="rounded-lg object-contain h-64" // Adjust height as needed
            width={300} // Adjust width as needed
            height={300} // Adjust height as needed
            priority={true}
          />
        </motion.div>

        {/* Right: Text About Damuhal's Cafe */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2 space-y-4 p-4 text-justify"
        >
          <h2 className="text-3xl font-bold text-[#6b4e3d] text">Damuhal&apos;s Cafe</h2>
          <p className="text-lg text-[#8d6e5a]">
            At Damuhal&apos;s Cafe, we believe in providing not just coffee but an experience. Our beans are sourced from the best plantations and brewed to perfection, ensuring a delightful taste in every sip. Whether you&apos;re here to enjoy a cozy atmosphere or to grab a quick cup on the go, we&apos;ve got you covered!
          </p>
        </motion.div>
      </section>

      {/* Favorite Products Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-12"
      >
        <FavoriteProducts />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mt-12"
      >
        <ReviewGrid />
      </motion.div>

      <Footer />
      <FloatingOrderButton />
    </div>
  );
}

export default Home;
