import React from "react";

export type SelectOption = {
  value: string;
  text: string;
};

type SelectProps = {
  label: string;
  options: Array<SelectOption>;
};

export default function Select({
  label,
  options,
  ...selectProps
}: SelectProps) {
  return (
    <div className="flex flex-col">
      <div className="text-gray-600"> {label} </div>
      <div>
        <select
          className="border border-blue-600 p-1 text-gray-700 rounded-md outline-none"
          {...selectProps}
        >
          {options?.map(({ value, text }) => (
            <option value={value} key={value}>
              {text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
