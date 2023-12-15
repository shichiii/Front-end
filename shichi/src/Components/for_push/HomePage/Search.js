// <<<<<<< feature/v1.0.0/HomePage
import React from "react";
// import Button from "../layout/Button";
import img from "../../../Static/search.svg";
import icon1 from "../../../Static/110.png";
import icon2 from "../../../Static/110.png";
import icon3 from "../../../Static/110.png";
import newsearch from "./newsearch";
const Features = ({ search, setSearch }) => {
  return (
    <div
      id="to-search"
      className="bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal"
    >
      <div className=" min-h-screen flex flex-col justify-center md:px-32 px-5 p-4">
        <div className="flex flex-col md:flex-row items-center space-y-5">
          <div className=" mt-24">
            <img className=" rounded-md" src={img} alt="" />
          </div>
          <div className="w-full py-16  text-white px-4 ">
            <div className="max-w-[1240px] border-2 p-12 border-pallate-Dark_Sky_Blue rounded-2xl mx-auto grid lg:grid-cols-3">
              <div className="lg:col-span-2 my-4">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                  You can search for the car model you want.
                </h1>
                <p>

                  Sign up to our newsletter and stay up to dateCard model or Name.
                </p>
              </div>
              <div className="my-4">
                <div className=" sm:flex-row items-center justify-between w-full">
                  <input
                    className="p-3 flex w-full rounded-md text-black"
                    type="email"
                    placeholder="Enter Car Name"
                  />
                  <button className="bg-pallate-Dark_Sky_Blue text-black font-medium  p-3 flex w-full rounded-md mt-2">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

/*=======
                  Sign up to our newsletter and stay up to dateCard model or
                  Name.
                </p>
              </div>
              
              <newsearch/>
                {/* // =======
// import React, { useState } from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';

// const Search = ({ history }) => {
//   const [carName, setCarName] = useState('');

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://185.157.245.99:8000/advertisement/search/?car_name=${encodeURIComponent(carName)}`);
  
//       if (response.data.length === 0) {
//         alert("No car found");
//       } else {
//         const foundCar = response.data.find((car) => car.car_name === carName);
//         if (foundCar) {
//           history.push('/advertisement', { results: [foundCar] });
//         } else {
//           alert("No car found");
//         }
//       }
//     } catch (error) {
//       console.error('Error occurred:', error);
//     }
//   };

//   return (
//     <div>
//       <div className='w-full py-16 text-white px-4 bg-gradient-to-t from-pallate-Gunmetal via-pallate-Police_Blue to-pallate-Gunmetal'>
//         <div className='max-w-[1240px] border-2 p-12 border-pallate-Dark_Sky_Blue rounded-2xl mx-auto grid lg:grid-cols-3'>
//           <div className='lg:col-span-2 my-4'>
//             <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
//               You can search for the car model you want.
//             </h1>
//             <p>Sign up to our newsletter and stay up to dateCard model or Name.</p>
//           </div>
//           <div className='my-4'>
//             <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
//               <input
//                 className='p-3 flex w-full rounded-md text-black'
//                 type='text'
//                 placeholder='Enter Car Name'
//                 value={carName}
//                 onChange={(e) => setCarName(e.target.value)}
//               />
//               <button
//                 className='bg-pallate-Dark_Sky_Blue text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'
//                 onClick={handleSearch}
//               >
//                 Search
//               </button>
//             </div>
//             <p>
//               We care about the protection of your data. Read our{' '}
//               <span className='text-pallate-Dark_Sky_Blue'>Privacy Policy.</span>
//             </p>
// >>>>>>> Develop */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
{/* // <<<<<<< feature/v1.0.0/HomePage


// Search.propTypes = {
//   history: PropTypes.object.isRequired, // Prop type validation for 'history' object
// };

// export default Search;
// >>>>>>> Develop */
}