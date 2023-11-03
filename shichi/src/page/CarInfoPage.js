import BookCar from "../Components/for_push/CarInfo/BookCar";
import CarDropOffLocation from "../Components/for_push/CarInfo/CarDropOffLocation";
import CarInfo from "../Components/for_push/CarInfo/CarInfo";
import CarOptionalExtras from "../Components/for_push/CarInfo/CarOptionalExtras";
import CarPickUpLocation from "../Components/for_push/CarInfo/CarPickUpLocation";
import CommentSection from "../Components/for_push/Comment/CommentSection";
import Navbar from "../Components/for_push/HomePage/NavBar";
import IconChat from "../Components/for_push/ChatPage/IconChat";
function CarInfoPage() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal h-full flex justify-center">
        <div className="flex flex-col justify-center items-center p-5 w-[1200px] gap-5">
          <div className="flex flex-row gap-4">
            <CarPickUpLocation />
            <CarDropOffLocation />
          </div>
          <CarInfo />
          <CarOptionalExtras />
          <BookCar />
          <CommentSection />
        </div>
        <IconChat/>
      </div>
    </>
  );
}

export default CarInfoPage;
