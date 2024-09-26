'use client';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-[#f5e9e2] text-gray-800 text-justify">
      {/* Top Banner Section with Text Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }} // Add delay here
        viewport={{ once: true }}
      >
        <div className="relative overflow-hidden">
          <Image
            src="/images/Coffee Beans.jpg"
            alt="Top Banner Image"
            layout="responsive"
            width={1200}
            height={450}
            className="object-cover w-full h-[450px] brightness-90"
          />
          
          {/* Text Overlay with individual animation */}
          <motion.div
            className="absolute top-1/2 left-8 transform -translate-y-1/2"
            initial={{ x: -100, opacity: 0 }} // Start from the left
            whileInView={{ x: 0, opacity: 1 }} // Move to original position
            transition={{ duration: 0.5, delay: 0.5 }} // Slight delay
          >
            <h1 className="text-6xl font-extrabold">
              <span className="text-white">Damuhal&apos;s </span>
              <span className="text-yellow-400">Café</span>
            </h1>
          </motion.div>
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, delay: 0.3 }} // Adjust delay here
        viewport={{ once: true }}
      >
        <motion.h1 initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }} 
        className="text-5xl font-extrabold text-[#6b4e3d] mb-4 text-center mt-28">About Us</motion.h1>

        {/* Logo Image */}
        <motion.div className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}>
          <Image
            src="/logo/logo.png" // Path to your logo
            alt="Damuhal's Café Logo"
            width={250} // Adjust the width according to your design
            height={150} // Adjust the height according to your design
            className="object-contain" // Ensures the logo is properly contained
          />
        </motion.div>

        <motion.p
          className="text-lg max-w-3xl mx-auto mb-4 text-gray-700 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }} // Add delay
        >
          Welcome to &apos;Damuhal&apos;s Café&apos;. Located in the heart of Iloilo City, we are a specialty coffee shop dedicated to showcasing the rich and diverse coffee flavors the Philippines has to offer.
        </motion.p>
        <motion.p
          className="text-lg max-w-3xl mx-auto text-gray-700 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }} // Add delay
        >
          Join us on a journey of taste and discovery as we explore the vibrant coffee culture of the Philippines. From classic blends to single-origin beans, our menu offers something for every palate.
        </motion.p>
      </motion.section>

      {/* Coffee Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }} // Adjust delay here
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center py-12 space-y-6 md:space-y-0 md:space-x-8 mt-8">
          <motion.div
            className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }} // Add delay
          >
            <Image
              src="/images/DiverseBeans.jpg"
              alt="Diverse Beans"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 text-left px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }} // Add delay
          >
            <h2 className="text-3xl font-bold text-[#6b4e3d] mb-4">Experience the Philippines in Every Cup</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Damuhal&apos;s Cafe, we guarantee a taste of the richness of our locally sourced coffee, from high-caffeine robusta beans to the sweeter, zesty arabica beans. You are sure to taste the bliss of the Philippines in every cup.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Support Farmers Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }} // Adjust delay here
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row-reverse items-center justify-center py-12 space-y-6 md:space-y-0 md:space-x-8 mt-12">
          <motion.div
            className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }} // Add delay
          >
            <Image
              src="/images/Parmer.jpg"
              alt="Farmer"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 text-left px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }} // Add delay
          >
            <h2 className="text-3xl font-bold text-[#6b4e3d] mb-4">Brewing a Better Future</h2>
            <p className="text-lg text-gray-700 mb-4">
              Here at Dam uhal&apos;s Café, we are dedicated to supporting the coffee farmers of the Philippines. Our partnerships foster fair trade and promote the rich flavors of Filipino coffee.
            </p>
          </motion.div>
        </div>
      </motion.section>

       {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }} // Adjust delay here
        viewport={{ once: true }}
        className='mb-16'
      >
        <h2 className="text-center text-3xl font-bold text-[#6b4e3d] mb-8 mt-12">The Team Behind it All</h2>
        <div className="flex flex-wrap justify-center">
          {[
            { name: 'Regino Balogo Jr.', image: '/images/Reg.JPG', role: 'Front-end Developer' },
            { name: 'Lemmuel Dave Dañosos', image: '/images/Deyb.JPG', role: 'Front-end Developer' },
            { name: 'Rhazel Jay Gumacal', image: '/images/Rhaz.JPG', role: 'Leader / Front-end Developer' },
            { name: 'Christian Angelo Panique', image: '/images/Tian.JPG', role: 'Front-end Developer' },
            { name: 'Ethan Gabriel Soncio', image: '/images/Ethan.JPG', role: 'Front-end Developer' },
          ].map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }} // Add delay based on index
            >
              <div className="overflow-hidden rounded-full w-48 h-48 mx-auto shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-semibold">{member.name}</p>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
