import React, { useEffect, useState } from "react";
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

  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load user preference on initial render
  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Update the class on the root element to toggle dark mode globally
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };
  return (
    <div className="py-2 flex items-end justify-between pt-5 text-4xl text-gray-900 mb-4 bg-slate-800 z-50">
      <NavLink
        to="/react-blog"
        className="text-3xl font-logo min-w-fit text-white"
      >
        Sara Dunlop
      </NavLink>

      {/* Light/dark mode toggle */}
      <Around
        className="text-amber-400"
        duration={750}
        toggled={!isDarkMode}
        onToggle={toggleDarkMode}
      />

      {/* <FiMenu
        className="text-3xl md:hidden cursor-pointer hover:text-violet-300 transition duration-300"
        onClick={setHidden}
      />
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> */}
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
