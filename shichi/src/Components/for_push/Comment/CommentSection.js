import { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "axios";

function CommentSection({ refreshComment, setRefreshComment }) {
  const comment =
    "Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr account brandon an up. Wrong for never ready ham these witty him. Our compass see age uncivil matters weather forbade her minutes. Ready how but truth son new under.";

  const [comments, setComments] = useState({});

  useEffect(() => {
    axios
      .get("http://185.157.245.99:8000/advertisement/list-comment/")
      .then((response) => {
        setComments(response.data);
        setRefreshComment(false);
      });
  }, [refreshComment]);

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl h-auto bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20  w-[1215px]">
      <h1 className=" text-pallate-Dark_Sky_Blue font-bold text-xl">
        Comment Section
      </h1>
      {comments.length > 0 ? (
        comments?.map((comment) => {
          return (
            <Comment
              name="Hazhir"
              comment={comment.text}
              rating={4}
              date={comment.created_date}
            />
          );
        })
      ) : (
        <p>No comments yet</p>
      )}
    </div>
  );
}

export default CommentSection;
