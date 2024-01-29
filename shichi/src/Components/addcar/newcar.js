import React, { useEffect, useState } from "react";
import Create from "./Create";
import { BsDropletHalf } from "react-icons/bs";
import { BsMapFill, BsCalendar } from "react-icons/bs";
import { Select } from "flowbite-react";
import { BsBusFrontFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { BsSnow3 } from "react-icons/bs";
import { BsDoorOpenFill } from "react-icons/bs";
import { FaChair } from "react-icons/fa";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { fuel, categories, coooler, cityy, colors, gearboxx } from "./Data.js";
const Newcar = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files) {
      // Limit to the first 3 files
      const newImages = Array.from(files).slice(0, 3);

      console.log("Files:", newImages);

      setSelectedImages((prevImages) => [
        ...prevImages.slice(0, 3 - newImages.length),
        ...newImages,
      ]);
    }
  };
  console.log("images", selectedImages);

  const handleDelete = (index) => {
    setSelectedImages((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleDeleteAll = () => {
    setSelectedImages([]);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    selectedImages.forEach((file) => {
      formData.append("files", file);
    });
  };

  // Helper function to convert base64 data URL to a File object
  const dataURLtoFile = (dataURL, filename) => {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const extension = mime.split("/")[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], `${filename}.${extension}`, { type: mime });

    return file;
  };
  const baseURL = "http://87.107.54.89:8000/user/show/";

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

  const [carName, setCarName] = useState("");
  const [carFuel, setCarFuel] = useState("");
  const [gearbox, setgearbox] = useState("");
  const [description, setdescription] = useState("");
  const [cooler, setCooler] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [colorsvalue, setCoolersvalue] = useState("");
  const [category, setCategory] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [seatnumbers, setSeatnumbers] = useState("");
  const [doornumbers, setDoornumbers] = useState("");
  const [price, setPrice] = useState("");
  const [startdatetest, setstartdatetest]  = useState("");
  const [productyear, setProductyear] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const handleProductyear = (event) => {
    const rawDate = event.target.value;
    const dateObject = new Date(rawDate);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    setProductyear(formattedDate);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleDoornumbers = (event) => {
    let value = parseInt(event.target.value, 10);

    if (isNaN(value) || value < 2) {
      value = 2; // حداقل مقدار
    } else if (value > 4) {
      value = 4; // حداکثر مقدار
    }

    setDoornumbers(value.toString());
  };
  const handleWheeldoor = (e) => {
    e.preventDefault();

    let delta = e.deltaY;
    let value = parseInt(doornumbers, 10);

    if (delta > 0) {
      // کاهش مقدار
      value = Math.max(2, value - 1);
    } else {
      // افزایش مقدار
      value = Math.min(4, value + 1);
    }

    setDoornumbers(value.toString());
  };
  const handleSeatnumbers = (event) => {
    // setSeatnumbers(event.target.value);
    let value = parseInt(event.target.value, 10);

    if (isNaN(value) || value < 2) {
      value = 2; // حداقل مقدار
    } else if (value > 15) {
      value = 15; // حداکثر مقدار
    }

    setSeatnumbers(value.toString());   
   
  };
  const handleWheel = (e) => {
    e.preventDefault();

    let delta = e.deltaY;
    let value = parseInt(seatnumbers, 10);

    if (delta > 0) {
      // کاهش مقدار
      value = Math.max(2, value - 1);
    } else {
      // افزایش مقدار
      value = Math.min(15, value + 1);
    }

    setSeatnumbers(value.toString());
  };
  const handlestartdate = (event) => {
    const rawDate = event.target.value;
    
    setstartdatetest(rawDate);
    const dateObject = new Date(rawDate);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    setStartdate(formattedDate);
    
  };
  const handleenddate = (event) => {
    const rawDate = event.target.value;
    const dateObject = new Date(rawDate);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    setEnddate(formattedDate);
  };
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
  const padZero = (number) => {
    return String(number).padStart(2, "0");
  };
  //date format
  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${year}-${padZero(month)}-${padZero(day)}`;
  };
  // location data
  const latitude = localStorage.getItem("latitude");
  const longitude = localStorage.getItem("longitude");
  //handle submit function
  const handleSubmit = async (id) => {
    console.log("enter handlesubmit");
    const token = localStorage.getItem("token");
    try {
      const formattedstartdate = formatDate(startdate);
      const formattedenddate = formatDate(enddate);
      const formData = new FormData();
      formData.append("car_image1", selectedImages[0]);
      formData.append("car_image2", selectedImages[1]);
      formData.append("car_image3", selectedImages[2]);
      formData.append("location_geo_width", latitude);
      formData.append("location_geo_length", longitude);
      formData.append("location_state", cityValue);
      formData.append("start_date", formattedstartdate);
      formData.append("end_date", formattedenddate);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("car_name", carName);
      formData.append("car_color", colorsvalue);
      formData.append("car_produced_date", productyear);
      formData.append("car_seat_count", seatnumbers);
      formData.append("car_door_count", doornumbers);
      formData.append("car_Is_cooler", cooler);
      formData.append("car_gearbox", gearbox);
      formData.append("car_fuel", carFuel);
      formData.append("car_category", category);
      console.log(formData);
      const response = await axios.post(
        "http://87.107.54.89:8000/advertisement/create/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(token);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      console.log("login token", token);
    }
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

  const handleCarNameChange = (event) => {
    setCarName(event.target.value);
  };
  const handleCarFuelChange = (event) => {
    setCarFuel(event.target.value);
  };
  const [img, setImg] = useState(require("../../Static/test.svg").default);
  const currentDate = new Date().toISOString().split("T")[0];
  useEffect(() => {
    
    const handleResize = () => {
      if (window.innerWidth < 1300) {
        setImg(require("../../Static/bg.svg").default);
      } else {
        setImg(require("../../Static/test.svg").default);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height:
          selectedImages && selectedImages.length > 0 ? "1790px" : undefined,
        backgroundImage: `url(${img})`, // Dynamic image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" "
    >
      <div className="bg-pallate-Gunmetal text-pallate-Gunmetal ">
        Please Fill The Form
      </div>

      <section
        style={{ backdropFilter: "blur(8px)" }}
        class="max-w-4xl p-6 mx-auto rounded-3xl shadow-md bg-pallate-Police_Blue bg-opacity-70  mt-20 "
      >
        <h1 class="text-xl font-bold text-white capitalize dark:text-white">
          Please Fill
        </h1>
        <form>
          <div class="grid grid-cols-1 text-white gap-6 mt-4 sm:grid-cols-2">
            <div>
              <div className="flex ">
                {" "}
                <BsBusFrontFill className="mr-1" />
                <label class="text-white dark:text-gray-200">Car Name</label>
              </div>

              <input
                type="text"
                value={carName}
                onChange={handleCarNameChange}
                placeholder="Enter car name"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label class="text-white dark:text-gray-200 ">Car Fuel</label>
              <Select
                id="fuel"
                value={carFuel}
                onChange={handleCarFuelChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Select</option>
                {fuel.map((country) => {
                  return <option>{country.name}</option>;
                })}
              </Select>
            </div>

            <div>
              <div className="flex">
                {" "}
                <BsMapFill className="mr-1 " />
                <label class="text-white dark:text-gray-200">Category</label>
              </div>

              <Select
                id="category"
                value={category}
                onChange={handleCategoryChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Select</option>
                {categories.map((country) => {
                  return <option>{country.name}</option>;
                })}
              </Select>
            </div>

            <div>
              <div className="flex">
                <BsSnow3 className="mr-1 " />
                <label class="text-white dark:text-gray-200">Cooler:</label>
              </div>

              <Select
                id="cooler"
                value={cooler}
                onChange={handleCoolerChange}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                {" "}
                <option>Select</option>
                {coooler.map((country) => {
                  return <option>{country.name}</option>;
                })}
              </Select>
            </div>
            <div>
              <div className="flex">
                <BsDoorOpenFill className="mr-1" />{" "}
                <label class="text-white dark:text-gray-200">
                  Car door Count
                </label>
              </div>

              <input
                type="number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                placeholder=""
                min={2}
                max={4}
                value={doornumbers}
      onChange={handleDoornumbers}
      onWheel={handleWheel}
                onKeyPress={handleKeyPress}
                required
              ></input>
            </div>
            <div>
              <div className="flex">
                <BsGeoAltFill className="mr-1 " />{" "}
                <label class="text-white dark:text-gray-200">City</label>
              </div>

              <select
                value={cityValue}
                onChange={handleCityChange}
                id="city"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Select</option>
                {cityy.map((country) => {
                  return <option>{country.name}</option>;
                })}
              </select>
            </div>
            <div>
              <div className="flex">
                <BsDropletHalf className="mr-1" />{" "}
                <label class="text-white dark:text-gray-200">Colors</label>
              </div>

              <select
                value={colorsvalue}
                onChange={handlecolor}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Select</option>
                {colors.map((country) => {
                  return <option>{country.name}</option>;
                })}
              </select>
            </div>
            <div>
              <div className="flex">
                <BsGearFill className="mr-1" />
                <label class="text-white dark:text-gray-200">Car Gearbox</label>
              </div>

              <select
                value={gearbox}
                onChange={handlegearbox}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>Select</option>
                {gearboxx.map((country) => {
                  return <option>{country.name}</option>;
                })}
              </select>
            </div>
            <div>
              <div className="flex">
                <FaChair />
                <label class="text-white dark:text-gray-200">
                  Car Seat Count
                </label>
              </div>

              <input
                type="number"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                placeholder=""
                min={2}
                max={15}
                onChange={handleSeatnumbers}
                onWheel={handleWheel}
                value={seatnumbers}
                onKeyPress={handleKeyPress}
                required
              ></input>
            </div>

            <div>
              <div className="flex">
                <BsGearFill className="mr-1 " />
                <label className="text-white dark:text-gray-200">
                  Car Product Year
                </label>
              </div>

              <input
              
                placeholder=""
                min={1}
                max={currentDate}
                onChange={handleProductyear}
                onKeyPress={handleKeyPress}
                required
                type="date"
                
                className="block w-full px-4 py-2 mt-2 text-white bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <div className="flex">
                <BsCalendar className="mr-1" />
                <label class="text-white dark:text-gray-200">Start Date</label>
              </div>
              <input
        onChange={handlestartdate}
        type="date"
        min={currentDate}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        placeholder="Select a date"
      />
            </div>
            <div>
              <div className="flex">
                <BsCalendar className="mr-1" />{" "}
                <label class="text-white dark:text-gray-200">End Date</label>
              </div>

              <input   disabled={!startdatetest} 
          onChange={handleenddate}
          type="date"
          min={startdatetest}
          // max={startdate}
          className="block  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          placeholder="Select a date"
        />

            </div>
            <div>
              <label class="text-white dark:text-gray-200">Description</label>
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Write what you think is necessary ..."
                class="block w-full px-4 py-2 mt-2 h-[330px] text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-white">Image</label>
              <div class="mt-1  justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <Create />
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="flex justify-start items-center pl-1 text-white">
              <label className="m-1">Price:</label>
            </div>
            <div className="relative">
              <input
                type="number"
                className="bg-pallate-Gunmetal text-white w-full gap-4 mr-auto ml-auto border-pallate-persian_green disabled:opacity-80 rounded-lg bg-pallate-celeste_light focus:ring-pallate-persian_green focus:border-pallate-persian_green pl-8 p-2"
                placeholder=""
                min={1}
                onChange={handlePrice}
                onKeyPress={handleKeyPress}
                required
              />
            </div>
            <section class="max-w-4xl p-2 mx-auto mt-5 ">
              <div className="container mx-auto h-full flex flex-col justify-center items-center px-10">
                <div className="w-full flex  gap-4">
                  {selectedImages.map((file, index) => (
                    <div
                      key={index}
                      className="relative h-48 mb-3 w-full p-3 rounded-lg bg-cover bg-center"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Selected File ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        onClick={() => handleDelete(index)}
                        className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-gray-700"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex w-full justify-center"></div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-8 w-8 text-white"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="multi-upload-input"
                          className="relative cursor-pointer  rounded-md font-medium text-pallate-Dark_Sky_Blue hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <p className="pl-1 ">Upload 3 files</p>
                        </label>
                      </div>
                      <p className="text-xs text-white">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  type="file"
                  id="multi-upload-input"
                  className="hidden"
                  multiple
                  onChange={handleFileChange}
                />
              </div>
              <div className="preview-container"></div>
            </section>
          </div>
          <div class="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              class="w-full   bg-transparent hover:bg-pallate-Dark_Sky_Blue text-pallate-Dark_Sky_Blue font-semibold duration-300 hover:text-white py-2 px-4 border border-pallate-Dark_Sky_Blue hover:border-transparent rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Newcar;
