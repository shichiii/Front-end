import { useEffect, useState } from "react";
import Navbar from "../Components/for_push/HomePage/NavBar";
import Input from "../Components/for_push/Profile/Input";
import ProfileImage from "../Components/for_push/Profile/ProfileImage";


import Modal from "react-modal";
import MyComponent from "../Components/addcar/popup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Modal from "react-modal";
// import MyComponent from "../Components/addcar/popup"



import axios from "axios";
import { useParams } from "react-router-dom";

const baseURL = "http://185.157.245.99:8000/user/show/";

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
      .put(`http://185.157.245.99:8000/user/update/${userId.id}/`, {
        first_name: firstN,
        last_name: lastN,
        email: email,
      })
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        notify();
      });
  }

  return (
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal h-screen">
      <ToastContainer position="bottom-left" theme="dark" pauseOnHover />
      <Navbar />
      <div className=" mx-auto w-[800px] flex flex-row rounded-2xl justify-center p-10 items-center mt-10 flex-wrap text-slate-300 font-bold font-mono bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20">
        <div className="w-full">
          <ProfileImage />
        </div>
        <div className="w-full flex flex-row gap-10 items-center justify-center mt-10">
          <Input
            type="text"
            name="fName"
            label="First Name"
            value={firstN}
            setValue={setFirstN}
            disabled={isDisabled}
            errorMessage={!firstN ? "first name cannot be empty" : null}
          />
          <Input
            type="text"
            name="lName"
            label="Last Name"
            value={lastN}
            setValue={setLastN}
            disabled={isDisabled}
            errorMessage={!lastN ? "last name cannot be empty" : null}
          />
        </div>
        <div className="w-full flex flex-row gap-20 items-center justify-center mt-4">
          {/* <Input
            type="email"
            name="email"
            label="Email Address"
            value={email}
            setValue={setEmail}
            disabled={isDisabled}
          /> */}
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
                : "phoneNumber is not valid"
            }
          />
        </div>
        <button
          className={`${
            !isLoading
              ? "bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue  text-white"
              : "text-pallate-Dark_Sky_Blue bg-transparent"
          } p-1  font-mono text-[20px] w-1/3  rounded-[400px] font-medium px-6 py-3 mt-12 mx-auto transition-all duration-300`}
          onClick={() => editProfileHandler()}
          disabled={
            isLoading ||
            !firstN ||
            !lastN ||
            (!phoneNumber && phoneNumber?.length !== 11)
              ? true
              : false
          }
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </button>

   


        {/* <MyComponent/> */}


      </div>
      {/* <MyComponent /> */}
    </div>
  );
}

export default ProfilePage;
