import logo from "../../../Static/whitelogo.svg";

function ProfileImage() {
  return (
    <div className="flex flex-row justify-between items-center w-72 gap-2">
      <img
        // onClick={() => setOpen(!open)}
        src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
        className="bg-pallate-Gunmetal w-40 cursor-pointer p-2 rounded-full shadow-lg"
        alt="Avatar"
      />
      <div className="flex flex-col text-slate-300">
        <span className="font-bold">Hazhir Yousefi</span>
        <span>Tehran, Iran</span>
      </div>
    </div>
  );
}

export default ProfileImage;
