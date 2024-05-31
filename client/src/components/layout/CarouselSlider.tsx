"use client";

import { useEffect, useState } from "react";
import { products } from "../../constants/index";
import CarouselCard from "./CarouselCard";
import TriangleChevron from "../icons/TriangleChevronIcon";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === products.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const autoplay = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    return () => clearInterval(autoplay);
  }, [currentIndex]);

    const buttonClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="group relative m-auto mt-4 w-full max-w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product, index) => (
          <div key={product.label} className="min-w-full">
            <CarouselCard
              imgSrc={product.imgSrc}
              label={product.label}
              price={product.price}
            />
          </div>
        ))}
      </div>
      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block"
      >
        <TriangleChevron
          direction="left"
          className="text-white duration-100 ease-in-out hover:scale-125 "
        />
      </div>
      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block"
      >
        <TriangleChevron
          direction="right"
          className="text-white duration-100 ease-in-out hover:scale-125 hover:bg-stone-200 "
        />
      </div>
              <div className="absolute bottom-4 left-0 right-0">
         <div className="flex items-center justify-center gap-2">          {products.map((_, index) => {
              return (
                 <div
                   key={index}
                 className={`h-3 w-3 rounded-full bg-white transition-all hover:cursor-pointer ${currentIndex === index ? "p-2" : "bg-opacity-50"}`}
                  onClick={() => buttonClick(index)}
                ></div>
              );
            })}
         </div>
         </div> 
    </div>
  );
}

export default Carousel;

