import React from "react";
import { categories } from "./Data.js";

const Category = ({ category, setCategory }) => {
  // Retrieve the selected category from local storage
  const selectedCategory = localStorage.getItem("selectedCategory");

  // Set the category initially to the value from local storage
  React.useEffect(() => {
    setCategory(selectedCategory || ""); // If not in local storage, set it to an empty string or the default value you prefer
  }, [setCategory, selectedCategory]);

  return (
    <div className="max-w-[1640px] px-4">
      <h1 className="text-pallate-Dark_Sky_Blue border-2 border-pallate-Dark_Sky_Blue p-3 rounded-md font-bold text-4xl text-center">
        Categories
      </h1>
      {/* Categories */}
      <div className="grid gap-6 py-6">
        <div className="md:max-h-[300px] max-h-[200px] overflow-y-auto w-full ">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`${
                category === item.name || selectedCategory === item.name
                  ? "bg-pallate-Ming"
                  : "bg-pallate-Dark_Sky_Blue"
              } bg-opacity-30  rounded-lg p-4 m-4 flex justify-between items-center cursor-pointer hover:bg-pallate-Ming`}
              onClick={() => {
                setCategory(item.name);
                // Save the selected category to local storage on click
                localStorage.setItem("selectedCategory", item.name);
              }}
            >
              <h2 className="font-bold sm:text-xl">{item.lable}</h2>
              <img src={item.image} alt={item.name} className="w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
