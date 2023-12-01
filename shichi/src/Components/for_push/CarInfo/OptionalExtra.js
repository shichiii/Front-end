import { BsPlusLg } from "react-icons/bs";

function OptionalExtra() {
  return (
    <div className="border border-pallate-Dark_Sky_Blue rounded-2xl flex flex-row justify-between items-center p-5 gap-5">
      <div className="flex flex-col">
        <div className="font-bold">Additional driver</div>
        <div className="text-sm">£ 0.00 rental period</div>
      </div>
      <div className="border border-pallate-Dark_Sky_Blue rounded-full">
        <BsPlusLg className="text-pallate-Dark_Sky_Blue hover:cursor-pointer" />
      </div>
    </div>
  );
}

export default OptionalExtra;
