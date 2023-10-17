import { BsPlusLg } from "react-icons/bs";

function OptionalExtra() {
  return (
    <div className="border border-stone-500 flex flex-row justify-between items-center p-3 rounded">
      <div className="flex flex-col">
        <div>Additional driver</div>
        <div>£ 0.00 rental period</div>
      </div>
      <div className="border border-stone-400 rounded-full">
        <BsPlusLg />
      </div>
    </div>
  );
}

export default OptionalExtra;
