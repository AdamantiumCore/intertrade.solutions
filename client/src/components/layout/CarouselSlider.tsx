"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { products as p } from "../../constants/index";
import CarouselCard from "./CarouselCard";
import TriangleChevron from "../icons/TriangleChevronIcon";

type TimerRef = MutableRefObject<ReturnType<typeof setTimeout> | null>;

function Carousel() {
  const [indecies, setLastTransition] = useState<[number, number]>([0, 0]); // indecies[0] === previousIndex, indecies[1] === currentIndex
  const [products, setProducts] = useState(p);
  const [slides, setSlides] = useState([p[p.length - 1], ...p, p[0]]);
  const autoplayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null); // for first/last slide transition
  const slideQueueRef = useRef<Array<number>>([]);

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
        clearTimer(autoplayTimerRef);
        setLastTransition([indecies[1], toLast ? p.length - 1 : 0]);
        slideTimerRef.current = null;
      }, 1000);
    } else {
      setLastTransition([indecies[1], num]);
    }
  }

  function clearTimer(timer: TimerRef) {
    const id: ReturnType<typeof setTimeout> = timer.current!;
    clearTimeout(id);
    timer.current = null;
  }

  useEffect(() => {
    function setAutoplay(ms: number) {
      autoplayTimerRef.current = setTimeout(() => {
        autoplayTimerRef.current = null;
        changeSlide(indecies[1] + 1);
      }, ms);
    }
    const prevIdx = indecies[0];
    const currIdx = indecies[1];

    if (Math.abs(prevIdx - currIdx) === p.length - 1) {
      slideContainerRef.current!.style.transform = `translateX(-${(currIdx + 1) * 100}%)`;
      if (!autoplayTimerRef.current) setAutoplay(1000);
    } else {
      slideContainerRef.current!.classList.replace(
        "duration-0",
        "duration-1000",
      );
      slideContainerRef.current!.style.transform = `translateX(-${(currIdx + 1) * 100}%)`;
    }
    if (!autoplayTimerRef.current) setAutoplay(2000);
  }, [indecies]);

  return (
    <div className="group relative m-auto mt-4 flex h-[80vh] w-screen overflow-hidden">
      <div
        ref={slideContainerRef}
        style={{ transform: `translateX(-${(indecies[1] + 1) * 100}%)` }}
        className={classNames(
          "absolute flex h-full w-full bg-slate-500",
          "transition-transform duration-1000 ease-out",
        )}
      >
        {slides.map((product, index) => (
          <CarouselCard
            key={`${index - 1}-${product.label}`}
            imgSrc={product.imgSrc}
            label={product.label}
            price={product.price}
            index={index - 1}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <div
        onClick={() => {
          // TODO: trying to smooth interval if clicking through ends of products quickly
          // if (slideTimerRef.current) {
          //   if (slideQueueRef.current[0] === p.length) {
          //     slideQueueRef.current.push(
          //       slideQueueRef.current[slideQueueRef.current.length] - 1,
          //     );
          //   } else {
          //     clearTimer(slideTimerRef);
          //     slideContainerRef.current!.classList.replace(
          //       "duration-1000",
          //       "duration-0",
          //     );
          //     slideContainerRef.current!.style.transform = `translateX(-${(p.length - 1) * 100}%)`;
          //     setLastTransition([indecies[1], p.length - 2]);
          //   }

          //   slideQueueRef.current = [];
          //   return;
          // }
          clearTimer(autoplayTimerRef);
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
        onClick={() => {
          // TODO: trying to smooth interval if clicking through ends of products quickly

          // if (slideTimerRef.current) {
          //   clearTimer(slideTimerRef);

          //   if (slideQueueRef.current[0] < 0) {
          //     setLastTransition([indecies[1], 0]);
          //   } else {
          //     slideContainerRef.current!.classList.replace(
          //       "duration-1000",
          //       "duration-0",
          //     );
          //     slideContainerRef.current!.style.transform = `translateX(-${100}%)`;
          //     slideQueueRef.current.push(1);
          //     setLastTransition([indecies[1], 1]);
          //   }

          //   slideQueueRef.current = [];
          //   return;
          // }
          clearTimer(autoplayTimerRef);
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
                className={`h-3 w-3 rounded-full bg-white transition-all hover:cursor-pointer ${indecies[1] === index ? "p-2" : "bg-opacity-50"}`}
                onClick={() => {
                  clearTimer(autoplayTimerRef);
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