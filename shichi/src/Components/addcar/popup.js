import React from "react";
import axios from 'axios';
import { useState } from "react";
import Modal from "react-modal";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { detectOverflow } from '@popperjs/core';
import CarLocation from "../../Components/addcar/location";


const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [imgFile, setImgfile] = useState(null);
  const [carname, setCarname] = useState(null);
  const [carcolor, setCarcolor] = useState(null);
  const [title, setTitle] = useState(null);
  const [price,setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [carmodel, setCarmodel] = useState(null);
  const [category, setCategory] = useState(null);
  const handleCarname = (event) => {
    setCarname(event.target.value);
  };
  const handleCarcolor = (event) => {
    setCarcolor(event.target.value);
  };
  const handletitle = (event) => {
    setTitle(event.target.value);
  };
  const handleprice = (event) => {
    setPrice(event.target.value);
  };
  const handledescription = (event) => {
    setDescription(event.target.value);
  };
  const handleCarmodel = (event) => {
    setCarmodel(event.target.value);
  };
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleImage = (event) => {
    setImgfile(event.target.value);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      startDate,
      endDate,
      imgFile,
      carname,
      carcolor,
      title,
      price,
      description,
      carmodel,
      category
  };
  axios.post('185.157.245.99:8000/advertisement/create/', data)
    .then(response => {
      console.log("hi")
      // Handle the server response if needed
    })
    .catch(error => {
      // Handle errors
    });

  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Plus figure */}
      <div
        className="plus-figure"
        onClick={openModal}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
          border: "1px solid #ccc",
          borderRadius: "50%",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        +
      </div>

      {/* Popup */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Popup Modal"
        class = "bg-pallate-Dark_Sky_Blue"
      >
        {/* Contents of the popup */}
        <div class="bg-pallate-Dark_Sky_Blue shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2 text-white">
        <div class="-mx-3 md:flex mb-6 ">

  <div class="md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-image">
      Image
    </label>
    <p>Please select your car image!</p>
    <div class="relative">
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 sr-only" id="grid-image" type="file" onChange={handleImage}/>
      <label for="grid-image" class="absolute inset-0 flex items-center justify-center w-full h-full cursor-pointer">
        <i class="fas fa-upload" ></i> 
      </label>
    </div>
  </div>
</div>

  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
        Car Name 
      </label>
      <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" onChange={handleCarname}/>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Car Color 
      </label>
      <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" onChange={handleCarcolor}/>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Title 
      </label>
      <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" onChange={handletitle}/>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
  <div className="md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="start-date">
    Start Date
  </label>
  <DatePicker
    id="start-date"
    selected={startDate}
    onChange={date => setStartDate(date)}
    className="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-red rounded py-3 px-4 mb-3"
  />
</div>
<div className="md:w-1/2 px-3">
  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="end-date">
    End Date
  </label>
  <DatePicker
    id="end-date"
    selected={endDate}
    onChange={date => setEndDate(date)}
    className="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
  />
</div>
  <div class="md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="end-date">Price</label>
    <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="end-date" type="number" min="0" onChange={handleprice}/>
  </div>
</div>
  <div class="-mx-3 md:flex mb-6">
  <div class="md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="end-date">Description</label>
    <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-5 mb-4" id="end-date" type="text" onChange={handledescription}/>
  </div>
  <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Car Model
      </label>
      <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" onChange={handleCarmodel}/>
    </div>
    <div className="md:w-1/2 px-3">
  <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="category">
    Category
  </label>
  <select className="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-4" id="category" onChange={handleCategory}>
    <option value="">Select a category</option>
    <option value="option1">economy</option>
    <option value="option2"> luxuxry </option>
    <option value="option3">compact</option>
    <option value="option3">offroad</option>
    <option value="option3">hybrid</option>
    <option value="option3">electric</option>
    <option value="option3">truck</option>
    <option value="option3">convertible</option>
    <option value="option3">paasanger van</option>
    <option value="option3">mini van</option>
    <option value="option3">others</option>
    {/* Add more options as needed */}
  </select>
</div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    <CarLocation/>
  </div>
</div>

        {/* Close button */}
        {/* <button onClick={closeModal}>Close</button> */}
        <button onClick={handleSubmit}>Submit</button> 
      </Modal>
    </div>
  );
};
export default MyComponent;