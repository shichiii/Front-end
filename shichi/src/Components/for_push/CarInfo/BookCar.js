import CostSummary from "./CostSummary";
import DriverDetail from "./DriverDetail";

function BookCar() {
  return (
    <div className="flex flex-flex gap-4 p-5 rounded h-96 bg-slate-100  w-[1215px]">
      <CostSummary />
      <DriverDetail />
    </div>
  );
}

export default BookCar;
