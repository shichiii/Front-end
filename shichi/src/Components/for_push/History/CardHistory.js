import React, { useState, useEffect } from "react";
import axios from "axios";
import placeholderImage from "../../../Static/110.png";

const CardHistory = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend using Axios
    axios.get("http://185.157.245.99:8000/history/customhistories") // Replace "http://api_endpoint_here" with the actual API endpoint
      .then((response) => {
        setCardData(response.data); // Assuming the response is an array of card objects
        console.log("md",response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="flex flex-col">
      <div className="h-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {cardData.map((card, index) => (
          <div key={index} className="rounded-lg bg-white shadow-lg p-6">
            <img src={card.advertisement.car_images[0].image || placeholderImage} alt={`Card Car ${index}`} className="w-full h-32 object-cover mb-4" />
            <h1 className="text-2xl font-bold mb-2">{card.advertisement.car_name}</h1>
            <p className="text-gray-600 mb-4">{card.advertisement.car_category}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <p>{`From: ${card.advertisement.location.city}, ${card.advertisement.location.state}`}</p>
              <p>{`Date: ${card.advertisement.start_date.split('T')[0]}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHistory;












// import React from "react";
// import Car from "../../../Static/110.png";
// // import cardcar from "";
// const CardHistory = () => {
//   return (
//     <div className="flex flex-col ">


//       {/* <div className="w-full flex h-80">
//         <div className="text-black justify-center items-center w-1/3 flex bg-white cursor-pointer mt-10">
//           <img src={Car} alt="Your Image" class="object-cover " />
//         </div>
//         <div className="text-black justify-center items-center w-1/3 flex bg-white cursor-pointer mt-10 ">
//           <div class="container mx-auto p-4">
//             <div class="text-center">
//               <h1 class="text-3xl font-bold">Name</h1>
//               <p class="text-gray-600">Model</p>
//             </div>

//             <div class="text-center">
//               <p class="text-lg">Text element 1</p>
//               <p class="text-lg">Text element 2</p>
//               <p class="text-lg">Text element 3</p>
//             </div>
//           </div>
//         </div>

//         <div className="text-black justify-center items-center w-1/3 flex bg-white cursor-pointer mt-10">
//           <img src={Car} alt="Your Image" class="object-cover " />
//         </div>
//       </div> */}


//       <div className=" h-auto mt-4 grid grid-cols-5 gap-3 mx-10 ">

//         <div  className="Adcard h-full rounded-lg bg-orange-100/50 shadow-lg shadow-orange-400/80">
//           <div className="grid w-full h-full justify-center content-between f-full gap-3 grid-cols-1 ">
//             <img src={Car} alt="Card Car" class="object-cover"/>
//             <div class="text-center">
//               <h1 class="text-4xl font-bold">Car Name</h1>
//               <p class="text-2xl text-stone-950">Model</p>
//             </div>
//             <div className="grid grid-cols-2">
//               <p class="text-stone-950 text-2xl mx-3 my-3 text-left">from : Example</p>
//               <p class="text-stone-950 text-2xl mx-3 my-3 text-right">Date : yyyy/yy/y</p>
//             </div>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default CardHistory;

