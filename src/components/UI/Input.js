import React from "react";

const Input = ({ htmlFor, label, placeholder, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm h-7">
        <input
          type="text"
          name={htmlFor}
          id={htmlFor}
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md h-full"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
};

export default Input;
