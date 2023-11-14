import React from "react";
import { Button, Card, Select } from "flowbite-react";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { BsXLg, BsMapFill, BsCalendar } from "react-icons/bs";

import imgValue from '../../Static/110.png'
import { IoMdBoat } from "react-icons/io";
import { BsFillAirplaneFill } from "react-icons/bs";
import { BsBusFrontFill } from "react-icons/bs";
import { BsTrainFrontFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsPersonFillCheck } from "react-icons/bs";
import {data} from './Data.js'
const CreateCard = ({ items }) => {
  const [countryValue, setCountryValue] = React.useState("");
  const [countryDisValue, setCountryDisValue] = React.useState("");
  const [organizationValue, setOrganizationValue] = React.useState("");
  const [tourleaderValue, setTourleaderValue] = React.useState("");
  const [cityValue, setCityValue] = React.useState("");
  const [cityDisValue, setCityDisValue] = React.useState("");
  const [departureValue, setdepartureValue] = React.useState("");
  const [returnValue, setreturnValue] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState(new Date());
  const [returnDate, setReturnDate] = React.useState(new Date());
  const [showfiled, setShowFileds] = React.useState(false);
  const handleCountryDisChange = (event) => {
    console.log(event.target.value);
    setCountryDisValue(event.target.value);
  };
  const handleCityChange = (event) => {
    setCityValue(event.target.value);
  };
  const handleCityDisChange = (event) => {
    setCityDisValue(event.target.value);
  };
  const handelorgvalue = (event) => {
    setOrganizationValue(event.target.value);
  };
  const handeltourleadervalue = (event) => {
    setTourleaderValue(event.target.value);
  };
  const handelshowfileds = (event) => {
    setShowFileds(event.target.value);
  };
  

  

  const departureDateHandler = (selectedDate) => {
    setDepartureDate(selectedDate);
  };

  const returnDateHandler = (selectedDate) => {
    setReturnDate(selectedDate);
  };

  function handleKeyPress(event) {
    const charCode = event.which ? event.which : event.keyCode;
    const input = event.target;
    if (
      charCode === 45 ||
      (charCode === 48 && input.value.length === 0) ||
      charCode === 101 ||
      charCode === 46
    ) {
      event.preventDefault();
    }
  }

  const handleCountryChange = (event) => {
    setCountryValue(event.target.value);
  };

  const handledepartureChange = (event) => {
    setdepartureValue(event.target.value);
  };
  const handlereturnChange = (event) => {
    setreturnValue(event.target.value);
  };
  return (
    <div className="test6 grid grid-cols-1 gap-0 no-repeat  bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal">
      <div className=" grid justify-center items-center w-full">
        <Card className=" mt-24 m-5 mb-64 rounded-2xl bg-pallate-Dark_Sky_Blue bg-opacity-30 border-pallate-persian_green backdrop-blur-sm">
          <div className="grid grid-cols-1">
            <div className="grid md:grid-cols-1 md:gap-2 sm:grid-cols-1 sm:gap-2">
              <div className="grid gap-10 p-2 justify-center justify-items-center ">
                
                <div className="flex justify-start items-center">
                  <input
                    accept="image/*"
                    class="block w-full  text-sm rounded-md border cursor-pointer  "
                    id="user_avatar"
                    type="file"
                  />
                  <Button
                    className="rounded-2xl ml-2 bg-gray-500 hover:bg-red-600"
                    size="md"
                  >
                    <BsXLg />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 p-4 mr-auto ml-auto">
                <div className="grid grid-cols-2 md:gap-5 gap-2">
                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsMapFill className="mr-1" />
                      <label>Country:</label>
                    </div>
                    <Select
                      id="country"
                      class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={countryValue}
                      onChange={handleCountryChange}
                    >
                      <option>Select</option>
                      {data.map((country) => {
                        return <option>{country.name}</option>;
                      })}
                    </Select>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsMapFill className="mr-1" />
                      <label>City:</label>
                    </div>
              
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <label>Departure: ( </label>
                      <BsFillAirplaneFill />
                      <label>,</label>
                      <IoMdBoat />
                      <label>,</label>
                      <BsBusFrontFill />
                      <label>,</label>
                      <BsTrainFrontFill />
                      <label>)</label>
                    </div>
                    <Select
                      class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={departureValue}
                      onChange={handledepartureChange}
                    >
                      <option>Select</option>
                      {data
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((x) => {
                          return <option>{x.name}</option>;
                        })}
                    </Select>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <label>Return: ( </label>
                      <BsFillAirplaneFill />
                      <label>,</label>
                      <IoMdBoat />
                      <label>,</label>
                      <BsBusFrontFill />
                      <label>,</label>
                      <BsTrainFrontFill />
                      <label>)</label>
                    </div>
                    <Select
                      class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={returnValue}
                      onChange={handlereturnChange}
                    >
                      <option>Select</option>
                      {data
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((x) => {
                          return <option>{x.name}</option>;
                        })}
                    </Select>
                  </div>
                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsCalendar className="mr-1" />
                      <label>Departure Date:</label>
                    </div>
                    {/* <DatePicker
                      selected={departureDate}
                      onChange={(date) => departureDateHandler(date)}
                      showMonthDropdown
                      showYearDropdown
                      minDate={new Date()}
                      dropdownMode="select"
                      className="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                    /> */}
                  </div>
                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsCalendar className="mr-1" />
                      <label>Return Date:</label>
                    </div>
                    {/* <DatePicker
                      onChange={(date) => returnDateHandler(date)}
                      selected={returnDate}
                      showMonthDropdown
                      showYearDropdown
                      minDate={departureDate}
                      dropdownMode="select"
                      className="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                    /> */}
                  </div>


                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsPersonFillCheck size={16} className="mr-1" />
                      <label>Organization:</label>
                    </div>
                    <Select
                      id="org"
                      class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={organizationValue}
                      onChange={handelorgvalue}
                    >
                      <option>Select</option>
                      {data.map((x) => {
                        return <option>{x.name}</option>;
                      })}
                    </Select>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <BsFillPeopleFill size={16} className="mr-1" />
                      <label>TourLeader Name:</label>
                    </div>
                    <Select
                      class="w-full md:w-80 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                      value={tourleaderValue}
                      onChange={handeltourleadervalue}
                    >
                      <option>Select</option>
                      {organizationValue === ("Select" || "" || null || undefined)
                        ? 1
                        : data.find((x) => x.name === organizationValue) ===
                          undefined
                        ? 1
                        : data
                            .find((x) => x.name === organizationValue)
                            .Lname.sort((c) => c)
                            .map((y) => {
                              return <option>{y}</option>;
                            })}
                    </Select>
                  </div>
                  <div className="md:w-40 w-full">
                    <div className="flex justify-start items-center pl-1 text-gray-700">
                      <label>Capacity:</label>
                    </div>
                    <div className="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span class="text-pallate-persian_green">
                          <BsFillCartPlusFill />
                        </span>
                      </div>
                      <input
                        type="number"
                        id="visitors"
                        class=" w-full md:w-80 gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green pl-8 p-2 "
                        placeholder=""
                        min={1}
                        onKeyPress={handleKeyPress}
                        required
                      ></input>
                    </div>
                  </div>
                  <div className="grid justify-start items-center pl-1 text-gray-700">
                    <label>Price:</label>
                    <div className="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span class="text-pallate-persian_green">
                          <BsCurrencyDollar />
                        </span>
                      </div>
                      <input
                        type="number"
                        id="visitors"
                        class=" w-full md:w-80 gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green pl-8 p-2"
                        placeholder=""
                        min={1}
                        onKeyPress={handleKeyPress}
                        required
                      ></input>
                    </div>
                  </div>
               
                 
                  
                 
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center pl-8 pr-8">
              <div className="grid grid-cols-2 gap-2"></div>
            </div>
          </div>
          <div className="p-2">
            <Button className="w-full mr-auto ml-auto md:w-80  rounded-xl  bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell">
              Create Trip
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreateCard;
