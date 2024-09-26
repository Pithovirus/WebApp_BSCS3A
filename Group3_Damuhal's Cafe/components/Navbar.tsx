import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-brown-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <Image 
            src="/logo/logo.png" 
            alt="Damuhal's Café Logo" 
            width={70} 
            height={70} 
            className="w-18 h-18 -mt-6 -mb-6" // Adjust the logo size here
          />
          <span>Damuhal&apos;s</span>
          <span className="text-yellow-500">Café</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="/Menu" className="hover:text-yellow-500">
                Menu
              </a>
            </li>
            <li>
              <a href="/About" className="hover:text-yellow-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>

          {/* Cart Icon */}
          <div className="ml-6 relative hover:text-yellow-500">
            <a href="/Cart" className="relative">
              <FaShoppingCart size={24} />
              {/* Cart item count indicator */}
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                2
              </span>
            </a>
          </div>

          {/* Clerk Authentication Buttons */}
          <div className="ml-6 flex items-center space-x-4">
            {/* Signed Out - Sign In Button */}
            <SignedOut>
              <SignInButton>
                <button className="bg-yellow-500 text-brown-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            {/* Signed In - User Button */}
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-10 h-10', // Adjusts width and height
                    userButtonTrigger: '-p-1' // Adjusts padding around the button
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
