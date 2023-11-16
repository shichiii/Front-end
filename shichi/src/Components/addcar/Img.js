import React, { useState } from "react";
import { Button, Card, Select } from "flowbite-react";
import { BsXLg, BsMapFill, BsCalendar } from "react-icons/bs";
import { IoMdBoat } from "react-icons/io";
import { BsFillAirplaneFill } from "react-icons/bs";
import { BsBusFrontFill } from "react-icons/bs";
import { BsTrainFrontFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsPersonFillCheck } from "react-icons/bs";
import { BsSnow3 } from "react-icons/bs";
import { BsDoorOpenFill } from "react-icons/bs";
import  Map  from "./Create.js";
import { FaChair } from "react-icons/fa";
import { WiCloudUp } from "react-icons/wi";
import axios from 'axios';



import {
  data,
  fuel,
  categories,
  coooler,
  cityy,
  colors,
  gearboxx,
} from "./Data.js";
import Navbar from "../for_push/HomePage/NavBar";
import Footer from "../for_push/HomePage/Footer";
import imgValue from "../../Static/110.png";
import { BsDropletHalf } from "react-icons/bs";
const Img = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const files = event.target.files;

    if (files) {
      const newImages = Array.from(files).map((file) => {
        const reader = new FileReader();
        return new Promise((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(newImages).then((images) => {
        if (selectedImages.length === 0) {
          // If no image is selected, set the first image as the selected image
          setSelectedImage(images[0]);
        }
        setSelectedImages([...selectedImages, ...images]);
      });
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...selectedImages];
    const deletedImageUrl = updatedImages.splice(index, 1)[0];

    // Clear the input field
    document.getElementById("user_avatar").value = "";

    // Update the selected images state
    setSelectedImages(updatedImages);

    // Handle the case where the first image is deleted
    if (index === 0 && updatedImages.length > 0) {
      setSelectedImage(updatedImages[0]);
    } else if (index === 0 && updatedImages.length === 0) {
      setSelectedImage(null);
    }

    // Handle any additional logic related to the deleted image URL
    console.log(`Deleted image URL: ${deletedImageUrl}`);
  };

  const [carName, setCarName] = useState(""); // New state for car name
  const [carFuel, setCarFuel] = useState("");
  const [gearbox, setgearbox] = useState("");
  const [description, setdescription] = useState("");
  const [cooler, setCooler] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [colorsvalue, setCoolersvalue] = useState("");
  const [category, setCategory] = useState(""); // New state for car name
  const [startdate, setStartday] = useState("");
  const [enddate, setEnddate] = useState("");
  const [seatnumbers, setSeatnumbers] = useState('');
  const [doornumbers, setDoornumbers] = useState('');
  const [price, setPrice] = useState('');
  const [productyear, setProductyear] = useState("");

  const [showDescription, setShowDescription] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const handleProductyear = (event) =>
  {
    setProductyear(event.target.value);
  }
  const handlePrice = (event) =>
  {
    setPrice(event.target.value);
  }
  const handleDoornumbers = (event) => {
    setDoornumbers(event.target.value); 
  };
  const handleSeatnumbers = (event) => {
    setSeatnumbers(event.target.value); 
  };
  const handlestartdate = (event) =>
  {
    setStartday(event.target.value);
  }
  const handleenddate = (event) => 
  {
    setEnddate(event.target.value);
  }
  const handleCityChange = (event) => {
    setCityValue(event.target.value);
  };
  const handlegearbox = (event) => {
    setgearbox(event.target.value);
  };
  const handlecolor = (event) => {
    setCoolersvalue(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleCoolerChange = (event) => {
    setCooler(event.target.value);
  };

  const handleTitleClick = () => {
    setShowDescription(!showDescription);
    setScrollEnabled(!showDescription);
  };

  const handleDescriptionChange = (event) => {
    setdescription(event.target.value);
  };


  //handle submit function
  const handleSubmit = async() =>
  {
    try {
      const data = {
        location: "3",
        start_date: startdate,
        end_date: enddate,
        price: price,
        description: description,
        car_images: selectedImages,
        car_name: carName,
        car_color: colorsvalue,
        car_produced_date: productyear,
        car_seat_count: seatnumbers,
        car_door_count: doornumbers,
        car_Is_cooler: cooler,
        car_gearbox: gearbox,
        car_fuel: carFuel,
        car_category: category
      };
    const response = await axios.post('http://185.157.245.99:8000/advertisement/create/', data);
    console.log(response.data);
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error(error);
  }

  }
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

  const handleCarNameChange = (event) => {
    setCarName(event.target.value);
  };
  const handleCarFuelChange = (event) => {
    setCarFuel(event.target.value);
  };

  return (
    <div>
     
      <Navbar />
      <div className="lg:flex h-[1600px]  lg:h-[800px] bg-gradient-to-t from-pallate-Gunmetal  via-pallate-Police_Blue to-pallate-Gunmetal">
        <div className="h-[40rem] lg:w-3/6 flex flex-col ">
          <div
            className={` lg:h-[400px] ${
              selectedImages.length > 1 ? "overflow-y-auto bagho" : ""
            }`}
          >
            {selectedImages.length === 0 ? (
              <img
                className="rounded-xl "
                src={imgValue}
                alt="Default avatar"
              />
            ) : (
              selectedImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    className="rounded-xl"
                    src={image}
                    alt={`Selected avatar ${index + 1}`}
                  />
                  <Button
                    className="rounded-2xl ml-2 bg-gray-500 hover:bg-red-600 absolute top-0 right-0"
                    size="md"
                    onClick={() => handleDeleteImage(index)}
                  >
                    <BsXLg />
                  </Button>
                </div>
              ))
            )}
          </div>

          <div className="mt-10 h-[500px] m-5 p-10 border-2 border-white md:mb-64 rounded-2xl bg-pallate-Dark_Sky_Blue bg-opacity-30 border-pallate-persian_green backdrop-blur-sm">
            <div className="grid grid-cols-1">
              <div className="grid h-[300px] md:grid-cols-1 md:gap-2 sm:grid-cols-1 sm:gap-2">
              <Map />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mx-auto  mio ${
            scrollEnabled ? "overflow-y-auto h-[800px]" : ""
          }`}
        >
          <div className=" mt-24 m-5  rounded-2xl p-10 border-2 border-white  bg-pallate-Dark_Sky_Blue bg-opacity-30  backdrop-blur-sm">
            <div className="grid grid-cols-1">
              <div className="grid md:grid-cols-1 md:gap-2 sm:grid-cols-1 sm:gap-2">
                <div className="grid gap-10 p-2 justify-center justify-items-center ">
                  <div className="flex justify-start items-center">
                  
                    <input
                    
                      accept="image/*"
                      className="block w-full text-sm rounded-md border cursor-pointer"
                      id="user_avatar"
                      type="file"
                      onChange={handleImageChange}
                      multiple // اضافه کردن این ویژگی به این اجازه می‌دهد که چندین فایل انتخاب کنید
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4  mr-auto ml-auto">
                  <div className="grid grid-cols-2 md:gap-5 gap-2">
                    <div className=" ">
                      <div className="flex justify-start items-center pl-1 text-white">
                        <BsBusFrontFill className="mr-1" />
                        <label className="m-1">Car Name:</label>
                      </div>
                      <div className="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span class="text-pallate-persian_green"></span>
                        </div>
                        <input
                          class=" w-full   gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green pl-8 p-2 "
                          type="text"
                          value={carName}
                          onChange={handleCarNameChange}
                          placeholder="Enter car name"
                        ></input>
                      </div>
                      <div className="flex justify-start items-center pl-1 text-white">
                        <label className="m-1">Car Fuel:</label>
                      </div>
                      <div className="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span class="text-pallate-persian_green">
                            <BsBusFrontFill />
                          </span>
                        </div>

                        <Select
                          id="fuel"
                          class="w-full  p-2 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                          value={carFuel}
                          onChange={handleCarFuelChange}
                        >
                          <option>Select</option>
                          {fuel.map((country) => {
                            return <option>{country.name}</option>;
                          })}
                        </Select>
                      </div>

                      <div className="flex justify-start items-center pl-1 text-white">
                        <BsMapFill className="mr-1 " />
                        <label className="m-1">Category:</label>
                      </div>
                      <Select
                        id="category"
                        class="w-full  p-2 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                        value={category}
                        onChange={handleCategoryChange}
                      >
                        <option>Select</option>
                        {categories.map((country) => {
                          return <option>{country.name}</option>;
                        })}
                      </Select>
                      <div className="flex justify-start items-center pl-1 text-white">
                        <BsSnow3 className="mr-1 " />
                        <label className="m-1">Cooler:</label>
                      </div>
                      <Select
                        id="cooler"
                        class="w-full p-2 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                        value={cooler}
                        onChange={handleCoolerChange}
                      >
                        <option>Select</option>
                        {coooler.map((country) => {
                          return <option>{country.name}</option>;
                        })}
                      </Select>
                      <div className="flex justify-start items-center pl-1 text-white">
                        <BsDoorOpenFill className="mr-1" />{" "}
                        <label className="m-1">Car door Count:</label>
                      </div>
                      <div className="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span class="text-pallate-persian_green"></span>
                        </div>
                        <input
                          type="number"
                          id="visitors"
                          class=" w-full  gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green pl-8 p-2 "
                          placeholder=""
                          min={1}
                          onChange={handleDoornumbers}
                          onKeyPress={handleKeyPress}
                          required
                        ></input>
                      </div>
                    </div>

                    <div className="">
                      <div className="flex justify-start items-center pl-1 text-white">
                        <BsGeoAltFill className="mr-1 " />
                        <label className="m-1">City:</label>
                      </div>
                      <Select
                        id="city"
                        class="w-full  p-2 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                        value={cityValue}
                        onChange={handleCityChange}
                      >
                        <option>Select</option>
                        {cityy.map((country) => {
                          return <option>{country.name}</option>;
                        })}
                      </Select>

                      <div className="flex justify-start items-center pl-1 m-1 text-white">
                        <BsDropletHalf className="mr-1" /> Colors:
                      </div>
                      <Select
                        class="w-full  p-2 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                        value={colorsvalue}
                        onChange={handlecolor}
                      >
                        <option>Select</option>
                        {colors.map((country) => {
                          return <option>{country.name}</option>;
                        })}
                      </Select>

                      <div className="flex m-1 justify-start items-center pl-1 text-white">
                        <BsGearFill className="mr-1" /> Car Gearbox:
                      </div>
                      <Select
                        class="w-full  p-2 border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green"
                        value={gearbox}
                        onChange={handlegearbox}
                      >
                        <option>Select</option>
                        {gearboxx.map((country) => {
                          return <option>{country.name}</option>;
                        })}
                      </Select>
                      <div className="flex justify-start items-center pl-1 text-white">
                        <FaChair />
                        <label className="m-1">Car Seat Count:</label>
                      </div>
                      <div className="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span class="text-pallate-persian_green"></span>
                        </div>
                        <input
                          type="number"
                          id="visitors"
                          class=" w-full  gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green pl-8 p-2 "
                          placeholder=""
                          min={1}
                          onChange={handleSeatnumbers}
                          onKeyPress={handleKeyPress}
                          required
                        ></input>
                      </div>
                      <div className="flex justify-start items-center pl-1 text-white">
                        <BsGearFill className="mr-1" />
                        <label className="m-1">Car Product Year:</label>
                      </div>
                      <div className="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <span class="text-pallate-persian_green"></span>
                        </div>
                        <input
                          type="date"
                          id="visitors"
                          class=" w-full  gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green pl-8 p-2 "
                          placeholder=""
                          min={1}
                          onChange={handleProductyear} 
                          onKeyPress={handleKeyPress}
                          required
                        ></input>
                      </div>
                    </div>

                    <div className="">
                      <div className="flex justify-start items-center pl-1 text-white">
                        <BsCalendar className="mr-1" />
                        <label className="m-1">Departure Date:</label>
                      </div>
                      <div
                        class="relative mb-3"
                        id="datepicker-disable-past"
                        data-te-input-wrapper-init>
                        <input
                        onClick={handlestartdate}
                          type="date"
                          class="peer block min-h-[auto] w-full bg-white rounded-lg border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          placeholder="Select a date" />

                      </div>
                    </div>
                    <div className="">
                      <div className="flex justify-start items-center pl-1 text-white">
                        <BsCalendar className="mr-1" />
                        <label className="m-1">Return Date:</label>
                        
                      </div>                      
                      <div
                        class="relative mb-3"
                        id="datepicker-disable-past"
                        data-te-input-wrapper-init>
                        <input
                        onClick={handleenddate}
                          type="date"
                          class="peer block min-h-[auto] w-full bg-white rounded-lg border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          placeholder="Select a date" />
                        
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <div className="flex justify-start items-center pl-1 text-white">
                <BsCurrencyDollar className="mr-1" />
                <label className="m-1">Price:</label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-pallate-persian_green">
                    <BsCurrencyDollar />
                  </span>
                </div>
                <input
                  type="number"
                  id="visitors"
                  className="w-full gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green pl-8 p-2"
                  placeholder=""
                  min={1}
                  onChange={handlePrice}
                  onKeyPress={handleKeyPress}
                  required
                />
              </div>
            </div>

            <div className="w-full ">
              <div
                className="flex justify-start items-center pl-1 text-white cursor-pointer"
                onClick={handleTitleClick}
              >
                <BsMapFill className="mr-1 " />
                <label className="m-1">Description: click here to open and close</label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-pallate-persian_green"></span>
                </div>
                <textarea
                  className={`h-40 md:h-60 w-full gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green pl-8 p-2 resize-none ${
                    showDescription ? "" : "hidden"
                  }`}
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Write what you think is necessary ..."
                ></textarea>
              </div>
            </div>
            <div className="p-2">
              {/* <Button className="w-full mr-auto ml-auto md:w-80  rounded-xl  bg-pallate-persian_green text-pallate-persian_green hover:bg-pallate-blue_munsell">
                Create Trip
              </Button> */}
              <button onClick={handleSubmit} class="w-full   bg-transparent hover:bg-pallate-Dark_Sky_Blue text-pallate-Dark_Sky_Blue font-semibold duration-300 hover:text-white py-2 px-4 border border-pallate-Dark_Sky_Blue hover:border-transparent rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Img;
