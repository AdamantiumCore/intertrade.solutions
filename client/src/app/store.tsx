// src/app/store.tsx
import React from "react";
import StoreCard from "@/components/layout/StoreCard";

interface Store {
  storeName: string;
  storeRating: number;
  storeLogo: {
    logoImage: string;
    imageAlt: string;
  };
  storeCategories: string[];
  storeItems: {
    itemImage: string;
    imageAlt: string;
  }[];
}

const stores: Store[] = [
  {
    storeName: "BabesBaseballCollectibles",
    storeRating: 4.8,
    storeLogo: {
      logoImage: "/images/logo1.jpg",
      imageAlt: "Logo",
    },
    storeCategories: ["Collectibles", "Apparel", "Sports"],
    storeItems: [
      {
        itemImage: "/images/item1.jpg",
        imageAlt: "Item 1",
      },
      {
        itemImage: "/images/item2.jpg",
        imageAlt: "Item 2",
      },
      {
        itemImage: "/images/item3.jpg",
        imageAlt: "Item 3",
      },
    ],
  },
  {
    storeName: "TeeOff",
    storeRating: 4.9,
    storeLogo: {
      logoImage: "/images/logo2.jpg",
      imageAlt: "Store 2 Logo",
    },
    storeCategories: ["Sports", "Equipment", "Apparel"],
    storeItems: [
      {
        itemImage: "/images/item4.jpg",
        imageAlt: "Item 4",
      },
      {
        itemImage: "/images/item5.jpg",
        imageAlt: "Item 5",
      },
      {
        itemImage: "/images/item6.jpg",
        imageAlt: "Item 6",
      },
    ],
  },
  {
    storeName: "HobbyHouse",
    storeRating: 4.6,
    storeLogo: {
      logoImage: "/images/logo3.jpg",
      imageAlt: "Store 3 Logo",
    },
    storeCategories: ["Models", "Collectibles", "Games"],
    storeItems: [
      {
        itemImage: "/images/item7.jpg",
        imageAlt: "Item 7",
      },
      {
        itemImage: "/images/item7.jpg",
        imageAlt: "Item 7",
      },
      {
        itemImage: "/images/item8.jpg",
        imageAlt: "Item 8",
      },
    ],
  },
  {
    storeName: "WickerMeTimbers",
    storeRating: 5.0,
    storeLogo: {
      logoImage: "/images/logo4.jpg",
      imageAlt: "Store 4 Logo",
    },
    storeCategories: ["Furniture", "Wicker"],
    storeItems: [
      {
        itemImage: "/images/item9.jpg",
        imageAlt: "Item 9",
      },
      {
        itemImage: "/images/item9.jpg",
        imageAlt: "Item 9",
      },
      {
        itemImage: "/images/item10.jpg",
        imageAlt: "Item 10",
      },
    ],
  },
  {
    storeName: "JacksJoys",
    storeRating: 4.7,
    storeLogo: {
      logoImage: "/images/logo5.jpg",
      imageAlt: "Store 5 Logo",
    },
    storeCategories: ["Toys", "Games", "Models"],
    storeItems: [
      {
        itemImage: "/images/item11.jpg",
        imageAlt: "Item 11",
      },
      {
        itemImage: "/images/item12.jpg",
        imageAlt: "Item 12",
      },
      {
        itemImage: "/images/item13.jpg",
        imageAlt: "Item 13",
      },
    ],
  },
  {
    storeName: "WhereArtThou",
    storeRating: 4.9,
    storeLogo: {
      logoImage: "/images/logo6.jpg",
      imageAlt: "Store 6 Logo",
    },
    storeCategories: ["Paintings", "Pottery", "Art"],
    storeItems: [
      {
        itemImage: "/images/item14.jpg",
        imageAlt: "Item 14",
      },
      {
        itemImage: "/images/item15.jpg",
        imageAlt: "Item 15",
      },
      {
        itemImage: "/images/item16.jpg",
        imageAlt: "Item 16",
      },
    ],
  },
];

const StoresPage: React.FC = () => {
  return (
    <div className="flex justify-center p-5 md:p-10 lg:p-20">
      <div>
        <h1 className="mb-5 ml-4 text-2xl font-bold">Shop somewhere new</h1>
        <StoreCard stores={stores} />
      </div>
    </div>
  );
};

export default StoresPage;
