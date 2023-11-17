import axios from "axios";
import { useState } from "react";

function AddComment({ adv, setRefreshComment }) {
  const [comment, setComment] = useState("");

  function commentHandler() {
    axios
      .post(`http://185.157.245.99:8000/advertisement/create-comment/`, {
        user_id: 3,
        text: comment,
        adv: +adv,
      })
      .then((response) => {
        console.log(response.data);
        setRefreshComment(true);
        setComment("");
      });
  }

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl h-auto bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20  w-[1215px]">
      <h1 className=" text-pallate-Dark_Sky_Blue font-bold text-xl">
        Add your comment
      </h1>
      <textarea
        className="rounded-2xl outline-none py-1 px-3 border focus:border-pallate-Dark_Sky_Blue"
        rows={5}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        onClick={commentHandler}
        className="p-1 bg-pallate-Dark_Sky_Blue hover:bg-transparent hover:text-pallate-Dark_Sky_Blue  text-white font-mono text-[20px]  rounded-[400px] transition-all duration-300 w-3/12 mx-auto"
      >
        Submit
      </button>
    </div>
  );
}

export default AddComment;
