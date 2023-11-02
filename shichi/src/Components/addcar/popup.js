import React, { useState } from "react";
import Modal from "react-modal";
// import CarLocation from "../addcar/location";

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
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
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 sr-only" id="grid-image" type="file"/>
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
      <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text"/>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Car Color 
      </label>
      <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text"/>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Title 
      </label>
      <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text"/>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
  <div class="md:w-1/2 px-3 mb-6 md:mb-0">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="start-date">Start Date</label>
    <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-red rounded py-3 px-4 mb-3" id="start-date" type="text"/>
  </div>
  <div class="md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="end-date">End Date</label>
    <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="end-date" type="text"/>
  </div>
  <div class="md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="end-date">Price</label>
    <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="end-date" type="number" min="0"/>
  </div>
</div>
  <div class="-mx-3 md:flex mb-6">
  <div class="md:w-1/2 px-3">
    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="end-date">Description</label>
    <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-5 mb-4" id="end-date" type="text"/>
  </div>
  <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
        Car Model
      </label>
      <input class="appearance-none block w-full bg-pallate-Police_Blue opacity-50 text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text"/>
    </div>
  </div>
</div>

        {/* Close button */}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default MyComponent;