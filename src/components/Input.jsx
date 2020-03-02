import React from "react";

export default function Input({ label, ...inputProps }) {
  return (
    <div className="flex flex-col">
      <div className="text-gray-600">{label}</div>
      <div>
        <input
          type="text"
          className="border border-blue-600 p-1 text-gray-700 rounded-md outline-none"
          {...inputProps}
        />
      </div>
    </div>
  );
}
