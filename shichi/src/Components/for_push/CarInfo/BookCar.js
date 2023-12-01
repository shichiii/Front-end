import CostSummary from "./CostSummary";
import DriverDetail from "./DriverDetail";

function BookCar() {
  return (
    <div className="flex flex-flex gap-4 p-5 rounded-2xl h-80 bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20  w-[1215px] ">
      {/* <CostSummary /> */}
      <DriverDetail />
    </div>
  );
}

export default BookCar;
