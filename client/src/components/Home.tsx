import Carousel from "./layout/CarouselSlider";
import Navbar from "./layout/Navbar";

function HomePage() {
  return (
    <div className="flex h-full w-full flex-col text-it-black">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default HomePage;
