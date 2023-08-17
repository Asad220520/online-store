import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBasket2Fill, BsCartPlus } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import {
  addToBasket,
  addToFavorite,
  deleteFromFavorite,
} from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
const ProductCart = ({ el }) => {
  const dispath = useDispatch();
  const { fovarite, basket } = useSelector((r) => r);
  const bask = basket.some((some) => some.id === el.id);
  const nav = useNavigate();
  const item = fovarite.find((find) => find.id === el.id);
  console.log(fovarite);
  return (
    <div id="productCart">
      <div className="w-[300px] flex flex-col items-center justify-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/detailsWoomen/${el.id}`}>
          <img className="rounded-t-lg w-[100%]" src={el.image} alt="" />
        </Link>
        <div className=" flex items-center justify-center flex-col p-5">
          <Link>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {el.title}
            </h5>
          </Link>
          <p className="text-white">{el.price} $</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {el.description}
          </p>
          <div className="flex">
            {bask ? (
              <button
                onClick={() => nav("/basket")}
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bldark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                <BsBasket2Fill />
              </button>
            ) : (
              <button
                onClick={() => {
                  dispath(addToBasket(el));
                }}
                type="button"
                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bldark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                <BsCartPlus />
              </button>
            )}
            <button
              onClick={() => {
                return item
                  ? item.liked
                    ? dispath(deleteFromFavorite(el))
                    : ""
                  : dispath(addToFavorite(el));
              }}
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <AiFillHeart
                className={`${item ? (item.liked ? "text-red-600" : "") : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
