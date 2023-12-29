import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../../Static/1.jpg";
import image2 from "../../../Static/2.jpg";
import image3 from "../../../Static/3.jpg";
import image4 from "../../../Static/4.jpg";
import image5 from "../../../Static/5.jpg";

const slideImages = [
  {
    url: image1,
    caption: "Slide 1",
  },
  {
    url: image2,
    caption: "Slide 2",
  },
  {
    url: image3,
    caption: "Slide 3",
  },
];

function CarImageSlider({ images }) {
  return (
    <div className="bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 rounded-2xl p-5 w-full flex flex-row gap-5 justify-center flex-wrap">
      {images?.map((image, index) =>
        image != null ? (
          <div key={index}>
            <img
              src={image}
              alt="car Images"
              class="w-auto rounded-2xl object-contain h-80 mx-auto"
            />
          </div>
        ) : null
      )}
      {/* {slideImages.map((slideImage, index) => (
        <div key={index}>
          <img
            src={slideImage.url}
            alt="ssdf"
            class="w-auto mx-auto rounded-2xl h-[500px]"
          />
        </div>
      ))} */}
    </div>
  );
}

export default CarImageSlider;
