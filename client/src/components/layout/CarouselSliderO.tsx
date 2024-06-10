"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import { products as p } from "../../constants/index";
import CarouselCard from "./CarouselCardO";
import TriangleChevron from "../icons/TriangleChevronIcon";

function Carousel() {
  const [previousIndex, setPreviousIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState(p);
  // const [slides, setSlides] = useState(
  //   [products[products.length - 1]].concat(products.slice(1)),
  // );

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
    setPreviousIndex(currentIndex);
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === products.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setPreviousIndex(currentIndex);
    setCurrentIndex(newIndex);
  };

  // useEffect(() => {
  //   // setProducts()
  //   // if (Array.isArray(products)) {
  //   //   // setSlides();
  //   // }
  //   if (previousIndex === currentIndex) return;

  //   if (previousIndex === currentIndex - 1) {
  //     setSlides([
  //       ...slides.slice(1, 2),
  //       currentIndex === products.length - 1
  //         ? products[0]
  //         : products[currentIndex + 1],
  //     ]);
  //   } else {
  //     setSlides([
  //       currentIndex === 0
  //         ? products[products.length - 1]
  //         : products[currentIndex - 1],
  //       ...slides.slice(1),
  //     ]);
  //   }
  // }, [previousIndex, currentIndex]);

  // useEffect(() => {
  //   if(currentIndex )
  // }, [currentIndex])

  useEffect(() => {
    const autoplay = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const buttonClick = (index: number) => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(index);
  };

  return (
    <div className="group relative m-auto mt-4 flex w-screen overflow-hidden">
      {/* <div */}
      <>
        {/* // className="flex transition-transform duration-1000 ease-out" */}
        {/* // style={{ transform: `translateX(-${currentIndex * 100}%)` }} */}
        {/* > */}
        {Array.of(products[products.length - 1], ...products, products[0]).map(
          (product, index) => {
            return (
              <CarouselCard
                key={product.label}
                imgSrc={product.imgSrc}
                label={product.label}
                price={product.price}
                className={
                  (previousIndex === 0 &&
                    currentIndex === products.length - 1) ||
                  (previousIndex === products.length - 1 && currentIndex === 0)
                    ? "z-[1000] block translate-x-full"
                    : "hidden"
                }
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
                index={index}
                currentIndex={currentIndex}
                prevIndex={previousIndex}
                lastIndex={products.length - 1}
              />
            );
          },
        )}

        {products.map((product, index) => (
          // {/* // <div
          //     //   key={product.label}
          //     //   // className="min-w-full"
          //     //   // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          //     //   className={classNames(
          //     //     "block w-full min-w-full",
          //     //     // index === currentIndex && "z-[100]",
          //     //     // "transition-transform duration-1000 ease-out",
          //     //     // `translate-x-[(${(index - (products.length - index) + currentIndex) * 100}%)]`,
          //     //     // `translate-x-[${currentIndex * 100}%]`,
          //     //     // index - (currentIndex === 0 ? 5 : currentIndex) === -1
          //     //     // ? // ? `translateX(-${currentIndex * 100}%)`
          //     //     // `-translate-x-full`
          //     //     // : `translate-x-[(${(index - currentIndex) * 100}%)]`,
          //     //     // : `translateX(-${currentIndex * 100}%)`,
          //     //   )}
          //     // >
          <CarouselCard
            key={product.label}
            imgSrc={product.imgSrc}
            label={product.label}
            price={product.price}
            className={
              (previousIndex === 0 && currentIndex === products.length - 1) ||
              (previousIndex === products.length - 1 && currentIndex === 0)
                ? "hidden"
                : "flex"
            }
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            index={index}
            currentIndex={currentIndex}
            prevIndex={previousIndex}
            lastIndex={products.length - 1}
          />
          //   //   // </div>
        ))}
      </>
      {/* </div> */}
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
          className="text-white duration-100 ease-in-out hover:scale-125"
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {" "}
          {products.map((_, index) => {
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
