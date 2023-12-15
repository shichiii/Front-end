import React, { useState } from "react";
import Category from "./Category";
import Card from "./Card";
import Search from "../for_push/HomePage/Search";
import Price from "./Price";
const CardApp = () => {
  const [search, setSearch] = useState("");
  const [lowerPrice, setLowerPrice] = useState();
  const [upperPrice, setUpperPrice] = useState();
  const [carCategory, setCarCategory] = useState();
  const [carColor, setCarColor] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [state, setState] = useState();
  const [category, setCategory] = useState();

  return (
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
      <Search search={search} setSearch={setSearch} />{" "}
      <div className="md:flex bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
        <div className="">
          <Category category={category} setCategory={setCategory} />
          <Price
            lowerPrice={lowerPrice}
            upperPrice={upperPrice}
            setLowerPrice={setLowerPrice}
            setUpperPrice={setUpperPrice}
            carCategory={carCategory}
            setCarCategory={setCarCategory}
            carColor={carColor}
            setCarColor={setCarColor}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            state={state}
            setState={setState}
          />
        </div>

        <div className="md:w-2/3 lg:w-3/4 ">
          <Card
            search={search}
            setLowerPrice={setLowerPrice}
            setUpperPrice={setUpperPrice}
            carCategory={carCategory}
            carColor={carColor}
            startDate={startDate}
            endDate={endDate}
            state={state}
            category={category}
          />
        </div>
      </div>
    </div>
  );
};

export default CardApp;
