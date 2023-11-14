// ImageItem.js
import React from "react";
import { Button } from "flowbite-react";
import { BsXLg } from "react-icons/bs";

const ImageItem = ({ image, onRemove }) => {
  return (
    <div className="mb-2">
      <img className="rounded-xl" src={image} alt="Selected avatar" />
      <Button className="rounded-2xl ml-2 bg-gray-500 hover:bg-red-600" size="md" onClick={onRemove}>
        <BsXLg />
      </Button>
    </div>
  );
};

export default ImageItem;
