import Navbar from "../Components/for_push/HomePage/NavBar";
import Input from "../Components/for_push/Profile/Input";
import ProfileImage from "../Components/for_push/Profile/ProfileImage";

function ProfilePage() {
  return (
    <div className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal h-screen">
      <Navbar />
      <div className=" mx-auto w-[800px] flex flex-row justify-start items-start mt-10 flex-wrap text-slate-300">
        <div className="w-full">
          <ProfileImage />
        </div>
        <div className="w-full flex flex-row gap-20 items-center justify-center mt-10">
          <Input type="text" name="fName" label="First Name" />
          <Input type="text" name="lName" label="Last Name" />
        </div>
        <div className="w-full flex flex-row gap-20 items-center justify-center mt-7">
          <Input type="email" name="email" label="Email Address" />
          <Input type="text" name="phoneNumber" label="Phone Number" />
        </div>
        <div className="w-full flex flex-row gap-20 items-center justify-center mt-7">
          <Input type="text" name="location" label="Location" />
          <Input type="number" name="postalCode" label="Postal Code" />
        </div>
        <button className="bg-pallate-Dark_Sky_Blue text-black rounded-md font-medium w-[200px] px-6 py-3 mt-16 mx-auto">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
