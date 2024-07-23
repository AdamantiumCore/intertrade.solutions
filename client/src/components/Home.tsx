'use client';
import Navbar from "./layout/Navbar";
import HNavbar from './layout/HNavbar';
import CarouselSlider from "./layout/CarouselSlider";
import StoresPage from "@/app/store";
import { useEffect } from "react";
import { Cookies } from "react-cookie"
function HomePage() {
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    if(!token){
      //First logout user maybe
      //Second redirect to Login, but this is only if the user needs to be log in
    }
  }, [])
  return (
    <div className="flex h-full w-full flex-col text-it-black">
      <Navbar />
      <HNavbar />
      <CarouselSlider />
      <StoresPage />
    </div>
  );
}

export default HomePage;
