import { useState } from "react";
import Image from "next/image";

interface CarouselItem {
  image: string;
  title: string;
  description: string;
  job: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden max-w-7xl px-4">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center items-center transition-opacity duration-500"
          >
            <div className="w-full max-w-[70rem] h-[40rem] bg-white rounded-3xl p-8 shadow-lg border border-gray-200 text-center">
              {/* Quote */}
              <div className="relative text-6xl pt-40 font-black text-gray-800">
                <span className="absolute left-0 top-28">&quot;</span>
                <p className="text-gray-600 italic font-extralight text-lg md:text-xl">
                  {item.description}
                </p>
                <span className="absolute right-0 bottom-[-6rem]">&quot;</span>
              </div>

              {/* Image and Info */}
              <div className="mt-32 flex flex-col items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
                <h3 className="mt-4 text-2xl font-black tracking-wide text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
              index === currentIndex ? "bg-[#470F0F] scale-110" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
