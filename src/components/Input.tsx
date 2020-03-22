import React from 'react';

type InputProps = {
  label: string;
};

export default function Input({ label, ...inputProps }: InputProps) {
  return (
    <div className="flex flex-col">
      <div className="text-gray-800">{label}</div>
      <input
        type="text"
        className="border border-gray-400 p-2 mt-1 text-gray-800 rounded outline-none"
        {...inputProps}
      />
    </div>
  );
}
