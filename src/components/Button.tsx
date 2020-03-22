import React from "react";

type ButtonProps = {
  children: object;
  onClick: Function;
  className: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={`
        px-2 py-1 rounded-lg bg-green-400 text-green-800 text-xl 
        font-light shadow-md hover:shadow-lg ${className}
      `}
      onClick={e => onClick(e)}
    >
      {children}
    </button>
  );
}
