function RentalCost() {
  return (
    <div className="bg-slate-300 w-1/3 divide-y divide-stone-400 flex flex-col justify-center items-center p-3 pt-5 rounded">
      <div className="flex flex-col justify-center p-10 gap-8">
        <span className="font-bold text-2xl">£ 109.84</span>
        <span className="">Cost of rental</span>
      </div>
      <div className="flex flex-col text-sm gap-2 p-3">
        <span className="font-bold text-sm text-green-600">Good choice</span>
        <span>
          <span className="text-green-600">✔</span> 68% lower price than the
          average for a Compact car.
        </span>
        <span>
          <span className="text-green-600">✔</span> Most popular fuel policy:
          Full to full
        </span>
        <span>
          <span className="text-green-600">✔</span> Highly-rated supplier: 8.6 /
          10
        </span>
      </div>
    </div>
  );
}

export default RentalCost;
