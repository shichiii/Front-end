function RentalCost({ car }) {
  return (
    <div className="bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 shadow-2xl w-1/3 divide-y divide-stone-400 flex flex-col justify-center items-center p-3 pt-5 rounded-2xl">
      <div className="flex flex-col justify-center items-center p-10 gap-8">
        <span className="font-bold text-2xl text-pallate-Dark_Sky_Blue">
          £ {car.price}
        </span>
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
