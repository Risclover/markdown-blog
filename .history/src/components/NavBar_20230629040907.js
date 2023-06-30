import React from "react";

export default function NavBar() {
  return (
    <div className="py-2">
      <ul className="flex">
        <li className="mx-2"><Link to={"/"}>Home</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}
