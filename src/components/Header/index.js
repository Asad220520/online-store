import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const { basket } = useSelector((s) => s);
  const { fovarite } = useSelector((r) => r);
  return (
    <div
      className="header fixed w-[100%]"
      style={{
        backdropFilter: "blur(5px)",
        opacity: "0.96",
      }}
    >
      <div className="headere ">
        <nav className="items-center  bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
            <NavLink to={"/"} className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Online-store
              </span>
            </NavLink>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink to={"/"} className="text-white">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/product"} className="text-white">
                    product
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/Portfolio"} className="text-white">
                    Portfolio
                  </NavLink>
                </li>
                <li className="flex gap-2 items-center">
                  <Link
                    className=" flex items-center gap-3 justify-center"
                    to={`/favorite`}
                  >
                    <div className="flex items-center">
                      <AiOutlineHeart
                        style={{ fontSize: "30px", color: "#fff" }}
                      />
                      {fovarite.length ? (
                        <sup className="text-red-500 text-[16px]">
                          {fovarite.length}
                        </sup>
                      ) : null}
                    </div>
                  </Link>
                  <Link to={`/basket`}>
                    <div className="flex items-center">
                      <AiOutlineShopping
                        style={{ fontSize: "30px", color: "#fff" }}
                      />
                      {basket.length ? (
                        <sup className="text-red-500 text-[16px]">
                          {basket.length}
                        </sup>
                      ) : null}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
