function SingleChat({ image, text, position }) {
  return (
    <div class="flex w-full mt-2 space-x-3 max-w-xs">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/1.webp"
          alt="User's Profile Picture"
          className="rounded-full object-cover h-full w-full"
        />
      </div>

      <div>
        <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
          <p class="text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleChat;
