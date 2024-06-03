"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import useDebounce from "./Debounce";
import {SearchBarProps, SearchedData } from "../../types/SearchBar/types";
import axios from "axios";
const SERVER_URL = "http://localhost:8800/api/v1";

export default function SearchBar({ placeholder }: SearchBarProps){
    const [searchedData, setSearchedData] = useState<SearchedData>();
    const [search, setSearch] = useState("");
    const searchQuery = useDebounce({object: search, delay: 1000});//cutomize delay here  
    useEffect(() => {
        if(search == undefined){
            return;
        }
        if(search.length > 3){
            getAutocompleteData();  
        }         
    }, [searchQuery.value])

    function getAutocompleteData() : any {
        axios.post(`${SERVER_URL}/search/getData`, {query: search})
        .then(result => { 
            setSearchedData(result.data) 
        })
        .catch(err => {
            console.log(err.message)
        });
    }
    function handleInputOnChange(e: React.ChangeEvent<HTMLInputElement>){
        setSearch(e.target?.value)
    }
    function getAllSearches() {
        //Navigate to the other page with all data (searchedData) and order them as autocomplete
    }
    function keyDownHandler(e : any) {
        let key = e.key;
        if(key === "Enter"){
          getAllSearches();
        }
    }
    return(
        <>
            <input
                value={search}
                onChange={handleInputOnChange}
                onKeyDown={keyDownHandler} 
                placeholder={placeholder}
                className="h-full w-full rounded-full border-[1.5px] border-it-gray-400 pl-5 font-afacad outline-none placeholder:text-it-gray-300 focus:border-it-purple-200"
            />
            <div onClick={getAllSearches} className="absolute right-1 top-1 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-it-purple-300 hover:bg-[#6944DC] hover:cursor-pointer">
              <MagnifyingGlassIcon className="h-[22px] w-[22px] stroke-2 text-white " />
            </div>
            <div>
            Products:
            {searchedData?.products.map((result, index) => {
              return (
                <div key={result.id} onClick={() => setSearch(result.name)}>
                  {result.name}
                </div>
              );
            })}
            Stores:
            {searchedData?.stores.map((result, index) => {
              return (
                <div key={result.id} onClick={() => setSearch(result.name)}>
                  {result.name}
                </div>
              );
            })}
          </div>
        </>
    )
}