import axios from "axios";
import { useEffect, useState } from "react";
import RateCar from "../CarInfo/RateCar";
import Rate from "../CarInfo/Rate";
import { jwtDecode } from "jwt-decode";

function AddComment({ adv, setRefreshComment }) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [hasRated, setHasRated] = useState(false);

  const userId = jwtDecode(localStorage.getItem("token")).user_id;

  function commentHandler() {
    setIsLoading(true);
    axios
      .post(`http://87.107.105.201:8000/advertisement/create-comment/`, {
        user_id: userId,
        text: comment,
        adv: +adv,
      })
      .then((response) => {
        console.log(response.data);
        setRefreshComment(true);
        setComment("");
        setIsLoading(false);
      });
  }

  function handleRate(rate) {
    setRate(rate);
    axios
      .post(`http://87.107.105.201:8000/advertisement/create-rate/`, {
        user_id: userId,
        rate: rate,
        adv: +adv,
      })
      .then((response) => {
        console.log(response.data);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      });
  }

  useEffect(
    function () {
      axios
        .get(`http://87.107.105.201:8000/advertisement/list-rate`)
        .then((response) => {
          if (
            response.data.find(
              (item) => item.adv === +adv && item.user_id === userId
            )?.rate
          ) {
            setHasRated(true);
          }
        });
    },
    [adv]
  );

  return (
    <div className="flex flex-row justify-between flex-wrap gap-4 p-5 rounded-2xl h-auto bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 w-full">
      <div className="flex flex-col md:w-3/6 w-full">
        <h1 className=" text-pallate-Dark_Sky_Blue font-bold text-xl">
          Add your comment
        </h1>
        <div className="flex flex-col gap-5 w-full mt-3">
          <textarea
            className="rounded-2xl outline-none py-1 px-3 border focus:border-pallate-Dark_Sky_Blue text-pallate-Police_Blue"
            rows={5}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            onClick={commentHandler}
            className="p-1 bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue  text-white font-mono text-[20px]  rounded-[400px] transition-all duration-300 w-3/12 mx-auto"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
      <div className="flex flex-col md:w-2/5 w-full">
        <h1 className=" text-pallate-Dark_Sky_Blue font-bold text-xl">
          Add your rating
        </h1>
        <div className="flex justify-center items-center h-44 flex-col mt-5">
          {hasRated ? (
            <p className="h-6">You have already rated to this car</p>
          ) : (
            <Rate
              className="flex flex-col"
              onSetRating={handleRate}
              messages={["Very Bad", "Bad", "Okay", "Good", "Very Good"]}
              size={36}
            />
          )}
          {showMessage ? (
            <p className="h-6">Your rating was submitted succesfuly!</p>
          ) : (
            <p className="h-6"></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddComment;
