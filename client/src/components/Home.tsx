import Navbar from "./layout/Navbar";
import HNavbar from './layout/HNavbar';
import CarouselSlider from "./layout/CarouselSlider";

function HomePage() {
  return (
    <div className="flex h-full w-full flex-col text-it-black">
      <Navbar />
      <HNavbar />
      <CarouselSlider />
    </div>
  );
}

export default HomePage;
