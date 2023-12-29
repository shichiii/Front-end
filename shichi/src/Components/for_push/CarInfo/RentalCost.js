function RentalCost({ price }) {
  return (
    <div className="bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 shadow-2xl w-1/3 divide-y divide-stone-400 flex flex-col justify-center items-center p-3 pt-5 rounded-2xl">
      <div className="flex flex-col justify-center items-center p-10 gap-8">
        <span className="font-bold text-2xl text-pallate-Dark_Sky_Blue">
          £ {price}
        </span>
        <span className="">Cost of rental</span>
      </div>
    </div>
  );
}

export default RentalCost;
