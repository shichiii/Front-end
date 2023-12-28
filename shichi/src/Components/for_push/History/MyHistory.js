import React, { useEffect,useState } from "react";
import { FaImage } from "react-icons/fa6";
import axios from 'axios';
import MyAdvertiseContent from './myadvertisepage';
const MyHistory = () => {
  const [advertiseData, setAdvertiseData] = useState([]);
  //get all advertises
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://87.107.105.201:8000/advertisement/list/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAdvertiseData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const token = localStorage.getItem("token");
//<<<<<<< feature/v1.0.0/overallfix
  const [info,setInfo] = useState([]);




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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);




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
  .catch((error) => {
    // Handle any errors that occur during the request
    console.error('cant fetch data', error);
  });

  return (
    <div>
      <MyAdvertiseContent advertiseData={advertiseData} />
    </div>
  );
};

export default MyHistory;
