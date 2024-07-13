import Navbar from "./layout/Navbar";
import HNavbar from './layout/HNavbar';
import CarouselSlider from "./layout/CarouselSlider";
import StoresPage from "@/app/store";

function HomePage() {
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
