import Comment from "./Comment";

function CommentSection() {
  const comment =
    "Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr account brandon an up. Wrong for never ready ham these witty him. Our compass see age uncivil matters weather forbade her minutes. Ready how but truth son new under.";

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl h-auto bg-slate-100  w-[1215px]">
      <Comment name="Hazhir" comment={comment} rating={4} date="5 days ago" />
      <Comment name="Hazhir" comment={comment} rating={4} date="5 days ago" />
      <Comment name="Hazhir" comment={comment} rating={4} date="5 days ago" />
      <Comment name="Hazhir" comment={comment} rating={4} date="5 days ago" />
      <Comment name="Hazhir" comment={comment} rating={4} date="5 days ago" />
      <Comment name="Hazhir" comment={comment} rating={4} date="5 days ago" />
    </div>
  );
}

export default CommentSection;
