import React from "react";
import { useNavigate } from "react-router-dom";
import notfoundJson from "../../../../Static/404.svg"
export default function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="test md:flex block justify-center items-center w-screen h-screen bg-cover overflow-auto dark:bg-gray-900 dark:text-gray-100 text-white">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img src={notfoundJson} height={400} width={400} />
         
          <p className="mt-4 mb-8 dark:text-gray-400 font-bold">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
        <button
            className=" w-full my-6 py-3 bg-pallate-celeste/[0.4]   hover:scale-y-105  hover:text-pallate-Dark_Sky_Blue hover:bg-pallate-Dark_Sky_Blue hover:bg-opacity-10 rounded-xl font-blod text-white "
          onClick={()=> navigate("/home")}
          >  
            Back to Homepage
        </button>
        </div>
      </div>
    </section>
  );
}

