import { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function CommentSection({ refreshComment, setRefreshComment, adv }) {
  const comment =
    "Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr account brandon an up. Wrong for never ready ham these witty him. Our compass see age uncivil matters weather forbade her minutes. Ready how but truth son new under.";

  const [comments, setComments] = useState({});
  const [commentsNum, setCommentsNum] = useState(3);
  const [showDelayedComment, setShowDelayedComment] = useState(false);
  const [rating, setRating] = useState(null);

  const userId = jwtDecode(localStorage.getItem("token")).user_id;

  useEffect(() => {
    axios
      .get("http://87.107.54.89:8000/advertisement/list-comment/")
      .then((response) => {
        setComments(response.data.filter((item) => item.adv === +adv));
        setRefreshComment(false);
      });
  }, [refreshComment, adv]);

  const handleClick = () => {
    setCommentsNum((n) => n + 3);
    setTimeout(() => {
      setShowDelayedComment(true);
    }, 1000); // 1000 milliseconds (1 second) delay
  };

  useEffect(
    function () {
      axios
        .get(`http://87.107.54.89:8000/advertisement/list-rate`)
        .then((response) => {
          setRating(
            response.data.find(
              (item) => item.adv === +adv && item.user_id === userId
            )?.rate
          );
        });
    },
    [adv]
  );

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl h-auto bg-pallate-Dark_Sky_Blue bg-opacity-30 lg:bg-opacity-20 w-full">
      <h1 className=" text-pallate-Dark_Sky_Blue font-bold text-xl">
        Comment Section
      </h1>
      {comments.length > 0 ? (
        comments?.map((comment, index) => {
          if (index < commentsNum) {
            return (
              <Comment
                name="Hazhir"
                comment={comment.text}
                rating={rating}
                date={comment.created_date}
              />
            );
          }
        })
      ) : (
        <p>No comments yet</p>
      )}
      {commentsNum < comments.length ? (
        <span
          className="text-primary-600 text-sm mt-5 cursor-pointer hover:text-pallate-Dark_Sky_Blue"
          onClick={() => {
            handleClick();
          }}
        >
          Load more comments
        </span>
      ) : null}
    </div>
  );
}

export default CommentSection;
