import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
function Header() {
  const bottomNavLinksClass =
    "flex space-x-1 border border-gray-800 p-1 hover:border-white cursor-pointer w-fit";
  return (
    <div className="">
      {/* Top Nav */}

      <div className="flex justify-between sm:justify-center items-center bg-gray-900 space-x-1 px-4 py-1">
        <div className="border hover:border-white border-gray-900 pt-1 cursor-pointer">
          <Image
            src="https://links.papareact.com/f90"
            className="object-contain "
            width={140}
            height={40}
          />
        </div>
        <div className="input_field hidden sm:flex items-center flex-1 h-10 bg-yellow-500 hover:bg-yellow-400 rounded-md">
          <input className="h-full rounded-l-md outline-none flex-1 pl-1" />
          <MagnifyingGlassIcon className="text-gray-900 h-10 w-10 p-2 cursor-pointer" />
        </div>
        <div className=" text-white flex flex-col w-28 h-full text-xs border border-gray-900 hover:border-white p-2 cursor-pointer">
          <span>Hello, Sign in</span>
          <span className="font-semibold">Account &amp; Lists</span>
        </div>

        <div className="text-white flex flex-col w-20 h-full text-xs border border-gray-900 hover:border-white p-2 cursor-pointer">
          <span>Returns</span>
          <span className="font-bold">&amp; Orders</span>
        </div>
        <div className="flex items-center text-white border border-gray-900 hover:border-white p-1 cursor-pointer">
          <div className="">
            <ShoppingCartIcon className="w-10 h-10 font-bold" />
          </div>
          <div className="flex flex-col justify-start relative">
            <div className="absloute top-[-5px] left-[-5px] w-4 h-5 rounded-full grid place-items-center font-bold text-yellow-500">
              10
            </div>
            <span className="font-bold">Cart</span>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}

      {/* ALL LIST ITEMS SHOULD BE LINKS */}

      <div className="bg-gray-800 py-1 px-4 text-white font-semibold">
        <ul className="list-none flex  md:space-x-1 text-xs md:text-sm">
          <li className={bottomNavLinksClass}>
            <Bars3Icon className="h-5 w-5 text-white" />
            <span className="font-bold">All</span>
          </li>
          <li className={bottomNavLinksClass}>Todays'Deals</li>
          <li className={bottomNavLinksClass}>Customr Service</li>
          <li className={bottomNavLinksClass}>Registry</li>
          <li className={bottomNavLinksClass}>Gift Cards</li>
          <li className={bottomNavLinksClass}>Gift Cards</li>
          <li className={bottomNavLinksClass}>Sell</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
