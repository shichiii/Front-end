function SingleChat({ image, text, position }) {
  return position == "right" ? (
    <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
      <div>
        <div class="bg-pallate-Dark_Sky_Blue text-white p-3 rounded-l-lg rounded-br-lg max-w-[200px]">
          <p class="text-sm break-words xs:break-normal whitespace-nowwrap">
            {text}
          </p>
        </div>
      </div>
      <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
          alt="User's Profile Picture"
          className="rounded-full object-cover h-full w-full"
        />
      </div>
    </div>
  ) : (
    <div class="flex w-full mt-2 space-x-3 max-w-xs">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
          alt="User's Profile Picture"
          className="rounded-full object-cover h-full w-full"
        />
      </div>

      <div>
        <div class=" bg-pallate-Dark_Slate_Gray text-white p-3 rounded-l-lg rounded-br-lg max-w-[200px]">
          <p class="text-sm break-words xs:break-normal whitespace-nowwrap">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleChat;
