import React from "react";

export default function Header({ children }) {
  return (
    <header className="w-full bg-blue-100 dark:bg-slate-800 flex flex-col">
      <div className="max-w-5xl px-12 w-full mx-auto text-gray-100">
        {children}
      </div>
    </header>
  );
}
