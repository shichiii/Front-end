import { useParams } from "react-router-dom";
import BookCar from "../Components/for_push/CarInfo/BookCar";
import CarDropOffLocation from "../Components/for_push/CarInfo/CarDropOffLocation";
import CarInfo from "../Components/for_push/CarInfo/CarInfo";
import CarOptionalExtras from "../Components/for_push/CarInfo/CarOptionalExtras";
import CarPickUpLocation from "../Components/for_push/CarInfo/CarPickUpLocation";
import AddComment from "../Components/for_push/Comment/AddComment";
import CommentSection from "../Components/for_push/Comment/CommentSection";
import Navbar from "../Components/for_push/HomePage/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

import IconChat from "../Components/for_push/ChatPage/IconChat";
function CarInfoPage() {
  const adv = useParams();
  const [refreshComment, setRefreshComment] = useState(false);
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get("http://185.157.245.99:8000/advertisement/show/" + `${adv.id}/`)
      .then((response) => {
        setCar(response.data);
      });
  }, [adv]);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal h-full flex justify-center">
        <div className="flex flex-col justify-center items-center p-5 w-[1200px] gap-5">
          <div className="flex flex-row gap-4">
            <CarPickUpLocation car={car} />
            <CarDropOffLocation car={car} />
          </div>
          <CarInfo adv={adv.id} car={car} />
          {/* <CarOptionalExtras /> */}
          <BookCar adv={adv.id} />
          <AddComment adv={adv.id} setRefreshComment={setRefreshComment} />
          <CommentSection
            adv={adv.id}
            refreshComment={refreshComment}
            setRefreshComment={setRefreshComment}
          />
        </div>
        <IconChat/>
      </div>
    </>
  );
}

export default CarInfoPage;
