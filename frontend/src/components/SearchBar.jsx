import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
    return (
        <form>
            <div className="relative w-[400px] h-16 top-[0px] rounded-full mx-auto bg-[#d6d3d1] flex items-center shadow-2xl"> 
                <div className="absolute right-auto w-[64px] top-0 h-[64px] flex items-center justify-center rounded-full"> 
                    <FaSearch className="text-grey text-xl" />
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-full pl-20 pr-16 bg-transparent outline-none rounded-full text-gray-800 border border-black"  
                />
            </div>
        </form>
    );
}

export default SearchBar;
