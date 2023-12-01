import React from "react";
import Category from "./Category";
import Card from "./Card";
import Search from "../for_push/HomePage/Search";
import Price from "./Price";
const CardApp = () => {
  return (
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
      <Search />{" "}
      <div className="md:flex bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
        <div className="">
          <Category /> 
          <Price />
        </div>

        <div className="md:w-2/3 lg:w-3/4 ">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CardApp;
