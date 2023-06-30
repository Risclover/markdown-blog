import React from "react";

export default function Header({ children }) {
  return (
    <header className="border-2 border-black w-full bg-blue-100 flex flex-col">
      <div className="max-w-screen-xl mx-auto border-2 border-red">
        {children}
      </div>
    </header>
  );
}
