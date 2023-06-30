import React from "react";

export default function Header({ children }) {
  return (
    <header className="w-full bg-blue-100 flex flex-col ">{children}</header>
  );
}
