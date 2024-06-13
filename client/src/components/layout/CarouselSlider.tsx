"use client";

import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { products as p } from "../../constants/index";
import CarouselCard from "./CarouselCard";
import TriangleChevron from "../icons/TriangleChevronIcon";

function Carousel() {
  const [previousIndex, setPreviousIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indecies, setLastTransition] = useState<[number, number]>([0, 0]);
  const [products, setProducts] = useState(p);
  const [slides, setSlides] = useState([p[p.length - 1], ...p, p[0]]);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideQueueRef = useRef<Array<number>>([]);
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

  function changeSlide(num: number) {
    if (
      num === products.length || // clicked next past last product
      num < 0 || // clicked prev past first product
      Math.abs(num - indecies[1]) === p.length - 1 // clicked dot selector to go from first to last or vice-versa
    ) {
      const toLast: boolean =
        num === products.length || num === p.length - 1 ? false : true; // determine direction
      slideContainerRef.current!.classList.replace(
        "duration-0",
        "duration-1000",
      );
      slideContainerRef.current!.style.transform = `translateX(-${(toLast ? 0 : p.length + 1) * 100}%)`;
      slideQueueRef.current = [toLast ? 0 : p.length + 1];
      slideTimerRef.current = setTimeout(() => {
        slideContainerRef.current!.classList.replace(
          "duration-1000",
          "duration-0",
        );
        setLastTransition([indecies[1], toLast ? p.length - 1 : 0]);
        slideTimerRef.current = null;
      }, 1000);
    } else {
      setLastTransition([indecies[1], num]);
    }
  }

  function clearTimer(id: ReturnType<typeof setTimeout>) {
    clearTimeout(id);
    slideTimerRef.current = null;
  }

  useEffect(() => {
    const prevIdx = indecies[0];
    const currIdx = indecies[1];

    if (Math.abs(prevIdx - currIdx) === p.length - 1) {
      slideContainerRef.current!.style.transform = `translateX(-${(currIdx + 1) * 100}%)`;
      if (slideQueueRef.current.length > 1)
        changeSlide(slideQueueRef.current[slideQueueRef.current.length - 1]);
    } else {
      slideContainerRef.current!.classList.replace(
        "duration-0",
        "duration-1000",
      );
      slideContainerRef.current!.style.transform = `translateX(-${(currIdx + 1) * 100}%)`;
    }

    console.log("IND", indecies);
  }, [indecies]);

  // useEffect(() => {
  //   if(currentIndex === 0 && prev)
  // }, [currentIndex])

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

  // useEffect(() => {
  //   const autoplay = setInterval(nextSlide, 2000); // Change slide every 2 seconds
  //   return () => clearInterval(autoplay);
  // }, [currentIndex]);

  const buttonClick = (index: number) => {
    setPreviousIndex(currentIndex);
    setCurrentIndex(index);
  };

  return (
    <div className="group relative m-auto mt-4 flex h-[80vh] w-screen overflow-hidden">
      {/* <div */}
      <div
        ref={slideContainerRef}
        style={{ transform: `translateX(-${(currentIndex + 1) * 100}%)` }}
        className={classNames(
          "absolute flex h-full w-full bg-slate-500",
          "transition-transform duration-1000 ease-out",
        )}
      >
        {/* // className="flex transition-transform duration-1000 ease-out" */}
        {/* // style={{ transform: `translateX(-${currentIndex * 100}%)` }} */}
        {/* > */}
        {/* {Array.of(products[products.length - 1], ...products, products[0]).map(
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
        )} */}

        {slides.map((product, index) => (
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
            key={`${index - 1}-${product.label}`}
            imgSrc={product.imgSrc}
            label={product.label}
            price={product.price}
            // className={
            //   (previousIndex === 0 && currentIndex === products.length - 1) ||
            //   (previousIndex === products.length - 1 && currentIndex === 0)
            //     ? "hidden"
            //     : "flex"
            // }
            // className={
            //   (previousIndex === 0 && currentIndex === products.length - 1) ||
            //   (previousIndex === products.length - 1 && currentIndex === 0)
            //     ? "hidden"
            //     : "flex"
            // }
            // style={{ transform: `translateX(-${(currentIndex + 1) * 100}%)` }}
            index={index - 1}
            // currentIndex={currentIndex}
            // prevIndex={previousIndex}
            // lastIndex={products.length - 1}
          />
          //   //   // </div>
        ))}
      </div>
      {/* </div> */}
      {/* Left Arrow */}
      <div
        // onClick={prevSlide}
        onClick={() => {
          if (slideTimerRef.current) {
            if (slideQueueRef.current[0] === p.length) {
              slideQueueRef.current.push(
                slideQueueRef.current[slideQueueRef.current.length] - 1,
              );
              // setLastTransition([indecies[1], p.length - 1]);
            } else {
              clearTimer(slideTimerRef.current);
              slideContainerRef.current!.classList.replace(
                "duration-1000",
                "duration-0",
              );
              slideContainerRef.current!.style.transform = `translateX(-${(p.length - 1) * 100}%)`;
              setLastTransition([indecies[1], p.length - 2]);
            }

            slideQueueRef.current = [];
            return;
          }

          changeSlide(indecies[1] - 1);
        }}
        className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block"
      >
        <TriangleChevron
          direction="left"
          className="text-white duration-100 ease-in-out hover:scale-125 "
        />
      </div>
      {/* Right Arrow */}
      <div
        // onClick={nextSlide}
        onClick={() => {
          if (slideTimerRef.current) {
            clearTimer(slideTimerRef.current);

            if (slideQueueRef.current[0] < 0) {
              setLastTransition([indecies[1], 0]);
            } else {
              slideContainerRef.current!.classList.replace(
                "duration-1000",
                "duration-0",
              );
              slideContainerRef.current!.style.transform = `translateX(-${100}%)`;
              slideQueueRef.current.push(1);
              setLastTransition([indecies[1], 1]);
            }

            slideQueueRef.current = [];
            return;
          }

          changeSlide(indecies[1] + 1);
        }}
        className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block"
      >
        <TriangleChevron
          direction="right"
          className="text-white duration-100 ease-in-out hover:scale-125"
        />
      </div>
      {/*  Product Dots  */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {products.map((_, index) => {
            return (
              <div
                key={index}
                // className={`h-3 w-3 rounded-full bg-white transition-all hover:cursor-pointer ${currentIndex === index ? "p-2" : "bg-opacity-50"}`}
                className={`h-3 w-3 rounded-full bg-white transition-all hover:cursor-pointer ${indecies[1] === index ? "p-2" : "bg-opacity-50"}`}
                // onClick={() => buttonClick(index)}
                onClick={() => {
                  // if (slideTimerRef.current) {
                  //   slideQueueRef.current = slideQueueRef.current ? 0 : 1;
                  //   return;
                  // }
                  changeSlide(index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
