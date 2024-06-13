import classNames from "classnames";
import { CSSProperties } from "react";

interface CardProps {
  imgSrc: string;
  label: string;
  price: string;
  index: number;
  className?: string;
  style?: CSSProperties;
}

const CarouselCard: React.FC<CardProps> = ({
  imgSrc,
  label,
  price,
  className,
  style,
}) => {
  return (
    <div
      style={style}
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
