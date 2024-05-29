"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
type SearchBarProps = {
    placeholder: string,
}
export default function SearchBar({ placeholder }: SearchBarProps){
    useEffect(() => {
        console.log("It works");
    }, []);
    return(
        <>
            <input
              placeholder={placeholder}
              className="h-full w-full rounded-full border-[1.5px] border-it-gray-400 pl-5 font-afacad outline-none placeholder:text-it-gray-300 focus:border-it-purple-200"
            />
            <div className="absolute right-1 top-1 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-it-purple-300 hover:bg-[#6944DC]">
              <MagnifyingGlassIcon className="h-[22px] w-[22px] stroke-2 text-white" />
            </div>
        </>
    )
}