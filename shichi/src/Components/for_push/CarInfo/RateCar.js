import { useRef, useState } from "react";
import Rate from "./Rate";
import "./RateCar.css";

function RateCar() {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [rate, setRate] = useState(null);

  function openHandler() {
    setOpen(true);
  }

  function closeHandler() {
    setClose(true);
    setOpen(false);
    setTimeout(() => setClose(false), [1250]);
  }

  function onRateHandler(rate) {
    setRate(rate);
    closeHandler();
  }

  return (
    <>
      <div
        className="font-sm underline text-pallate-Dark_Sky_Blue cursor-pointer items-center flex justify-center button
            "
        id="one"
        onClick={openHandler}
      >
        Rate This Car
      </div>
      <div
        id="modal-container"
        className={`${open ? "one" : ""} z-[1000] ${close ? "out one" : ""}`}
        onClick={closeHandler}
      >
        <div class="modal-background z-[1000]">
          <div class="modal" onClick={(e) => e.stopPropagation()}>
            <Rate
              messages={["Very Bad", "Bad", "Okay", "Good", "Very Good"]}
              onSetRating={onRateHandler}
            />
          </div>
        </div>
      </div>
    </>
    // <div className="w-[500px] h-[500px] rounded-2xl bg-slate-200">
    //   <Rate />
    // </div>
  );
}

export default RateCar;
