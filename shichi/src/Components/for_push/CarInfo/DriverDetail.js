function DriverDetail() {
  return (
    <div className="w-full">
      <div className="font-bold text-xl mb-4 text-pallate-Dark_Sky_Blue">
        Driver details
      </div>
      <div className="mx-auto">
        <form>
          <div className="flex flex-row flex-wrap gap-5 justify-around">
            <div className="w-5/12 flex flex-col gap-3">
              <label className="text-sm">First Name:</label>
              <input className="rounded-2xl outline-none py-1 px-3 border focus:border-pallate-Dark_Sky_Blue text-pallate-Police_Blue" />
            </div>
            <div className="w-5/12 flex flex-col gap-3">
              <label className="text-sm">Last Name:</label>
              <input className="rounded-2xl outline-none py-1 px-3 border focus:border-pallate-Dark_Sky_Blue text-pallate-Police_Blue" />
            </div>
            <div className="w-5/12 flex flex-col gap-3">
              <label className="text-sm">Email Address:</label>
              <input className="rounded-2xl outline-none py-1 px-3 border focus:border-pallate-Dark_Sky_Blue text-pallate-Police_Blue" />
            </div>
            <div className="w-5/12 flex flex-col gap-3">
              <label className="text-sm">PhoneNumber:</label>
              <input className="rounded-2xl outline-none py-1 px-3 border focus:border-pallate-Dark_Sky_Blue text-pallate-Police_Blue" />
            </div>
            <div className="w-3/12 flex flex-col">
              <button className="p-1 bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue duration-300 text-white font-mono text-[20px] w-full  rounded-[400px] transition-all duration-300 ">
                Buy Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DriverDetail;
