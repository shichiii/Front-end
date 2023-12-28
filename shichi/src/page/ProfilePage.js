import { useEffect, useState } from "react";
import Navbar from "../Components/for_push/HomePage/NavBar";
import Input from "../Components/for_push/Profile/Input";
import ProfileImage from "../Components/for_push/Profile/ProfileImage";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from '../Components/for_push/HomePage/Footer'
const baseURL = "http://87.107.105.201:8000/user/show/";

function ProfilePage() {
  const userId = useParams();

  const [profileImage, setProfileImage] = useState();
  const [email, setEmail] = useState("");
  const [firstN, setFirstN] = useState("");
  const [lastN, setLastN] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    axios.get(baseURL + `${userId.id}/`).then((response) => {
      setEmail(response.data.email);
      setFirstN(response.data.first_name);
      setLastN(response.data.last_name);
      setProfileImage(response.data.profile_image);
      setPhoneNumber(response.data.phone_number);
    });
  }, [userId]);

  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const notify = () => toast.success("Changes have been saved");

  function editProfileHandler() {
    setIsLoading(true);
    axios
      .put(`http://87.107.105.201:8000/user/update/${userId.id}/`, {
        first_name: firstN,
        last_name: lastN,
        phone_number: phoneNumber,
      })
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        notify();
      });
  }

  return (
    <div>
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal min-h-screen flex flex-col ">
      <ToastContainer position="bottom-left" theme="dark" pauseOnHover />
      <Navbar />
      <div className="mx-auto  xl:w-[70%] 2xl:w-[60%] flex flex-col rounded-2xl justify-center p-6 lg:p-10 items-center mt-10 flex-wrap text-slate-300 font-bold font-mono bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20">
        <div className="w-full">
          <ProfileImage />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center mt-6 lg:mt-10">
          <Input
            type="text"
            name="fName"
            label="First Name"
            value={firstN}
            setValue={setFirstN}
            disabled={isDisabled}
            errorMessage={!firstN ? "First name cannot be empty" : null}
          />
          <Input
            type="text"
            name="lName"
            label="Last Name"
            value={lastN}
            setValue={setLastN}
            disabled={isDisabled}
            errorMessage={!lastN ? "Last name cannot be empty" : null}
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-center mt-4 lg:mt-6">
          <Input
            type="text"
            name="phoneNumber"
            label="Phone Number"
            value={phoneNumber}
            setValue={setPhoneNumber}
            disabled={isDisabled}
            errorMessage={
              !phoneNumber || phoneNumber.length === 11
                ? null
                : "Phone number is not valid"
            }
          />
        </div>
        <button
          className={`${
            !isLoading
              ? "bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue text-white"
              : "text-pallate-Dark_Sky_Blue bg-transparent"
          } p-1 font-mono text-[18px] lg:text-[20px] w-full lg:w-[50%] rounded-[400px] font-medium px-6 py-3 mt-6 lg:mt-12 mx-auto lg:mx-0 transition-all duration-300`}
          onClick={() => editProfileHandler()}
          disabled={
            isLoading || !firstN || !lastN || (!phoneNumber && phoneNumber?.length !== 11)
          }
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
      </div>
      
    </div><Footer/></div>
  );
}

export default ProfilePage;
