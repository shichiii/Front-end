function Input({ type, name, label, placeholder }) {
  return (
    <div className="flex flex-col w-[300px]">
      <label htmlFor={name} className="mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className=" flex p-1 w-full rounded-md text-black outline-none px-3 text-center opacity-90 focus:opacity-100"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
