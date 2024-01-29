import { useState } from "react";
import StarRating from "./StarRating";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import "./animate.css";

function Comment({ image, name, comment, rating, date }) {
  return (
    <div className="flex flex-col h-auto w-full animated fadeInDown bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 rounded-2xl shadow-lg gap-2 p-3 pb-5 duration-300 transition-all">
      <div className="flex flex-row gap-4">
        <img
          // onClick={() => setOpen(!open)}
          src={`http://87.107.54.89:8000${image}`}
          className="w-20 h-20 cursor-pointer p-2 rounded-full"
          alt="Avatar"
        />
        <div className="flex flex-col justify-center">
          <span className="font-bold text-pallate-Dark_Sky_Blue">{name}</span>
          <div className="flex flex-row items-center gap-3">
            <StarRating size={20} defaultRating={rating} />
            <span className="text-xs font-bold text-slate-400 ">{date}</span>
          </div>
        </div>
      </div>
      <span className="text-sm ml-4">{comment}</span>
      <div className="flex flex-row gap-3 mt-2">
        <span className="text-xs ml-8">Helpful?</span>
        <FaRegThumbsUp className="cursor-pointer" />
        <FaRegThumbsDown className="cursor-pointer" />
      </div>
    </div>
  );
}

export default Comment;
