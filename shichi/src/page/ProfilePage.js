import { useEffect, useState } from "react";
import Navbar from "../Components/for_push/HomePage/NavBar";
import Input from "../Components/for_push/Profile/Input";
import ProfileImage from "../Components/for_push/Profile/ProfileImage";
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

  function editProfileHandler() {
    axios
      .put(`http://185.157.245.99:8000/user/update/${userId.id}/`, {
        title: "Hello World!",
        body: { first_name: firstN, last_name: lastN, email: email },
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal h-screen">
      <Navbar />
      <div className=" mx-auto w-[800px] flex flex-row justify-center items-center mt-10 flex-wrap text-slate-300">
        <div className="w-full">
          <ProfileImage />
        </div>
        <div className="w-full flex flex-row gap-20 items-center justify-center mt-10">
          <Input
            type="text"
            name="fName"
            label="First Name"
            value={firstN}
            setValue={setFirstN}
            disabled={isDisabled}
          />
          <Input
            type="text"
            name="lName"
            label="Last Name"
            value={lastN}
            setValue={setLastN}
            disabled={isDisabled}
          />
        </div>
        <div className="w-full flex flex-row gap-20 items-center justify-center mt-7">
          <Input
            type="email"
            name="email"
            label="Email Address"
            value={email}
            setValue={setEmail}
            disabled={isDisabled}
          />
          <Input
            type="text"
            name="phoneNumber"
            label="Phone Number"
            value={phoneNumber}
            setValue={setPhoneNumber}
            disabled={isDisabled}
          />
        </div>
        <button
          className={`${
            !isDisabled
              ? "bg-pallate-Dark_Sky_Blue text-black"
              : "text-pallate-Dark_Sky_Blue border-pallate-Dark_Sky_Blue border hover:text-black hover:bg-pallate-Dark_Sky_Blue"
          } rounded-2xl font-medium w-[200px] px-6 py-3 mt-16 mx-auto transition-all duration-300`}
          onClick={() => editProfileHandler()}
        >
          {isDisabled ? "Edit Profile" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
