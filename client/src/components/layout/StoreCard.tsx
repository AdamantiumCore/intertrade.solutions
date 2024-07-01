import React from "react";
import Image from "next/image";

interface StoreLogo {
  logoImage: string;
  imageAlt: string;
}

interface StoreItem {
  itemImage: string;
  imageAlt: string;
}

interface Store {
  storeName: string;
  storeRating: number;
  storeLogo: StoreLogo;
  storeCategories: string[];
  storeItems: StoreItem[];
}

interface StoreCardProps {
  stores: Store[];
}

const StoreCard: React.FC<StoreCardProps> = ({ stores }) => {
  return (
    <div className="grid-container grid grid-cols-1 gap-6 md:grid-cols-3">
      {stores.map((store, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-300 bg-white p-3"
        >
          <div className="flex w-full flex-col justify-between space-y-2 md:flex-row md:space-y-0">
            {store.storeItems.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`relative h-32 w-full rounded-lg bg-gray-200 md:w-32 ${
                  itemIndex > 0 ? "md:ml-2" : ""
                }`}
              >
                <Image
                  src={item.itemImage}
                  alt={item.imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex">
            <div className="h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={store.storeLogo.logoImage}
                alt={store.storeLogo.imageAlt}
                width={80}
                height={80}
                className="rounded-full bg-gray-200"
              />
            </div>

            <div className="ml-3">
              <div className="mr-2.5 inline-flex font-medium">
                {store.storeName}
              </div>
              <div className="inline-flex items-center rounded-lg bg-teal-100 px-1.5 text-center align-middle">
                <span className="mr-0.5">&#9733;</span>
                <span>{store.storeRating}</span>
              </div>
              <div className="mt-4 flex flex-wrap">
                {store.storeCategories.map((category, categoryIndex) => (
                  <span
                    key={categoryIndex}
                    className="outerBorder storeCardCategory-text mb-2 mr-2 rounded-full px-2 py-1 text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoreCard;
