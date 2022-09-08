import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { auth } from "../firebase";
function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signupHandler = (event) => {
    event.preventDefault();
    if (name.length > 0 && password.length > 6 && email.includes("@")) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          return authUser.user.updateProfile({
            displayName: name,
          });
        })
        .catch((error) => {
          alert("Something went wrong, please try again!");
          return;
        });
      router.push("/");
    } else alert("Please, Enter valid data!");

    setEmail("");
    setPassword("");
    setName("");
  };
  return (
    <div className="w-full m-auto mt-8 max-w-[350px]">
      <Head>
        <title>Amazon Sign up</title>
      </Head>
      <div className="grid place-items-center mb-4">
        <img
          src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png"
          className="w-32 h-10"
        />
      </div>

      <form
        onSubmit={signupHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-8">
          <span className="font-semibold text-2xl text-gray-800">
            Create account
          </span>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Your name
          </label>
          <input
            className="focus:shadow-lg text-sm focus:shadow-yellow-600  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="focus:shadow-lg text-sm focus:shadow-yellow-600  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
            className="focus:shadow-lg text-sm focus:shadow-yellow-600 appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="At least 6 charachters"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="button text-center w-full py-1 font-semibold text-lg"
            type="submit"
          >
            Sign up
          </button>
        </div>
        <hr className="mt-8 shadow-lg"></hr>
        <div className="flex items-center space-x-1 mt-8">
          <span className="text-sm text-gray-900 font-semibold">
            Already have an account?
          </span>
          <Link href="/signin">
            <span className="text-blue-500 text-sm cursor-pointer hover:-mt-1">
              Sign in
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
