import { useParams } from "react-router-dom";
import BookCar from "../Components/for_push/CarInfo/BookCar";
import CarDropOffLocation from "../Components/for_push/CarInfo/CarDropOffLocation";
import CarInfo from "../Components/for_push/CarInfo/CarInfo";
import CarPickUpLocation from "../Components/for_push/CarInfo/CarPickUpLocation";
import AddComment from "../Components/for_push/Comment/AddComment";
import CommentSection from "../Components/for_push/Comment/CommentSection";
import Navbar from "../Components/for_push/HomePage/NavBar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import IconChat from "../Components/for_push/ChatPage/IconChat";
import { jwtDecode } from "jwt-decode";
import CarImageSlider from "../Components/for_push/CarInfo/CarImageSlider";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import DriverDetail from "../Components/for_push/CarInfo/DriverDetail";
import AuthContext from "../Context/AuthContext";
function CarInfoPage() {
  const adv = useParams();
  const [refreshComment, setRefreshComment] = useState(false);
  const [car, setCar] = useState({});
  const [createdChatRoom, setCreatedChatRoom] = useState(null);
  const userId = jwtDecode(localStorage.getItem("token")).user_id;

  const { chatRoomName, setChatRoomName, chatRoomId, setChatRoomId, senderId } =
    useContext(AuthContext);

  console.log("chatRoomId: ", chatRoomId);

  useEffect(() => {
    axios
      .get("http://87.107.54.89:8000/advertisement/show/" + `${adv.id}/`)
      .then((response) => {
        setCar(response.data);
      });
  }, [adv]);

  useEffect(
    function () {
      setChatRoomName(`${userId}-${adv.id}-${car.owner_id}-${car.car_name}`);
    },
    [car]
  );

  useEffect(
    function () {
      console.log("senderId: ", senderId);
      if (userId && chatRoomName && car.owner_id) {
        axios
          .get("http://87.107.54.89:8000/chat/chatroom/chatroom/")
          .then((response) => {
            setChatRoomId(
              userId !== car.owner_id
                ? response.data.find(
                    (item) =>
                      item.name ===
                        `${userId}-${adv.id}-${car.owner_id}-${car.car_name}` ||
                      item.name ===
                        `${car.owner_id}-${adv.id}-${userId}-${car.car_name}`
                  )?.id
                : response.data.find(
                    (item) =>
                      item.name ===
                        `${senderId}-${adv.id}-${car.owner_id}-${car.car_name}` ||
                      item.name ===
                        `${car.owner_id}-${adv.id}-${senderId}-${car.car_name}`
                  )?.id
            );
          });
      }
    },
    [chatRoomName, chatRoomName, car.owner_id, senderId]
  );

  // useEffect(() => {

  // }, []);

  useEffect(
    function () {
      async function checkRoom() {
        if (userId && car.owner_id && userId !== car.owner_id) {
          await axios
            .get("http://87.107.54.89:8000/chat/chatroom/chatroom/")
            .then(async (response) => {
              const result = await response.data.find(
                (json) =>
                  json.name ===
                  `${userId}-${car.id}-${car.owner_id}-${car.car_name}`
              );

              if (result) {
                await setCreatedChatRoom(true);
              } else {
                await setCreatedChatRoom(false);
              }
            });
          if ((await createdChatRoom) === false) {
            await axios
              .post("http://87.107.54.89:8000/chat/chatroom/chatroom/", {
                name: `${userId}-${car.id}-${car.owner_id}-${car.car_name}`,
                sender: userId,
                reciver: car.owner_id,
              })
              .then(async (response) => {
                console.log("chatRoom Created Succesfuly");
                await setCreatedChatRoom(true);
                await setChatRoomName(
                  `${userId}-${car.id}-${car.owner_id}-${car.car_name}`
                );
              });
          }
        }
      }
      checkRoom();
    },
    [car, createdChatRoom]
  );

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
          {car.owner_id === userId ? null : <DriverDetail />}
          {car.owner_id === userId ? null : (
            <AddComment adv={adv.id} setRefreshComment={setRefreshComment} />
          )}
          <CommentSection
            adv={adv.id}
            refreshComment={refreshComment}
            setRefreshComment={setRefreshComment}
          />
        </div>
        {(userId === car.owner_id && senderId === 0) ||
        chatRoomId === undefined ? null : (
          <IconChat />
        )}
      </div>
    </>
  );
}

export default CarInfoPage;
