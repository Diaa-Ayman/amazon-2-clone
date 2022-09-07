import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSelector } from "react-redux";
function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="">
      {/* Top Nav */}

      <div className="flex justify-between sm:justify-center items-center bg-gray-900 space-x-1 px-4 py-1">
        <Link href="/">
          <div className="border hover:border-white border-gray-900 pt-1 cursor-pointer">
            <Image
              src="https://links.papareact.com/f90"
              className="object-contain "
              width={140}
              height={40}
            />
          </div>
        </Link>

        <div className="input_field hidden sm:flex items-center flex-1 h-10 bg-yellow-500 hover:bg-yellow-400 rounded-md">
          <input className="h-full rounded-l-md outline-none flex-1 pl-1" />
          <MagnifyingGlassIcon className="text-gray-900 h-10 w-10 p-2 cursor-pointer" />
        </div>
        <Link href="/signin">
          <div className=" text-white flex flex-col w-28 h-full text-xs border border-gray-900 hover:border-white p-2 cursor-pointer">
            <span>Hello, Sign in</span>
            <span className="font-semibold">Account &amp; Lists</span>
          </div>
        </Link>

        <div className="text-white flex flex-col w-20 h-full text-xs border border-gray-900 hover:border-white p-2 cursor-pointer">
          <span>Returns</span>
          <span className="font-bold">&amp; Orders</span>
        </div>
        <Link href="/cart">
          <div className="flex items-center text-white border border-gray-900 hover:border-white p-1 cursor-pointer">
            <div className="">
              <ShoppingCartIcon className="w-10 h-10 font-bold" />
            </div>
            <div className="flex flex-col justify-start relative">
              <span className="absloute top-[-5px] left-[-5px] w-4 h-5 rounded-full grid place-items-center font-bold text-yellow-500">
                {totalQuantity}
              </span>
              <span className="font-bold">Cart</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom Nav */}

      {/* ALL LIST ITEMS SHOULD BE LINKS and may be dynamic */}

      <div className="bg-gray-800 py-1 px-4 text-white font-semibold">
        <ul className="list-none flex  md:space-x-1 text-xs md:text-sm">
          <li className="btnLink flex">
            <Bars3Icon className="h-5 w-5 text-white" />
            <span className="font-bold">All</span>
          </li>
          <li className="btnLink">Todays&apos;Deals</li>
          <li className="btnLink">Customr Service</li>
          <li className="btnLink">Registry</li>
          <li className="btnLink">Gift Cards</li>
          <li className="btnLink">Gift Cards</li>
          <li className="btnLink">Sell</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
