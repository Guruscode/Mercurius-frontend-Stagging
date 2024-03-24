import React, { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <main className="w-full h-screen text-sm">
      <div className="flex justify-end items-center p-2">
        <p className="">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="font-semibold">Sign Up</span>
          </Link>
        </p>
      </div>
      <div className="w-fit mx-auto text-center mb-4 font-mono">
        <h1 className="text-3xl">Mercurius</h1>
        <p className="">Elegance Redefined. Innovation Redesigned</p>
      </div>
      <div className="shadow-md w-1/3 mx-auto flex flex-col justify-center items-center px-4 py-8 rounded">
        <div className="w-full">
          <form>
            <label className="font-semibold text-[1.4rem]" htmlFor="signIn">
              Sign In
            </label>
            <div>
              <input
                className="border w-full my-4 rounded-xl px-4 py-3 outline-none"
                type="text"
                placeholder="email address"
                autoFocus
              />
            </div>
            <div className="relative">
              {showPassword ? (
                <BsEye
                  onClick={handlePassword}
                  className="absolute right-6 top-[37%] cursor-pointer"
                  size={20}
                />
              ) : (
                <BsEyeSlash
                  onClick={handlePassword}
                  className="absolute right-6 top-[37%] cursor-pointer"
                  size={20}
                />
              )}

              <input
                className="border w-full my-4 rounded-xl px-4 py-3 outline-none"
                type="password"
                placeholder="password"
              />
            </div>
            <Link to="/resetPassword">
              <p className="font-bold -mt-3 cursor-pointer">Forgot password?</p>
            </Link>
            <button className="bg-[#00003C] text-white font-semibold w-full my-4 rounded-xl px-4 py-3 outline-none">
              Sign In
            </button>
            <fieldset className="flex items-center justify-around gap-6 text-center border-0 border-t mt-2 py-2 px-2">
              <legend className="px-2 font-semibold">Or</legend>
              <button className="border py-2 px-3 rounded-md w-[90%] flex items-center justify-center gap-2 font-semibold">
                {" "}
                <FcGoogle size={25} />
                Google
              </button>
              <button className="border py-2 px-3 rounded-md w-[90%] flex items-center justify-center gap-2 font-semibold">
                {" "}
                <FaFacebook className="text-blue-800" size={25} />
                Facebook
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <p className="text-[.7rem] w-1/4 mx-auto my-4 leading-tight">
        Protected by reCAPTCHA and subject to the{" "}
        <Link>
          <span className="font-bold cursor-pointer">Mercurius</span>
        </Link>{" "}
        <Link>
          <span className="font-bold cursor-pointer">Privacy Policy</span>
        </Link>{" "}
        and
        <Link>
          {" "}
          <span className="font-bold cursor-pointer">Terms of Service.</span>
        </Link>
      </p>
    </main>
  );
}
