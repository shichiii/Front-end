import { useParams } from "react-router-dom";
import BookCar from "../Components/for_push/CarInfo/BookCar";
import CarDropOffLocation from "../Components/for_push/CarInfo/CarDropOffLocation";
import CarInfo from "../Components/for_push/CarInfo/CarInfo";
import CarPickUpLocation from "../Components/for_push/CarInfo/CarPickUpLocation";
import AddComment from "../Components/for_push/Comment/AddComment";
import CommentSection from "../Components/for_push/Comment/CommentSection";
import Navbar from "../Components/for_push/HomePage/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

import IconChat from "../Components/for_push/ChatPage/IconChat";
import { jwtDecode } from "jwt-decode";
import CarImageSlider from "../Components/for_push/CarInfo/CarImageSlider";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
function CarInfoPage() {
  const adv = useParams();
  const [refreshComment, setRefreshComment] = useState(false);
  const [car, setCar] = useState({});
  const userId = jwtDecode(localStorage.getItem("token")).user_id;

  console.log("Hazhir: ", userId);
  console.log("person: ", car.owner_id);

  useEffect(() => {
    axios
      .get("http://87.107.105.201:8000/advertisement/show/" + `${adv.id}/`)
      .then((response) => {
        setCar(response.data);
      });
  }, [adv]);

  useEffect(() => {
    axios
      .post("http://87.107.105.201:8000/chat/chatroom/chatroom/", {
        id: 56,
        name: "56",
        sender: 5,
        reciver: 6,
      })
      .then((response) => {
        console.log("response: ", response);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal h-full flex justify-center">
        <div className="flex flex-col justify-center items-center p-5 w-[1500px] gap-5 font-mono text-white">
          <CarInfo adv={adv.id} car={car} />
          <div className="rounded-2xl h-96 bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 w-full">
            {+car?.location_geo_width && +car?.location_geo_length && (
              <MapContainer
                center={[+car?.location_geo_width, +car?.location_geo_length]}
                zoom={15}
                scrollWheelZoom={true}
                className="h-full w-full"
                style={{ borderRadius: "20px" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
                <Marker
                  position={[
                    +car?.location_geo_width,
                    +car?.location_geo_length,
                  ]}
                ></Marker>
              </MapContainer>
            )}
          </div>
          {car.car_image1 == null &&
          car.car_image2 == null &&
          car.car_image3 == null ? null : (
            <CarImageSlider
              images={[car.car_image1, car.car_image2, car.car_image3]}
            />
          )}
          {/* <CarOptionalExtras /> */}
          {/* {car.owner_id === userId ? null : <BookCar adv={adv.id} />} */}
          <AddComment adv={adv.id} setRefreshComment={setRefreshComment} />
          <CommentSection
            adv={adv.id}
            refreshComment={refreshComment}
            setRefreshComment={setRefreshComment}
          />
        </div>
        <IconChat />
      </div>
    </>
  );
}

export default CarInfoPage;
