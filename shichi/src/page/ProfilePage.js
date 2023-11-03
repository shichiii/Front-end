import { useEffect, useState } from "react";
import Navbar from "../Components/for_push/HomePage/NavBar";
import Input from "../Components/for_push/Profile/Input";
import ProfileImage from "../Components/for_push/Profile/ProfileImage";
import axios from "axios";

const baseURL = "http://185.157.245.99:8000/user/show/";

function ProfilePage() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get(baseURL + "3/").then((response) => {
      setProfile(response.data);
    });
  }, []);
  const [isDisabled, setIsDisabled] = useState(true);

  console.log("profile: ", profile);

  useEffect(function () {}, []);

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
            value="Hazhir"
            disabled={isDisabled}
          />
          <Input
            type="text"
            name="lName"
            label="Last Name"
            value="Yousefi"
            disabled={isDisabled}
          />
        </div>
        <div className="w-full flex flex-row gap-20 items-center justify-center mt-7">
          <Input
            type="email"
            name="email"
            label="Email Address"
            value="HazhirYousefi2002@gmail.com"
            disabled={isDisabled}
          />
          <Input
            type="text"
            name="phoneNumber"
            label="Phone Number"
            value="09933380344"
            disabled={isDisabled}
          />
        </div>
        <button
          className={`${
            !isDisabled
              ? "bg-pallate-Dark_Sky_Blue text-black"
              : "text-pallate-Dark_Sky_Blue border-pallate-Dark_Sky_Blue border hover:text-black hover:bg-pallate-Dark_Sky_Blue"
          } rounded-2xl font-medium w-[200px] px-6 py-3 mt-16 mx-auto transition-all duration-300`}
          onClick={() => setIsDisabled(!isDisabled)}
        >
          {isDisabled ? "Edit Profile" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
