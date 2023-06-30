import React from "react";

export default function Header({ children }) {
  return (
    <header className="border-2 border-black w-full bg-blue-50 flex flex-col">
      <div className="container max-w-screen-xl w-full mx-auto border-2 border-black">
        {children}
      </div>
    </header>
  );
}
