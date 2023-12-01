import OptionalExtra from "./OptionalExtra";

function CarOptionalExtras() {
  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl h-72 bg-slate-100 w-[1215px]">
      <div className="font-bold text-xl">Optional extras</div>
      <div className="flex flex-row justify-center items-center gap-10">
        <OptionalExtra />
        <OptionalExtra />
        <OptionalExtra />
        <OptionalExtra />
      </div>
      {/* <div className="text-blue-400">Show more</div> */}
      <div className="text-xs mt-10">
        Please note that prices and availability of optional extras are fully
        controlled by the rental supplier and that prices are subject to change.
        Those listed here are to be used as a guide only.
      </div>
    </div>
  );
}

export default CarOptionalExtras;
