import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import InterTradeLogo from "../common/Logo";
import TriangleChevron from "../icons/TriangleChevronIcon";
import SearchBar from "../common/SearchBar";

export default function Navbar() {
  return (
    <nav className="relative hidden h-20 w-full flex-none lg:block">
      <div className="flex items-center justify-between py-3 pl-[46px] pr-[50px]">
        <div>
          <InterTradeLogo className="h-8" />
        </div>
        <div className="flex flex-auto justify-center space-x-8">
          <div className="group flex items-center hover:text-it-teal-300 hover:brightness-90">
            <h5 className="mr-1 font-lexend tracking-[0.018em]">Categories</h5>
            <TriangleChevron
              className="text-it-gray-600 mt-0.5 h-5 w-5 group-hover:text-it-teal-300"
              direction="down"
            />
          </div>
          <div className="relative h-10 w-1/2">
            <SearchBar placeholder="Search for anything in the world..."/> {/*SearchBar*/}
          </div>
        </div>
        <div className="flex justify-end">
          <ul className="flex space-x-5">
            <li>
              <HeartIcon className="h-6 w-6" />
            </li>
            <li>
              <ShoppingCartIcon className="h-6 w-6" />
            </li>
          </ul>
          <a className="ml-8 whitespace-nowrap font-lexend text-base hover:text-it-purple-300 hover:brightness-75">
            Sign In
          </a>
        </div>
      </div>
      <div className="h-[1.5px] w-full bg-gradient-to-l from-it-teal-300 from-25% via-it-blue-200 via-55% to-it-purple-300 to-70%" />
    </nav>
  );
}
