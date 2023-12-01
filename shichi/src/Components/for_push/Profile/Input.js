import { useState } from "react";

function Input({
  type,
  name,
  label,
  placeholder,
  value,
  setValue,
  onChange,
  disabled,
  errorMessage,
}) {
  return (
    <div className="flex flex-col w-[300px]">
      <label htmlFor={name} className="mb-2 text-sm">
        {label}
      </label>
      <input
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        name={name}
        className={`flex p-1 w-full rounded-2xl ${
          disabled ? "text-slate-100" : "text-black"
        } outline-none px-3 text-center opacity-90 focus:opacity-100`}
        placeholder={placeholder}
      />
      <span className=" text-red-400 text-sm h-2">{errorMessage}</span>
    </div>
  );
}

export default Input;
