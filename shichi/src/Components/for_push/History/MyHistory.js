import React, { useEffect,useState } from "react";
import { info } from "./Data";
import { FaImage } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import axios from 'axios';
const MyHistory = () => {
  //delete advertise request
  const deleteAdvertisement = (id) => {
    const token = localStorage.getItem("token");
  
    axios.delete(`http://87.107.105.201:8000/advertisement/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // Handle the successful deletion
      console.log("Advertisement deleted successfully");
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error('Error deleting advertisement:', error);
    });
  };
  const token = localStorage.getItem("token");
//<<<<<<< feature/v1.0.0/overallfix
  const [info,setInfo] = useState([]);
  const [carImageData, setCarImageData] = useState([]);

  const fetchCarImage = async (id) => {
    console.log("enter get image")
    try {
      const response = await axios.get(`http://87.107.105.201:8000/carimage/show/${id}/`);
      console.log("image has been get")
      console.log("Image data:", response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching car image:', error);
      throw error;
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://87.107.105.201:8000/history/customhistories",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data;
        console.log(data);
        setInfo(data);
        console.log("info", info)
        if (data.length > 0) {
          const firstCarImagesArray = data[0].advertisement.car_images;
  
          if (firstCarImagesArray && firstCarImagesArray.length > 0) {
            const firstCarImageId = firstCarImagesArray[0];
            console.log("First car image ID:", firstCarImageId);
  
            if (firstCarImageId !== undefined) {
              const imageResponse = await axios.get(`http://87.107.105.201:8000/carimage/show/${firstCarImageId}/`);
              const carImageData = imageResponse.data;
              console.log("Car image data:", carImageData);
              setCarImageData(carImageData);
            } else {
              console.error('Image ID is undefined in the first item of the "info" array.');
            }
          } else {
            console.error('No images found in the "car_images" array of the first item.');
          }
        } else {
          console.error('The "info" array is empty.');
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  // if (Array.isArray(info) && info.length > 0) {
  //   const firstCarImageId = info[0].car_images ? info[0].car_images[0] : null;
  
  //   if (firstCarImageId !== null) {
  //     fetchCarImage(firstCarImageId)
  //       .then(imageData => {
  //         // Use the image data as needed, e.g., display it on your page
  //         console.log('Image Data:', imageData);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching car image:', error);
  //       });
  //   } else {
  //     console.error('No image ID found in the first item of the "info" array.');
  //   }
  // } else {
  //   console.error('The "info" array is either not defined or empty.');
  // }


//=======
  console.log(token);
  axios.get('http://87.107.105.201:8000/history/customhistories',
  {
    headers: {
      Authorization: `JWT ${token}`,
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    // Handle the response data
    const data = response.data;
    console.log(data);
  })
//>>>>>>> Develop



  return (
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal min-h-[400px]">
      <div className="overflow-hidden rounded-lg p-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-white border-b text-white">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium px-6 py-4 text-left flex items-center"
                      >
                        <FaImage className="m-1" />
                        Car Photo
                      </th>

                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-left "
                      >
                        Car Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-left"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-left"
                      >
                        Start Date
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-left"
                      >
                        End Date
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-left"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium  px-6 py-4 text-right"
                      >
                        Edit or Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {info.map((item, index) => ( 
                      <tr
                        key={index}
                        className="border-b text-white hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 cursor-pointer"
                      >
                      {item.carImageData && item.carImageData.length > 0 ? (
                          <td className="px-6 py-4">
                            <img
                              className="w-96 h-auto"
                              src={carImageData[0].image}
                              alt="Car Image"
                            />
                          </td>
                        ) : (
                          <td className="px-6 py-4">
                            <span>No image available</span>
                          </td>
                        )}
                        <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">
                          {item.advertisement.car_name}
                        </td>
                        <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">
                          <div className="bg-opacity-20 bg-pallate-Dark_Sky_Blue text-center rounded-2xl">
                            {item.advertisement.car_category}
                          </div>
                        </td>
                        <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">
                          {item.advertisement.start_date}
                        </td>
                        <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">
                          {item.advertisement.end_date}
                        </td>{" "}
                        <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">
                          {item.advertisement.price}
                        </td>
                        <td class="px-6 py-4 ">
                          <div class="flex justify-end gap-4">
                            <a x-data="{ tooltip: 'Delete' }" href="#"  onClick={() => deleteAdvertisement(item.id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6 hover:text-red-500 "
                                x-tooltip="tooltip"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                            <a x-data="{ tooltip: 'Edite' }" href="#">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6 hover:text-green-500 "
                                x-tooltip="tooltip"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHistory;
