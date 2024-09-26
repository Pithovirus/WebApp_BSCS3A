"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
// test commit
const Navbar = () => {
  const pathname = usePathname();
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <header className="w-full px-4 md:px-[4rem] shadow-custom-bottom">
      <div className="py-4 flex items-center justify-between gap-1 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 block md:hidden"
          onClick={() => setOpenNavBar((prev) => !prev)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
        <nav className="flex justify-between w-full">
          <div className="flex items-center w-full">
            {/* isli lang font ka logo */}
            <Link
              href="/"
              className="text-3xl font-medium text-[#912828] px-2 border-l-2 md:border-l-0 tracking-widest"
              style={{ fontFamily: "Kenarose" }}
            >
              Kantonize
            </Link>
            {/* adjust land di ang gap e.g. pl-20, gap-32*/}
            <ul className="hidden md:flex justify-between items-center pl-36 w-8/12">
              <li>
                <a
                  href="/"
                  className={`relative text-gray-600 hover:text-[#912828] transition-colors duration-300 
										${
                      pathname === "/"
                        ? "underline decoration-4 underline-offset-8 text-red-800"
                        : ""
                    }`}
                >
                  HOME
                  <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#912828] transition-all duration-300 ease-in-out scale-x-0 hover:scale-x-100"></span>
                </a>
              </li>
              <li>
                <a
                  href="/kantonize"
                  className={`relative text-gray-600 hover:text-[#912828] transition-colors duration-300 ${
                    pathname === "/kantonize"
                      ? "underline decoration-4 underline-offset-8 text-red-800"
                      : ""
                  }`}
                >
                  KANTONIZE
                  <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#912828] transition-all duration-300 ease-in-out scale-x-0 hover:scale-x-100"></span>
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`relative text-gray-600 hover:text-[#912828] transition-colors duration-300"
									${
                    pathname === "/about"
                      ? "underline decoration-4 underline-offset-8 text-red-800"
                      : ""
                  }`}
                >
                  ABOUT US
                  <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#912828] transition-all duration-300 ease-in-out scale-x-0 hover:scale-x-100"></span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`relative text-gray-600 hover:text-[#912828] transition-colors duration-300"
									${
                    pathname === "/contact"
                      ? "underline decoration-4 underline-offset-8 text-red-800"
                      : ""
                  }`}
                >
                  CONTACT US
                  <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#912828] transition-all duration-300 ease-in-out scale-x-0 hover:scale-x-100"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-end w-2/12">
            <SignedOut>
              <div
                className="border-opacity-100 border bg-[#912828] py-3 px-6 text-white font-bold tracking-wider"
                style={{ borderRadius: "1rem 0.25rem 1rem 0.25rem" }}
              >
                <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
          </div>
        </nav>
      </div>

      {/* mobile nav bar */}
      {openNavBar ? (
        <div className="w-full p-2 absolute top-0 left-0 bg-white shadow-md grid gap-2">
          <div className="w-full flex justify-between items-center px-2">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              KANTONIZE
            </Link>
            <div
              className="text-2xl"
              onClick={() => setOpenNavBar((prev) => !prev)}
            >
              X
            </div>
          </div>
          <div
            className="p-2 flex justify-center border hover:bg-gray-400"
            onClick={() => setOpenNavBar((prev) => !prev)}
          >
            <Link href="/" className="text-gray-600 uppercase">
              Home
            </Link>
          </div>
          <div
            className="p-2 flex justify-center border hover:bg-gray-400"
            onClick={() => setOpenNavBar((prev) => !prev)}
          >
            <Link href="/kantonize" className="text-gray-600 uppercase">
              Kantonize
            </Link>
          </div>
          <div
            className="p-2 flex justify-center border hover:bg-gray-400"
            onClick={() => setOpenNavBar((prev) => !prev)}
          >
            <Link href="/about" className="text-gray-600 uppercase">
              About Us
            </Link>
          </div>
          <div
            className="p-2 flex justify-center border hover:bg-gray-400"
            onClick={() => setOpenNavBar((prev) => !prev)}
          >
            <Link href="/contact" className="text-gray-600 uppercase">
              Contact Us
            </Link>
          </div>
        </div>
      ) : (
        false
      )}
    </header>
  );
};

export default Navbar;
