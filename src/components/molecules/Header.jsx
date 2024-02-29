import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

import {
  BsJustifyLeft,
  BsX,
  BsPerson,
  BsSearch,
  BsCart3,
  BsChevronDown,
} from "react-icons/bs";

const navigation = [
  { name: "New In", href: "/new", current: true },
  { name: "Apparel", href: "/apparel", current: false },
  { name: "Accessories", href: "/accessories", current: false },
  { name: "Brands", href: "/brands", current: false },
  { name: "Gadgets", href: "/gadgets", current: false },
  { name: "Sales", href: "/sales", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="relative shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-black/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black/20">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <BsX
                      className="block h-5 w-5 font-semibold"
                      aria-hidden="true"
                    />
                  ) : (
                    <BsJustifyLeft
                      className="block h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="font-semibold font-mono text-[1.3rem] md:text-3xl flex flex-shrink-0 items-center ml-6 sm:ml-0">
                  <Link to="/">Mercurius</Link>
                </div>
                <div className="hidden flex-1 ml-6 md:ml-6 sm:block transition duration-300">
                  <form className="relative">
                    <BsSearch className="absolute top-[30%] left-2 text-black/80" />

                    <input
                      type="text"
                      name="search"
                      id="search"
                      className="border border-[#c3c3c3] rounded-md py-2 px-7 w-[100%] outline-none hover:outline-offset-1"
                      placeholder="Search Brands, Shoes ..."
                    />
                    <input
                      type="submit"
                      value="Search"
                      className="absolute top-[.33rem] right-[2%] bg-[#111] py-1 px-3 rounded-md text-white"
                    />
                  </form>
                </div>
              </div>

              <div className="flex justify-between gap-x-2 sm:gap-x-4 items-end pr-2 sm:ml-6 sm:pr-0">
                <div className="">
                  <Link
                    to="/register"
                    className="flex flex-row justify-between items-stretch"
                  >
                    <BsPerson size={20} />
                    <p className="hidden md:block font-semibold">
                      My&nbsp;Account
                    </p>
                  </Link>
                  {/* <a href="#"></a> */}
                </div>
                <div className="">
                  <Link
                    to="/cart"
                    className="flex flex-row justify-center items-stretch"
                  >
                    <BsCart3 size={20} />
                    <p className="hidden md:block font-semibold">Cart</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden sm:block mt-4 pb-4">
              <div className="flex gap-x-4 items-center justify-center">
                {/* <div className="hidden md:flex sm:flex-row gap-1 justify-center items-center border-2 py-1 px-3 rounded">
                  <BsJustifyLeft className="h-5 w-5" />
                  <p>All Categories</p>
                  <BsChevronDown
                    className="h-5 w-5"
                    role="button"
                    aria-label="button"
                  />
                </div> */}
                <div className="justify-self-center">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "border-b-2 border-black transition-all"
                          : "text-black hover:border-b-2 hover:border-black",
                        "px-3 py-2 font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel
            className={`sm:hidden absolute top-16 right-0 ${
              open ? "left-0" : "-left-[100%]"
            } transition-all duration-1000 z-20 bg-white`}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "border-b-2 border-black transition-all"
                      : "text-black hover:border-b-2 hover:border-black",
                    "block px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
