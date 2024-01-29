import React from "react";
import { BsCalendar } from "react-icons/bs";

const Price = ({
  lowerPrice,
  setLowerPrice,
  upperPrice,
  setUpperPrice,
  carColor,
  setCarColor,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  state,
  setState,
  handleReset,
}) => {
  return (
    <div>
      <div class="max-w-[1640px] p-3 shadow ml-5 mr-5 rounded-lg bg-pallate-Dark_Sky_Blue bg-opacity-30">
        <div class="relative">
          {/* <div class="absolute flex items-center ml-2 h-full">
	  <svg class="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
	  </svg>
	</div> */}

          {/* <input type="text" placeholder="Search with filters..." class="px-8 py-3 w-full rounded-md bg-pallate-Gunmetal bg-opacity-50 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"/> */}
        </div>

        <div class="flex items-center justify-between mt-4">
          <p class="font-bold text-white text-[30px]">Filters</p>

          <button
            onClick={handleReset}
            class="bg-pallate-Police_Blue hover:bg-pallate-Dark_Sky_Blue text-pallate-Dark_Sky_Blue font-semibold duration-300 hover:text-white py-2 px-4 border border-pallate-Dark_Sky_Blue hover:border-transparent rounded"
          >
            Reset Filter
          </button>
        </div>

        <div>
          <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-4 mt-4">
            <select
              value={carColor}
              onChange={(e) => setCarColor(e.target.value)}
              class="px-4 py-3 w-full rounded-md  border-transparent focus:border-gray-500 bg-pallate-Gunmetal bg-opacity-50 focus:bg-pallate-Gunmetal text-white focus:ring-0 text-sm"
            >
              <option value="">All Colors</option>
              <option value="Gray">Gray</option>
              <option value="Black">Black</option>
              <option value="Navy blue">Navy blue</option>
              <option value="White">White</option>
              <option value="Brown">Brown</option>
              <option value="Others">Others</option>
            </select>

            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              class="px-4 py-3 w-full rounded-md bg-pallate-Gunmetal bg-opacity-50 border-transparent focus:border-gray-500 focus:bg-pallate-Gunmetal text-white focus:ring-0 text-sm"
            >
              <option className="bg-pallate-Gunmetal text-white" value="">
                All Cites
              </option>
              <option className="bg-pallate-Gunmetal text-white" value="Tehran">
                Tehran
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Khorasan-Razavi"
              >
                Khorasan-Razavi
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Isfahan"
              >
                Isfahan
              </option>
              <option className="bg-pallate-Gunmetal text-white" value="Fars">
                Fars
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Khuzestan"
              >
                Khuzestan
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Azarbaijan East"
              >
                Azarbaijan East
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Azarbaijan West"
              >
                Azarbaijan West
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Mazandaran"
              >
                Mazandaran
              </option>
              <option className="bg-pallate-Gunmetal text-white" value="Kerman">
                Kerman
              </option>
              <option className="bg-pallate-Gunmetal text-white" value="Albors">
                Albors
              </option>
              <option className="bg-pallate-Gunmetal text-white" value="Gilan">
                Gilan
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Sistan-and-Baluchestan"
              >
                Sistan-and-Baluchestan
              </option>

              <option
                className="bg-pallate-Gunmetal text-white"
                value="Kermanshah"
              >
                Kermanshah
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Hamedan"
              >
                Hamedan
              </option>

              <option
                className="bg-pallate-Gunmetal text-white"
                value="Lorestan"
              >
                Lorestan
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Golestan"
              >
                Golestan
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Kurdistan"
              >
                Kurdistan
              </option>

              <option
                className="bg-pallate-Gunmetal text-white"
                value="Hormozgan"
              >
                Hormozgan
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Markazi"
              >
                Markazi
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Ardabil"
              >
                Ardabil
              </option>
              <option className="bg-pallate-Gunmetal text-white" value="Qazvin">
                Qazvin
              </option>

              <option className="bg-pallate-Gunmetal text-white" value="Qom">
                Qom
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Bushehr"
              >
                Bushehr
              </option>
              <option className="bg-pallate-Gunmetal text-white" value="Yazd">
                Yazd
              </option>
              <option className="bg-pallate-Gunmetal text-white" value="Zanjan">
                Zanjan
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Chahar-Mahaal-and-Bakhtairi"
              >
                Chahar-Mahaal-and-Bakhtairi
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Khorasan-North"
              >
                Khorasan-North
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Khorasan-South"
              >
                Khorasan-South
              </option>
              <option
                className="bg-pallate-Gunmetal text-white"
                value="Kohgiluyeh-and-Boyer-Ahmad"
              >
                Kohgiluyeh-and-Boyer-Ahmad
              </option>
              <option className="bg-pallate-Gunmetal text-white" value="Semnan">
                Semnan
              </option>
              <option className="bg-pallate-Gunmetal text-white" value="Ilam">
                Ilam
              </option>
            </select>

            <select
              value={lowerPrice}
              onChange={(e) => setLowerPrice(e.target.value)}
              class="px-4 py-3 w-full rounded-md bg-pallate-Gunmetal bg-opacity-50 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value="">Lower Price</option>
              <option value="1000">RM 1000</option>
              <option value="2000">RM 2000</option>
              <option value="3000">RM 3000</option>
              <option value="4000">RM 4000</option>
            </select>
            <select
              value={upperPrice}
              onChange={(e) => setUpperPrice(e.target.value)}
              class="px-4 py-3 w-full rounded-md bg-pallate-Gunmetal bg-opacity-50 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option value="">Upper Price</option>
              <option value="1000">RM 1000</option>
              <option value="2000">RM 2000</option>
              <option value="3000">RM 3000</option>
              <option value="4000">RM 4000</option>
            </select>

            <button className="px-4 py-3 w-full flex  rounded-md bg-pallate-Gunmetal bg-opacity-50 border-transparent focus:border-gray-500 focus:bg-pallate-Gunmetal text-white focus:ring-0 text-sm">
              <BsCalendar className="text-[25px] p-1" />
              start
              <input
                className="bg-transparent bg-opacity-50 ml-4"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                type="date"
              ></input>
            </button>

            <button className="px-4 py-3 w-full flex  rounded-md bg-pallate-Gunmetal bg-opacity-50 border-transparent focus:border-gray-500 focus:bg-pallate-Gunmetal text-white focus:ring-0 text-sm">
              <BsCalendar className="text-[25px] p-1" />
              End
              <input
                className="bg-transparent bg-opacity-50 ml-4"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                type="date"
              ></input>
            </button>
            {/* <button class="bg-pallate-Police_Blue hover:bg-pallate-Dark_Sky_Blue text-pallate-Dark_Sky_Blue font-semibold duration-300 hover:text-white py-2 px-4 border border-pallate-Dark_Sky_Blue hover:border-transparent rounded">
              Submit
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
