'use client';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion'; // Importing motion from Framer Motion
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter } from 'react-icons/fa'; // Added phone icon

const ContactUs = () => {
  return (
    <div>
      <div className="min-h-screen bg-cover bg-center bg-[url('/images/Background.jpg')] px-6 py-12 flex flex-col items-center justify-center mt-12">
        
        {/* Centered Title */}
        <h1 className="text-4xl font-bold text-[#6b4e3d] mb-4 text-center">Get in Touch</h1>
        <p className="text-lg text-[#8d6e5a] text-center mb-8 max-w-md">
          We’d love to hear from you! Whether you have questions or just want to say hi.
        </p>

        {/* Container for Form and Map */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-3/4 gap-8 mb-12 mt-8">
          
          {/* Contact Form */}
          <motion.form
            className="md:w-1/2 w-full max-w-md bg-white p-8 rounded-lg shadow-md mt-8"
            initial={{ opacity: 0, y: 20 }} // Initial state for animation
            whileInView={{ opacity: 1, y: 0 }} // Final state when in view
            transition={{ duration: 0.5 }} // Transition effect
            viewport={{ once: true }} // Animation occurs only once
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-[#6b4e3d] mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4e3d] text-brown-600" 
                placeholder="Your name" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#6b4e3d] mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4e3d] text-brown-600" 
                placeholder="Your email" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-[#6b4e3d] mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#6b4e3d] text-brown-600" 
                placeholder="Write your message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#6b4e3d] text-white py-2 rounded hover:bg-[#5d4037] transition duration-300"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 20 }} // Initial state for animation
                whileInView={{ opacity: 1, y: 0 }} // Final state when in view
                transition={{ duration: 0.5 }} className="flex flex-col items-center md:w-3/4 w-full mx-auto">
              {/* Address Text Above the Map */}
              <div className="text-center mb-4">
                <p className="text-lg font-semibold text-[#6b4e3d] mb-1">We are located here:</p>
                <p className="text-md text-[#8d6e5a]">95 Lopez Jaena St, Jaro, Iloilo City, Iloilo</p>
              </div>

              {/* Google Map */}
              <motion.div
                className="w-full h-96 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }} // Initial state for animation
                whileInView={{ opacity: 1, y: 0 }} // Final state when in view
                transition={{ duration: 0.5 }} // Transition effect
                viewport={{ once: true }} // Animation occurs only once
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.936441702573!2d122.57560020000002!3d10.719047200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f02b87ba2e2849f:0x3938f59c399b8832!2sIloilo%2C%20Philippines!5e0!3m2!1sen!2sph!4v1663923323318!5m2!1sen!2sph"
                  allowFullScreen={true}
                  aria-hidden="false"
                  tabIndex={0}
                />
              </motion.div>
            </motion.div>
          </div>
        {/* Centered Social Media Links */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#6b4e3d] mb-2">Follow Us</h2>
          <p className="text-[#8d6e5a] mb-4">Stay connected with us on social media:</p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://www.facebook.com/YourIcedCoffeeBrand"
              target="_blank"
              className="text-[#6b4e3d] hover:text-gray-700 flex items-center"
              initial={{ opacity: 0, x: -20 }} // Initial state for animation
              whileInView={{ opacity: 1, x: 0 }} // Final state when in view
              transition={{ duration: 0.5 }} // Transition effect
              viewport={{ once: true }} // Animation occurs only once
            >
              <FaFacebookF className="mr-2" /> Facebook
            </motion.a>
            <motion.a
              href="https://www.instagram.com/YourIcedCoffeeBrand"
              target="_blank"
              className="text-[#6b4e3d] hover:text-gray-700 flex items-center"
              initial={{ opacity: 0, x: -20 }} // Initial state for animation
              whileInView={{ opacity: 1, x: 0 }} // Final state when in view
              transition={{ duration: 0.5 }} // Transition effect
              viewport={{ once: true }} // Animation occurs only once
            >
              <FaInstagram className="mr-2" /> Instagram
            </motion.a>
            <motion.a
              href="https://twitter.com/YourIcedCoffeeBrand"
              target="_blank"
              className="text-[#6b4e3d] hover:text-gray-700 flex items-center"
              initial={{ opacity: 0, x: -20 }} // Initial state for animation
              whileInView={{ opacity: 1, x: 0 }} // Final state when in view
              transition={{ duration: 0.5 }} // Transition effect
              viewport={{ once: true }} // Animation occurs only once
            >
              <FaTwitter className="mr-2" /> Twitter
            </motion.a>
          </div>

          {/* Phone Number */}
          <div className="mt-8">
            <p className="text-lg text-[#8d6e5a] mb-2">Or give us a call at:</p>
            <div className="flex justify-center items-center text-[#6b4e3d]">
              <FaPhoneAlt className="mr-2" />
              <span className="font-semibold">+63 (923) 456-7890</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
