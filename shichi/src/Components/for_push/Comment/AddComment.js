import axios from "axios";
import { useState } from "react";
import RateCar from "../CarInfo/RateCar";
import Rate from "../CarInfo/Rate";

function AddComment({ adv, setRefreshComment }) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  function commentHandler() {
    setIsLoading(true);
    axios
      .post(`http://185.157.245.99:8000/advertisement/create-comment/`, {
        user_id: 3,
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
      .post(`http://185.157.245.99:8000/advertisement/create-rate/`, {
        user_id: 3,
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

  return (
    <div className="flex flex-row gap-4 p-5 rounded-2xl h-auto bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20  w-[1215px]">
      <div className="flex flex-col w-3/5">
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
      <div className="flex flex-col w-2/5">
        <h1 className=" text-pallate-Dark_Sky_Blue font-bold text-xl">
          Add your rating
        </h1>
        <div className="flex justify-center items-center h-44 flex-col mt-5">
          <Rate
            className="flex flex-col"
            onSetRating={handleRate}
            messages={["Very Bad", "Bad", "Okay", "Good", "Very Good"]}
            size={36}
          />
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
