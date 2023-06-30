import React from "react";

export default function Header({ children }) {
  return (
    <header className="border-2 border-black w-full bg-blue-100 flex flex-col">
      <div className="max-w-screen-xl w-full mx-auto border-2 border-blue">
        {children}
      </div>
    </header>
  );
}
