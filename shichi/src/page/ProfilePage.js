import { useEffect, useState, useRef } from "react";
import Navbar from "../Components/for_push/HomePage/NavBar";
import Input from "../Components/for_push/Profile/Input";


import ProfileImage from "../Components/for_push/Profile/ProfileImage";

// import Modal from "react-modal";
// import MyComponent from "../Components/addcar/popup"

import Modal from "react-modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// import Modal from "react-modal";
// import MyComponent from "../Components/addcar/popup"


import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../Components/for_push/HomePage/Footer";
import basic from '../Static/profile.svg'
const baseURL = "http://87.107.105.201:8000/user/show/";
const defaultImageUrl = basic; 

//<<<<<<< feature/v1.1.0/CarPage
//const baseURL = "http://87.107.105.201:8000/user/show/";


function ProfilePage() {
  let navigate = useNavigate();
  const fileRef = useRef();
  const [imageUrl, setImageUrl] = useState(defaultImageUrl);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);

    setProfileImage(file);
  };

  const userId = useParams();

  const [profileImage, setProfileImage] = useState(null);
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

      
      setImageUrl(response.data.profile_image || defaultImageUrl);
    });
  }, [userId]);

  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const notify = () => toast.success("Changes have been saved");
 const notifyfaild = () =>{ toast.error(" Faild !" , {
    position:
    toast.POSITION.TOP_RIGHT,})
  };
  
  const setPhoneNumberr = (value) => {
    const formattedPhoneNumber =
      value.length === 1 && value !== "+" ? `+${value}` : value;

    setPhoneNumber(formattedPhoneNumber);
  };

  function editProfileHandler() {
    console.log("hello");
    setIsLoading(true);

    const formData = new FormData();
    formData.append("first_name", firstN);
    formData.append("last_name", lastN);
    formData.append("phone_number", phoneNumber);

    if (profileImage) {
      formData.append("profile_image", profileImage); 
    }

    axios
      .put(`http://87.107.105.201:8000/user/update/${userId.id}/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        notify();
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        setIsLoading(false);
        notifyfaild();
        
      });
  }

  return (
    <div>
      <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal min-h-screen flex flex-col ">
        <ToastContainer position="bottom-left" theme="dark" pauseOnHover />
        <Navbar />
        <div className="mx-auto xl:w-[50%] 2xl:w-[40%] flex flex-col rounded-2xl justify-center p-6 lg:p-10 items-center mt-10 flex-wrap text-slate-300 font-bold font-mono bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20">
          <div className="w-full">
            <div className="flex flex-col justify-between items-center gap-2">
              <img
                src={imageUrl}
                className="bg-pallate-Gunmetal w-40 cursor-pointer p-2 rounded-full shadow-lg"
                alt="Avatar"
              />
              <input
                type="file"
                className="hidden"
                ref={fileRef}
                onChange={(e) => handleFileChange(e)}
              />
              <div
                className="flex flex-col text-primary-600 mt-5 cursor-pointer hover:text-pallate-Dark_Sky_Blue font-bold"
                onClick={() => fileRef.current.click()}
              >
                Set a new profile photo
              </div>
            </div>
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
              setValue={setPhoneNumberr}
              disabled={isDisabled}
              errorMessage={
                !phoneNumber || phoneNumber.length === 13
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
              isLoading ||
              !firstN ||
              !lastN ||
              (!phoneNumber && phoneNumber?.length !== 11)
            }
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>

        <button
          className={` cursor-pointer ${
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

        {/* <MyComponent/> */}

      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
