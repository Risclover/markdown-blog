import React from "react";

export default function Header({ children }) {
  return (
    <header className="w-full bg-blue-100 flex flex-col">
      <div className="max-w-6xl mx-auto">{children}</div>
    </header>
  );
}
