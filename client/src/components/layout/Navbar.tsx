"use client"

import { useState } from 'react';

import Modal from '../ui/modal';
import Login from '../login';

import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import InterTradeLogo from "../common/Logo";
import TriangleChevron from "../icons/TriangleChevronIcon";
import SearchBar from "../common/SearchBar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleLoginOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Modal
        open={open}
        handleClose={handleClose}
      >
        <Login reset={open} />
      </Modal>
      <nav className="relative hidden h-20 w-full flex-none lg:block">
        <div className="flex items-center justify-between py-3 pl-[46px] pr-[50px]">
          <div>
            <InterTradeLogo className="h-8" />
          </div>
          <div className="relative h-10 w-1/2">
            <SearchBar placeholder="Search for anything in the world..."/> {/*SearchBar*/}
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
            <a onClick={() => handleLoginOpen()} className="ml-8 whitespace-nowrap font-lexend text-base hover:text-it-purple-300 hover:brightness-75 cursor-pointer">
              Sign In
            </a>
          </div>
        </div>
        <div className="h-[1.5px] w-full bg-gradient-to-l from-it-teal-300 from-25% via-it-blue-200 via-55% to-it-purple-300 to-70%" />
      </nav>
    </>
  );
}
