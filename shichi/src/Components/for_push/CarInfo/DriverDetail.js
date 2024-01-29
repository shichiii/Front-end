import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
function DriverDetail({ car }) {
  const notifyfaild = (error) => {
    toast.error(error ? error : " Not Enough Money!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const notify = () => {
    toast.success(" Successful Purchase !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };
  const { id } = useParams();
  console.log("car id1", id);
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const handlestartdate = (event) => {
    const rawDate = event.target.value;
    const dateObject = new Date(rawDate);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    setStartdate(formattedDate);
  };
  const handleenddate = (event) => {
    const rawDate = event.target.value;
    const dateObject = new Date(rawDate);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    setEnddate(formattedDate);
  };
  const token = localStorage.getItem("token");
  const handleBuy = async (token, startdate, enddate) => {
    try {
      const endpoint = "http://87.107.54.89:8000/advertisement/pay/";

      const payload = {
        ad_id: id,
        start_date: startdate,
        end_date: enddate,
      };
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.post(endpoint, payload, { headers });

      console.log(response.data);
      notify();
      // You can do something with the response here
    } catch (error) {
      notifyfaild(error.response.data);
    }
  };

  return (
    <div className="w-full h-auto bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 p-5 rounded-2xl">
      <ToastContainer position="bottom-left" theme="light" pauseOnHover />
      <div className="font-bold text-xl mb-4 text-pallate-Dark_Sky_Blue">
        Pick a Date for Purchase
      </div>
      <div className="mx-auto">
        <form>
          <div className="flex flex-row flex-wrap gap-5 justify-around">
            <div className="w-5/12 flex flex-col gap-3">
              <label className="text-sm">Start Date:</label>
              <input
                type="date"
                min={car.start_date}
                max={enddate || car.end_date}
                onChange={handlestartdate}
                className="rounded-2xl outline-none py-1 px-3 border focus:border-pallate-Dark_Sky_Blue text-pallate-Police_Blue"
              />
            </div>
            <div className="w-5/12 flex flex-col gap-3">
              <label className="text-sm">End Date:</label>
              <input
                type="date"
                min={car.start_date}
                max={car.end_date}
                onChange={handleenddate}
                className="rounded-2xl outline-none py-1 px-3 border focus:border-pallate-Dark_Sky_Blue text-pallate-Police_Blue"
              />
            </div>
            <div className="w-3/12 flex flex-col">
              <button
                type="button"
                onClick={() => handleBuy(token, startdate, enddate)}
                className="p-1 bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 text-white font-mono text-[20px] w-full rounded-[400px] transition-all duration-300 "
              >
                Buy Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DriverDetail;
