import { useEffect, useRef, useState } from "react";
import logo from "../../../Static/whitelogo.svg";

function ProfileImage() {
  const fileRef = useRef();
  const [imageUrl, setImageUrl] = useState(
    "https://tecdn.b-cdn.net/img/new/avatars/1.webp"
  );

  const handleFileChange = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center gap-2">
      <img
        // onClick={() => setOpen(!open)}
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
        className="flex flex-col text-slate-300 hover:cursor-pointer hover:text-blue-300"
        onClick={() => fileRef.current.click()}
      >
        Set a new profile photo
      </div>
    </div>
  );
}

export default ProfileImage;
