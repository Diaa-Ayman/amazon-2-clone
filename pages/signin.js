import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Signin() {
  return (
    <div className="w-full m-auto mt-8 max-w-[350px]">
      <Head>
        <title>Amazon Sign in</title>
      </Head>
      <div className="grid place-items-center mb-4">
        <img
          src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png"
          className="w-32 h-10"
        />
      </div>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-8">
          <span className="font-semibold text-2xl text-gray-800">Sign In</span>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow-lg focus:shadow-yellow-600  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow-lg focus:shadow-yellow-600 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            classNameName="button text-center w-full py-1 font-semibold text-lg"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
      <div>
        <div className="space-x-2 flex items-center justify-center">
          <div className="border-t w-24 "></div>
          <div className="font-semibold text-sm text-gray-900">
            New to Amazon?
          </div>
          <div className="border-t w-24"></div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link href="">
            <span className="w-full text-center text-sm font-semibold rounded-md cursor-pointer p-2 bg-gradient-to-b focus:ring-2 from-slate-100 to-slate-200 hover:bg-white active:from-slate-400 active:to-slate-200">
              Create your Amazon account
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
