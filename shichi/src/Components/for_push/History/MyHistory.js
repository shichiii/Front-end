import React, { useEffect, useState } from "react";
import { FaImage } from "react-icons/fa6";
import axios from "axios";
import MyAdvertiseContent from "./myadvertisepage";
import TakeHistory from "./takehistory";
import RentalHistory from "./rentalhistory";
const MyHistory = () => {
  const [advertiseData, setAdvertiseData] = useState([]);
  //get all advertises
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://87.107.54.89:8000/advertisement/myadvertisement/?ordering=-id', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAdvertiseData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //<<<<<<< feature/v1.0.0/overallfix
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://87.107.54.89:8000/history/customhistories",
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
        const data = response.data;
        console.log(data);
        setInfo(data);
        console.log("info", info);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <MyAdvertiseContent advertiseData={advertiseData} />
      {/* <TakeHistory info={info}/>
      <RentalHistory info={info}/>  */}
    </div>
  );
};

export default MyHistory;
