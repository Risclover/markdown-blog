import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { slide as Menu } from "react-burger-menu";
import SideBar from "./SideBar";
import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";

export default function NavBar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const setHidden = () => {
    setShowSidebar(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="py-2 flex items-end justify-between pt-5">
      <NavLink to="/" className="text-3xl font-logo min-w-fit">
        Sara Dunlop
      </NavLink>
      <Around duration={750} />

      <FiMenu
        className="text-3xl md:hidden cursor-pointer hover:text-violet-300 transition duration-300"
        onClick={setHidden}
      />
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {/* <FiMenu className="text-3xl md:hidden cursor-pointer hover:text-violet-300 transition duration-300" />
      <ul className="flex justify-end max-w-full w-full font-wotfard pb-0.5 hidden md:flex">
        <li className="mx-2 mr-6 cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="mx-2 mr-6 cursor-pointer">Blog</li>
        <li className="mx-2 mr-6 cursor-pointer">Categories</li>
        <li className="mx-2 mr-6 cursor-pointer">Portfolio</li>
      </ul> */}
    </div>
  );
}
