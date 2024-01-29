import { useEffect, useState, useRef } from "react";
import Navbar from "../Components/for_push/HomePage/NavBar";
import Input from "../Components/for_push/Profile/Input";
import ProfileImage from "../Components/for_push/Profile/ProfileImage";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "../Components/for_push/HomePage/Footer";
import basic from "../Static/profilebasic.png";
import { FaTimes } from "react-icons/fa";
const baseURL = "http://87.107.54.89:8000/user/show/";
const defaultImageUrl = basic;

function ProfilePage() {
  let navigate = useNavigate();
  const fileRef = useRef();

  const [isImageChanged, setIsImageChanged] = useState(false);

  // Load last uploaded profile image URL from local storage or use the default
  const lastUploadedProfileImage =
    localStorage.getItem("lastUploadedProfileImage") || defaultImageUrl;

  const [imageUrl, setImageUrl] = useState(lastUploadedProfileImage);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    console.log("Hello: ", file)
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);

    setProfileImage(file);
    setIsImageChanged(true);

    // Save the uploaded image URL to local storage
    localStorage.setItem("lastUploadedProfileImage", reader.result);
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
  const notifyFail = () =>
    toast.error("Failed to save changes. Please try again.");

  const setPhoneNumberHandler = (value) => {
    const formattedPhoneNumber =
      value.length === 1 && value !== "+" ? `+${value}` : value;

    setPhoneNumber(formattedPhoneNumber);
  };

  function editProfileHandler() {
    setIsLoading(true);
  
    const formData = new FormData();
    formData.append("first_name", firstN);
    formData.append("last_name", lastN);
    formData.append("phone_number", phoneNumber);
  
    if (isImageChanged) {
      // If isImageChanged is true, set the profile_image to "110.png"
      // formData.append("profile_image", null); // Set profile_image to null
      formData.append("profile_image", profileImage);
    }
  
    axios
      .put(`http://87.107.54.89:8000/user/update/${userId.id}/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setIsLoading(false);
        console.log("imageeeeeeeeeeeeeee", profileImage)
        notify();
        setIsImageChanged(false); // Reset the flag
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      })
      .catch((error) => {
        console.log("imageeeeeeeeeeeeeee", profileImage)
        console.error("Error updating profile:", error);
        setIsLoading(false);
        notifyFail();
      });
  }
  const handleResetImage = () => {
    convertImageToFile(basic)
      .then((file) => {
        setProfileImage(file);
      })

    // setProfileImage(newFile);
    setIsImageChanged(true); // Set the flag to indicate the image change
    setImageUrl(defaultImageUrl); // Set the image URL to the default "110.png"
  };

  const convertImageToFile = async (imagePath) => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();

      // Create a File object from the blob
      const file = new File([blob], 'imageFileName.jpg', {
        type: 'image/jpeg',
      });

      return file;
    } catch (error) {
      throw error;
    }
  };
    

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
              <button
                        onClick={handleResetImage}
                        className="absolute  bg-red-500 text-white rounded-full cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-gray-700"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
              {/* <button
            className="absolute top-0 right-0 p-1 text-pallate-Dark_Sky_Blue hover:text-pallate-Gunmetal"
            onClick={handleResetImage}
          >
            <FaTimes />
          </button> */}
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
              setValue={setPhoneNumberHandler}
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
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;