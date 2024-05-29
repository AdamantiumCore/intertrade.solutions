"use client";

import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { products } from "../../constants/index";
import CarouselCard from "./CarouselCard";

function Caraousel() {
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

  const currentProduct = products[currentIndex];
  return (
    <div className="group relative m-auto mt-4  w-full  max-w-full">
      {currentProduct && (
        <CarouselCard
          imgSrc={currentProduct.imgSrc}
          label={currentProduct.label}
          price={currentProduct.price}
        />
      )}
      {/* Left Arrow */}
      <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* Index dots  */}
      {/* <div className='flex top-4 justify-center py-2'>
        {products.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Caraousel;
