import React from 'react';
import { FaImage } from "react-icons/fa6";

const TakeHistory = ({ info }) => {


    return (
        <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal min-h-screen">
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
                            className="text-sm font-medium  px-6 py-4 text-left"
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
                        {info
                          .filter((item) => item.take_or_own === "take")
                          .map((item) => (
                            <tr
                              key={item.id}
                              className="border-b text-white hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-20 cursor-pointer"
                            >
                              <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">
                               
                                 {item.car_image1 && (
                            <img
                              src={item.car_image1}
                              alt="Car"
                              style={{ width: "50px", height: "auto" }}
                            />
                          )}
                              </td>
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
                                  {/* Add your edit/delete buttons here */}
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

export default TakeHistory;