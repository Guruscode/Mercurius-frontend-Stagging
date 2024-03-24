import React, { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <main className="w-full h-screen text-sm">
      <div className="flex flex-col items-center justify-center">
        <div className="w-fit mx-auto text-center mb-4 font-mono mt-8">
          <h1 className="text-3xl">Mercurius</h1>
          <p className="">Elegance Redefined. Innovation Redesigned</p>
        </div>
        <div className="shadow-md w-1/3 mx-auto flex flex-col justify-center items-center px-4 py-8 rounded">
          <div className="w-full">
            <form>
              <label className="font-semibold text-[1.4rem]" htmlFor="signIn">
                Create new password
              </label>
              <p className="my-1">
                Please create a new password that you don’t use on any other
                site.
              </p>
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
                  placeholder="Create Password"
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
                  placeholder="Confirm Password"
                />
              </div>
              <button className="bg-[#00003C] text-white font-semibold w-full my-4 rounded-xl px-4 py-3 outline-none">
                Save
              </button>
              <button className="text-[#00003C] hover:underline font-semibold w-full">
                <Link to="/signin">Sign In</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
