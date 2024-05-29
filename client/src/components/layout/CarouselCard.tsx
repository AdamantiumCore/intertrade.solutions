import { StaticImageData } from "next/image";

interface CardProps {
    imgSrc: string;
    label: string;
    price: string;
  }

  const CarouselCard: React.FC<CardProps> = ({imgSrc, label, price}) => {
  return (
    <div className="relative  h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center object-cover"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex  flex-col justify-center items-start text-white p-4">
        <div className="w-1/2 flex flex-col gap-4 justify-center items-center">
          <div>
        <h2 className="text-3xl font-bold font-aracad">{label}</h2>
        <p className="text-lg mt-2 ">{price}</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default CarouselCard;