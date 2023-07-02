import React from "react";

export default function Header({ children }) {
  return (
    <header className="w-full flex flex-col text-slate-50 bg-slate-800">
      <div className="max-w-5xl px-12 w-full mx-auto ">{children}</div>
    </header>
  );
}
