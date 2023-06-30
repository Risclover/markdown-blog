import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="py-2">
      <ul className="flex">
        <li className="mx-2">
          <Link to={"/"}>Home</Link>
        </li>
        <li>Blog</li>
      </ul>
    </div>
  );
}
