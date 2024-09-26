"use client";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import ProductCard2 from "@/components/ProductCard2";
import SpecialProduct from "@/components/SpecialProduct";
import { motion } from "framer-motion";
import Link from "next/link";

const Home: React.FC = () => {
  const items = [
    {
      image: "/favicon.ico",
      title: "MANOK NI SAN JOSE",
      description: "WOW APAKAGALING OMG OMG OMG",
      job: "Oa mong Friend",
    },
    {
      image: "/assets/images.png",
      title: "Kaba Gang",
      description:
        "Ih, its like very 10/10. It's giving very very slayful. WAHHHHHHHHHHH",
      job: "Iniwang Kaibigan na di na minahal",
    },
    {
      image: "/assets/bhela.png",
      title: "Bhela Thangherl",
      description:
        "Loh, Sinaasabi ko sa inyo, go na here. It's like the best cuz I get to make kaen the way I want it",
      job: "Bijj Ghurlie",
    },
    {
      image: "/assets/images-anony.jpg",
      title: "Anonymous",
      description: "good.",
      job: "Mysterious Guy na may secret",
    },
    {
      image: "/assets/image.webp",
      title: "CICTSC",
      description: "haha xD alang panghosting.",
      job: "Oa mong Friend",
    },
  ];
  return (
    <div className="container max-w-max overflow-x-hidden">
      <main className="mt-5">
        <div className="overflow-x-hidden">
          <motion.section
            className="flex flex-col md:flex-row gap-20 items-center bg-[#FFCECE] mx-8 px-20 tracking-wider overflow-hidden"
            style={{ borderRadius: "20px 120px 20px 120px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          >
            <motion.div className="md:w-1/2 pt-36">
              <motion.h2
                className="text-sm font-light text-gray-800 mb-4"
                initial={{ opacity: 0, x: -50 }} // Start with a slide side effect
                whileInView={{ opacity: 1, x: 0 }} // Move to original position
                transition={{ duration: 1, delay: 0.4 }} // Slight delay
              >
                CUSTOMIZE YOUR PANCIT CANTON
              </motion.h2>
              <motion.h1
                className="text-5xl font-black text-[#470F0F] mb-4"
                initial={{ opacity: 0, x: -50 }} // Start with a slide side effect
                whileInView={{ opacity: 1, x: 0 }} // Move to original position
                transition={{ duration: 1, delay: 0.6 }} // Slight delay
              >
                HERE AT KANTONIZE, FIND THE MIX THAT MAKES YOU HAPPY
              </motion.h1>
              <Link href="/kantonize">
                <motion.button
                  className="bg-[#912828] hover:bg-[#470F0F] text-white font-semibold py-2 px-4 rounded"
                  style={{ borderRadius: "1rem 0rem 1rem 0rem" }}
                  initial={{ opacity: 0, x: -50 }} // Start with a slide side effect
                  whileInView={{ opacity: 1, x: 0 }} // Move to original position
                  transition={{ duration: 1, delay: 1.1 }} // Slight delay
                >
                  KANTONIZE NOW -&gt;
                </motion.button>
              </Link>
              <motion.div
                className="py-16 px-20"
                initial={{ opacity: 0, y: 40 }} // Start with a slide down effect
                whileInView={{ opacity: 1, y: 0 }} // Move to original position
                transition={{ duration: 1.5, delay: 0.7 }} // Slight delay
              >
                <SpecialProduct />
              </motion.div>
            </motion.div>
            <div
              className="md:w-1/2 mt-8 md:mt-0 relative"
              style={{ transform: "translateX(10.5rem) translateY(-4.5rem)" }}
            >
              <div
                className="bg-[#9b3737] rounded-full w-[50rem] h-[50rem] absolute z-0"
                style={{ top: "-15rem", left: "-12rem" }}
              ></div>

              <motion.div>
                {" "}
                <motion.div
                  initial={{ opacity: 0, y: 50 }} // Start with a slide down effect
                  whileInView={{ opacity: 1, y: 0 }} // Move to original position
                  transition={{ duration: 1, delay: 0.2 }} // Slight delay
                >
                  <Image
                    src="/assets/bowl_blend.png"
                    alt="Pancit Canton"
                    width={400}
                    height={400}
                    className="relative z-10"
                  />
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="absolute"
              style={{ top: "32rem", left: "37rem" }}
              initial={{ opacity: 0, y: 50 }} // Start with a slide down effect
              whileInView={{ opacity: 1, y: 0 }} // Move to original position
              transition={{ duration: 1.5, delay: 0.7 }} // Slight delay
            >
              <Image
                src="/assets/main-line.png"
                alt="Pancit Canton"
                width={550}
                height={400}
                className="relative z-0"
              />{" "}
            </motion.div>
          </motion.section>
        </div>

        <section className="mt-12 mx-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
            <motion.div
              className="p-4 flex items-center"
              initial={{ opacity: 0, y: 50 }} // Start with a move up effect
              whileInView={{ opacity: 1, y: 0 }} // Move to original position
              transition={{ duration: 1, delay: 0.2 }} // Slight delay
            >
              <Image
                src="/assets/kanton-icon.png"
                alt="Customizable Kanton"
                width={70}
                height={70}
                className="mr-4"
              />
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">
                  Customizable Kanton
                </h3>
                <p className="text-[0.75rem] text-gray-600">
                  Tailor your perfect meal with our customizable Kanton to your
                  personal preferences.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="p-4 flex items-center"
              initial={{ opacity: 0, y: 50 }} // Start with a move up effect
              whileInView={{ opacity: 1, y: 0 }} // Move to original position
              transition={{ duration: 1, delay: 0.4 }} // Slight dela
            >
              <Image
                src="/assets/voucher-icon.png"
                alt="Voucher Discounts"
                width={70}
                height={70}
                className="mr-4"
              />
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">
                  Voucher Discounts
                </h3>
                <p className="text-[0.75rem] text-gray-600">
                  Enjoy exclusive deals and special offers that make shopping
                  more affordable.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="p-4 flex items-center"
              initial={{ opacity: 0, y: 50 }} // Start with a move up effect
              whileInView={{ opacity: 1, y: 0 }} // Move to original position
              transition={{ duration: 1, delay: 0.8 }} // Slight dela
            >
              <Image
                src="/assets/fresh-icon.png"
                alt="Fresh Ingredients"
                width={70}
                height={70}
                className="mr-4"
              />
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-1">
                  Fresh Ingredients
                </h3>
                <p className="text-[0.75rem] text-gray-600">
                  Savor the difference with our premium, farm-fresh ingredients
                  for exceptional flavor and quality in every bite.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="mt-[12rem] mx-11">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-2"
              initial={{ opacity: 0, y: 50 }} // Start with a move up effect
              whileInView={{ opacity: 1, y: 0 }} // Move to original position
              transition={{ duration: 1, delay: 0.4 }} // Slight delay
            >
              <ProductCard />
              <ProductCard2 />
            </motion.div>
            <div>
              <motion.h1
                className="text-[2rem] font-extrabold"
                initial={{ opacity: 0, x: 50 }} // Start with a move up effect
                whileInView={{ opacity: 1, x: 0 }} // Move to original position
                transition={{ duration: 1, delay: 0.4 }} // Slight delay
              >
                Our Special Dishes
              </motion.h1>
              <motion.p
                className="text-[1rem] text-gray-600 mt-12 text-justify"
                initial={{ opacity: 0, x: 50 }} // Start with a move up effect
                whileInView={{ opacity: 1, x: 0 }} // Move to original position
                transition={{ duration: 1, delay: 0.7 }} // Slight delay
              >
                Our Espesyal Canton dishes offer a delicious twist on the
                traditional Filipino stir-fried noodles. Made with fresh egg
                noodles, a blend of savory sauces, and loaded with tender meats,
                seafood, and crisp vegetables, each bite is bursting with
                flavor. Whether it&apos;s our classic Espesyal Canton with pork
                and shrimp or a spicy version with chili and garlic, these
                dishes are sure to satisfy your cravings for hearty, Filipino
                comfort food. Perfect for any occasion, served fresh and hot!
              </motion.p>
            </div>
          </div>
        </section>
        <section>
          <motion.div
            className="my-[20rem]"
            initial={{ scale: 0.65 }} // Start with a slide down effect
            whileInView={{ scale: 1 }} // Move to original position
            transition={{ duration: 1, delay: 0 }}
          >
            <Image
              src="/assets/home-canton.png"
              width={1920}
              height={480}
              alt={""}
            />
          </motion.div>
        </section>
        <section className="mt-[5rem]">
          <motion.p
            className="flex justify-start text-[1rem] font-bold tracking-wider mx-8"
            initial={{ opacity: 0, x: -40 }} // Start with a slide down effect
            whileInView={{ opacity: 1, x: 0 }} // Move to original position
            transition={{ duration: 1.5, delay: 0 }} // Slight delay
          >
            TESTIMONIALS{" "}
          </motion.p>
          <div className="flex flex-col items-center mx-4">
            <motion.h2
              className="text-[5.5rem] font-[900] text-gray-800 mb-4 mx-6 text-center"
              initial={{ opacity: 0, y: 50 }} // Start with a move up effect
              whileInView={{ opacity: 1, y: 0 }} // Move to original position
              transition={{ duration: 1, delay: 0.7 }} // Slight delay
            >
              WHAT DO KANTONIZERS SAY ABOUT US.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Start with a move up effect
              whileInView={{ opacity: 1, y: 0 }} // Move to original position
              transition={{ duration: 1, delay: 0.7 }} // Slight delay
            >
              <Carousel items={items} />
            </motion.div>
          </div>
        </section>

        <motion.section
          className="flex flex-col justify-center items-center mt-[30rem] bg-[#912828] rounded-[1.5rem] p-8 mx-10 text-center mb-[12rem]"
          initial={{ scale: 0.6 }} // Start with a move up effect
          whileInView={{ scale: 1 }} // Move to original position
          transition={{ duration: 1, delay: 0.3 }} // Slight delay
        >
          <h2 className="text-[64px] font-[500] text-[#FFCECE] mb-4 px-[10rem]">
            Don&apos;t be surprised at how satisfied your tummy is once you
            kantonize.
          </h2>
          <Link href="/kantonize">
            <motion.button
              className="bg-[#FFCECE] hover:bg-gray-100 text-[#470F0F] font-bold py-[0.5rem] text-[20px] px-[5rem] rounded-3xl mt-4 tracking-wider"
              whileHover={{ scale: 1.1 }}
            >
              Kantonize Now
            </motion.button>
          </Link>
        </motion.section>
      </main>
    </div>
  );
};

export default Home;
