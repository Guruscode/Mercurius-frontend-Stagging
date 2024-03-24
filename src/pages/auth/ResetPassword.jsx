import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
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
                Forgot Password?
              </label>
              <p className="my-1">
                No worries! Just enter your email and we’ll send you a reset
                password link.
              </p>
              <div>
                <input
                  className="border w-full my-4 rounded-xl px-4 py-3 outline-none"
                  type="text"
                  placeholder="email address"
                  autoFocus
                />
              </div>
              <button className="bg-[#00003C] text-white font-semibold w-full my-4 rounded-xl px-4 py-3 outline-none">
                Reset Password
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
