import React, { useEffect, useState } from "react";
import Category from "./Category";
import Card from "./Card";
import Search from "../for_push/HomePage/newsearch";
import Price from "./Price";
import axios from "axios";
const CardApp = () => {
  const [search, setSearch] = useState(localStorage.getItem("search"));
  const [lowerPrice, setLowerPrice] = useState();
  const [upperPrice, setUpperPrice] = useState();
  const [carCategory, setCarCategory] = useState();
  const [carColor, setCarColor] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [state, setState] = useState();
  const [searchedCars, setSearchedCars] = useState([]);

  function resetFilters() {
    setSearch("");
    setLowerPrice("");
    setUpperPrice("");
    setCarCategory(" ");
    setCarColor("");
    setStartDate("");
    setEndDate("");
    setState("");
  }

  useEffect(
    function () {
      if (search.length > 2) {
        axios
          .get(
            `http://87.107.105.201:8000/advertisement/search/?search=${search}`
          )
          .then((response) => {
            setSearchedCars(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
    },
    [search]
  );

  return (
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
      <Search search={search} setSearch={setSearch} />{" "}
      <div className="md:flex bg-gradient-to-t p-5 from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
        <div className="">
          <Category category={carCategory} setCategory={setCarCategory} />
          <Price
            lowerPrice={lowerPrice}
            upperPrice={upperPrice}
            setLowerPrice={setLowerPrice}
            setUpperPrice={setUpperPrice}
            carCategory={carCategory}
            carColor={carColor}
            setCarColor={setCarColor}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            state={state}
            setState={setState}
            handleReset={resetFilters}
          />
        </div>

        <div className="md:w-2/3 lg:w-3/4 ">
          <Card
            search={search}
            searchedCars={searchedCars}
            setLowerPrice={setLowerPrice}
            setUpperPrice={setUpperPrice}
            carCategory={carCategory}
            carColor={carColor}
            startDate={startDate}
            endDate={endDate}
            state={state}
          />
        </div>
      </div>
    </div>
  );
};

export default CardApp;
