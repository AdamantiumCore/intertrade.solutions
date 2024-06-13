import classNames from "classnames";
import { CSSProperties } from "react";
import Image from "next/image";

interface CardProps {
  imgSrc: string;
  label: string;
  price: string;
  index: number;
  prevIndex?: number;
  currentIndex?: number;
  lastIndex?: number;
  className?: string;
  style?: CSSProperties;
}

// const CarouselCard: React.FC<CardProps> = ({
//   imgSrc,
//   label,
//   price,
//   index,
//   prevIndex,
//   currentIndex,
//   lastIndex,
//   className,
//   style,
// }) => {
//   return (
//     <div
//       // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       // style={{
//       //   transform:
//       //     currentIndex === lastIndex
//       //       ? `translateX(-${currentIndex * 100}%)`
//       //       : `translateX(-${currentIndex * 100}%)`,
//       //   zIndex: currentIndex === lastIndex ? 100 : 10,
//       // }}
//       // style={{
//       //   transform:
//       //     (index === lastIndex && currentIndex === 0) ||
//       //     index === currentIndex - 1
//       //       ? `translateX(-100%)`
//       //       : `translateX(${(currentIndex < 2 && index > 2 ? Math.abs(index - 2) : currentIndex - index) * 100}%)`,
//       //   // : `translateX(0%)`,
//       // }}
//       // style={{
//       //   transform:
//       //     (index === lastIndex && currentIndex === 0) ||
//       //     index === currentIndex - 1
//       //       ? `translateX(${100 * currentIndex}%)`
//       //       : // : (currentIndex === 0 && index === lastIndex) ||
//       //         //     index === currentIndex + 1
//       //         //   ? `translateX(100%)`
//       //         index === currentIndex
//       //         ? "translateX(0%)"
//       //         : "",
//       //   zIndex: index === currentIndex ? 100 : 0,
//       // }}
//       // : `translateX(0%)`,

//       // style={{
//       //   transform:
//       //     (index === lastIndex && currentIndex === 0) ||
//       //     index === currentIndex - 1
//       //       ? `translateX(-100%)`
//       //       : (currentIndex === 1 && index === lastIndex) ||
//       //           index === currentIndex - 2
//       //         ? `translateX(${lastIndex + 1}%)`
//       //         : `translateX(${index - currentIndex}%)`,
//       //   // : index === currentIndex
//       //   //   ? "translateX(0%)"
//       //   //   : "",
//       //   // : `translateX(0%)`,
//       // }}
//       style={style}
//       className={classNames(
//         "relative block h-[80vh] w-full min-w-full",
//         "transition-transform duration-1000 ease-out",
//         className,
//         // {
//         //   "z-[100]": index === currentIndex,
//         //   "-translate-x-full":
//         //     (index === lastIndex && currentIndex === 0) ||
//         //     index === currentIndex - 1,
//         //   "translate-x-0": index === currentIndex,
//         //   "translate-x-full":
//         //     (index === 0 && currentIndex === lastIndex) ||
//         //     currentIndex === index - 1,
//         // },
//         // // index === currentIndex && "z-[100]",
//         // `translate-x-[${(index) * 100}%]`
//         // index - (currentIndex === 0 ? 5 : currentIndex) === -1
//         //   ? `translateX(-${currentIndex * 100}%)`
//         //   : `-translate-x-full`,
//         // : `translate-x-[${(currentIndex - index) * 100}%]`,
//         // : `translateX(-${currentIndex * 100}%)`,
//       )}
//     >
//       <div
//         className="absolute inset-0 w-screen bg-cover bg-center object-cover"
//         style={{ backgroundImage: `url(${imgSrc})` }}
//       ></div>
//       <div className="absolute inset-0 flex flex-col items-start  justify-center bg-black bg-opacity-50 p-4 text-white">
//         <div className="flex w-1/2 flex-col items-center justify-center gap-4">
//           <div>
//             <h2 className="font-afacad text-3xl font-bold">{label}</h2>
//             <p className="mt-2 text-lg ">{price}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const CarouselCard: React.FC<CardProps> = ({
  imgSrc,
  label,
  price,
  index,
  prevIndex,
  currentIndex,
  lastIndex,
  className,
  style,
}) => {
  return (
    <div
      style={style}
      // className={classNames(
      //   "relative block h-[80vh] w-full min-w-full",
      //   "transition-transform duration-1000 ease-out",
      //   className,
      // )}
      className={classNames(
        "relative block h-full w-full min-w-full",
        // "transition-transform duration-1000 ease-out",
        className,
      )}
    >
      <div
        className="absolute inset-0 h-full w-screen bg-cover bg-center object-cover"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-start  justify-center bg-black bg-opacity-50 p-4 text-white">
        {/* <Image src={imgSrc} alt={`${label} image`} className="w-full" width={100} height={80}/> */}
        <div className="flex w-1/2 flex-col items-center justify-center gap-4">
          <div>
            <h2 className="font-afacad text-3xl font-bold">{label}</h2>
            <p className="mt-2 text-lg ">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
