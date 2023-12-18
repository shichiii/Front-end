import React, { useEffect, useState } from "react";
import Photo from "./photo";
import Create from "./Create";
import { BsDropletHalf } from "react-icons/bs";
import { BsXLg, BsMapFill, BsCalendar } from "react-icons/bs";
import { IoMdBoat } from "react-icons/io";
import { BsFillAirplaneFill } from "react-icons/bs";
import { Button, Card, Select } from "flowbite-react";
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
import Map from "./Create.js";
import { FaChair } from "react-icons/fa";
import { WiCloudUp } from "react-icons/wi";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {
  data,
  fuel,
  categories,
  coooler,
  cityy,
  colors,
  gearboxx,
} from "./Data.js";
const Newcar = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedImages((prevFiles) => [...prevFiles, ...files]);
    const token = localStorage.getItem("token");
    if (files) {
      const newImages = Array.from(files).map((file, index) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve({ image: reader.result, number: index + 1 });
          };
          reader.readAsDataURL(file);
        });
      });
  
      Promise.all(newImages).then((images) => {
        const updatedImages = [
          ...selectedImages,
          ...images.map((img) => ({
            image: img.image,
            number: img.number,
          })),
        ];
  
        if (selectedImages.length === 0) {
          setSelectedImage(updatedImages[0].image);
        }
  
        setSelectedImages(updatedImages);
  
        const formData = new FormData();
        updatedImages.forEach((img) => {
          const file = dataURLtoFile(img.image, `image${img.number}`);
          formData.append("image", file);
          formData.append("index", img.number);
        });
  
        axios
          .post("http://185.157.245.99:8000/carimage/create/", formData, {
            headers: {
              Authorization: `JWT ${token}`,
            },
          })
          .then((response) => {
            console.log("Images uploaded successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error uploading images:", error);
          });
      });
    }
  };

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
      formData.append('files', file);
    });

    // try {
    //   // Make a POST request to your server with the FormData
    //   const response = await axios.post('YOUR_UPLOAD_API_ENDPOINT', formData);

    //   // Handle the response as needed (e.g., show success message)
    //   console.log('Upload successful:', response.data);
    // } catch (error) {
    //   // Handle errors (e.g., show error message)
    //   console.error('Error uploading files:', error);
    // }
  };


  const handleImageChange = (event) => {
    const files = event.target.files;
    const token = localStorage.getItem("token");
    if (files) {
      const newImages = Array.from(files).map((file, index) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve({ image: reader.result, number: index + 1 });
          };
          reader.readAsDataURL(file);
        });
      });
  
      Promise.all(newImages).then((images) => {
        const updatedImages = [
          ...selectedImages,
          ...images.map((img) => ({
            image: img.image,
            number: img.number,
          })),
        ];
  
        if (selectedImages.length === 0) {
          setSelectedImage(updatedImages[0].image);
        }
  
        setSelectedImages(updatedImages);
  
        const formData = new FormData();
        updatedImages.forEach((img) => {
          const file = dataURLtoFile(img.image, `image${img.number}`);
          formData.append("image", file);
          formData.append("index", img.number);
        });
  
        axios
          .post("http://185.157.245.99:8000/carimage/create/", formData, {
            headers: {
              Authorization: `JWT ${token}`,
            },
          })
          .then((response) => {
            console.log("Images uploaded successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error uploading images:", error);
          });
      });
    }
  };
  const handleFormSubmit = () => {
    const token = localStorage.getItem("token");
    // Add any validation or checks here before calling handleSubmit
  
    const files = document.getElementById("fileInput").files;
    if (files.length > 0) {
      handleImageChange({ target: { files } });
    }
  };
  
  
  // Helper function to convert base64 data URL to a File object
  const dataURLtoFile = (dataURL, filename) => {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const extension = mime.split('/')[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const file = new File([u8arr], `${filename}.${extension}`, { type: mime });
  
    return file;
  };
  const baseURL = "http://185.157.245.99:8000/user/show/";

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
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [seatnumbers, setSeatnumbers] = useState('');
  const [doornumbers, setDoornumbers] = useState('');
  const [price, setPrice] = useState('');
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
 

const handlestartdate = (event) => {
  const rawDate = event.target.value;

 
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
    return String(number).padStart(2, '0');
  }
  //date format
  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${year}-${padZero(month)}-${padZero(day)}`;
  }
  // location data
  const latitude = localStorage.getItem('latitude');
  const longitude = localStorage.getItem('longitude');
  //get image data
  const [lastId, setLastId] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://185.157.245.99:8000/carimage/list/');
        const data = await response.json();
        const lastItem = data[data.length - 1]; 

        setLastId(lastItem.id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  //handle submit function
  const [userId, setUserId] = useState(0);
  const handleSubmit = async (id) => {
    const token = localStorage.getItem("token");
    let user = null;
    if(token !== "null" && token !== null){
      user = jwtDecode(token);
      axios.get(baseURL + `${user.user_id}/`).then((response) => {
        setUserId(response.data.id); 
        console.log("owner_id", response.data.id);
        console.log("user id", userId);
    })
    }
    try {
      const formattedstartdate = formatDate(startdate);
      const formattedenddate = formatDate(enddate);
      const formData = new FormData();
      //formData.append('owner_id', userId);
      formData.append('car_images', lastId);
      console.log('id', lastId);
      formData.append('location_geo_width',latitude );
      formData.append('location_geo_length', longitude);
      formData.append('location_state',cityValue);
      formData.append('start_date', formattedstartdate);
      formData.append('end_date', formattedenddate);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('car_name', carName);
      formData.append('car_color', colorsvalue);
      formData.append('car_produced_date', productyear);
      formData.append('car_seat_count', seatnumbers);
      formData.append('car_door_count', doornumbers);
      formData.append('car_Is_cooler', cooler);
      formData.append('car_gearbox', gearbox);
      formData.append('car_fuel', carFuel);
      formData.append('car_category', category);
  
      const response = await axios.post('http://185.157.245.99:8000/advertisement/create/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(token)
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
      console.log('login token',token);
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
    <div style={{
     
      width: "100%",
      backgroundImage: `url(${img})`, // Dynamic image URL
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}   className=" ">
      <div className="bg-pallate-Gunmetal text-pallate-Gunmetal ">
        Please Fill The Form
      </div>

      <section style={{  backdropFilter: "blur(8px)",}}  class="max-w-4xl p-6 mx-auto rounded-3xl shadow-md bg-pallate-Police_Blue bg-opacity-70  mt-20 ">
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
                          onChange={handleDoornumbers}
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
                onKeyPress={handleKeyPress}
                required
              ></input>
            </div>
           
            <div>
              <div className="flex">
              <BsGearFill className="mr-1" /><label
                class="text-white dark:text-gray-200"
                
              >
                Car Product Year
              </label>
                </div>
              
              <input
                 placeholder=""
                 min={1}
                 onChange={handleProductyear} 
                 onKeyPress={handleKeyPress}
                 required
                type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <div className="flex">
              <BsCalendar className="mr-1" /><label
                class="text-white dark:text-gray-200"
              
              >
                Start Date
              </label>
              </div>
              
              <input
               onChange={handlestartdate}
               type="date"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                placeholder="Select a date" />
            </div>
            <div>
              <div className="flex">
              <BsCalendar className="mr-1" /> <label
                class="text-white dark:text-gray-200"
               
              >
             End Date
              </label>
              </div>
             
              <input
                 onChange={handleenddate}
                 type="date"
                 placeholder="Select a date" 
                        
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                class="text-white dark:text-gray-200"
                
              >
                Description
              </label>
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
                {/* <BsCurrencyDollar className="mr-1" /> */}
                <label className="m-1">Price:</label>
              </div>
              <div className="relative">
                {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-white">
                    <BsCurrencyDollar />
                  </span>
                </div> */}
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
            </div>
          <div class="flex justify-end mt-6">
          <button onClick={handleSubmit} class="w-full   bg-transparent hover:bg-pallate-Dark_Sky_Blue text-pallate-Dark_Sky_Blue font-semibold duration-300 hover:text-white py-2 px-4 border border-pallate-Dark_Sky_Blue hover:border-transparent rounded">
                Submit
              </button>
          </div>
        </form>
      </section>

      <section class="max-w-4xl p-6 mx-auto   shadow-md ">
           <div style={{  backdropFilter: "blur(8px)",}} className="w-full rounded-3xl bg-pallate-Police_Blue bg-opacity-70">
      <div className="container mx-auto h-full flex flex-col justify-center items-center p-10">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {selectedImages.map((file, index) => (
            <div key={index} className="relative h-64 mb-3 w-full p-3 rounded-lg bg-cover bg-center">
              <img src={file.image} alt={`Selected File ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center">
         
          {/* <div className="w-4/12 lg:w-3/12 border border-gray-300 rounded-r-md flex items-center justify-between">
            <span className="p-2">{selectedFiles.length === 1 ? '1 file selected' : `${selectedFiles.length} files selected`}</span>
            <button
              onClick={handleDeleteAll}
              className={`p-2 ${selectedFiles.length === 0 ? 'hidden' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-red-700 w-3 h-3" viewBox="0 0 320 512">
                <path
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                />
              </svg>
            </button>
          </div> */}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Image</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-white"
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
               <p className="pl-1 ">Upload a file</p>
                  {/* <input
                     htmlFor="multi-upload-input"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleImageChange}
                  /> */}
                </label>   
                {/* <p className="pl-1 text-white">or drag and drop</p> */}
              </div>
              <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        {/* <button
          id="submit"
          onClick={handleUpload}
          className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
        >
          Upload now
        </button> */}
        <input type="file" id="multi-upload-input" className="hidden" multiple onChange={handleFileChange} />
      </div>
    </div>
      </section>
    </div>
  );
};

export default Newcar;
