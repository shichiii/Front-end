function CostSummary() {
  return (
    <div className="flex flex-col w-2/5">
      <div className="font-bold text-xl mb-4 text-pallate-Dark_Sky_Blue">
        Summary
      </div>
      <div className="p-3 border border-pallate-Dark_Sky_Blue rounded-2xl flex flex-col divide-y divide-stone-200 h-full">
        <div className="flex flex-col justify-center p-3">
          <div className="flex flex-row justify-between items-center">
            <span>Cost of rental</span>
            <span>£ 109.84</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span>+ Full Coverage</span>
            <span>£ 48.47</span>
          </div>
        </div>
        <div className="flex flex-col justify-center p-3">
          <div className="flex flex-row justify-between items-center">
            <span>Total</span>
            <span>£ 158.31</span>
          </div>
        </div>
        <div className="flex flex-col justify-center p-3">
          <div className="flex flex-row justify-between items-center">
            <span>Pay now</span>
            <span>£ 56.13</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span>Pay at pick-up</span>
            <span>£ 102.18</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostSummary;
