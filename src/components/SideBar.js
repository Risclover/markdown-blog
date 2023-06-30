import React from "react";
import { VscChromeClose } from "react-icons/vsc";

export default function SideBar({ showSidebar, setShowSidebar }) {
  const setHidden = () => {
    setShowSidebar(false);
    document.body.style.overflow = "unset";
  };
  return (
    <div
      className={`flex items-center justify-center top-0 right-0 w-[100%] bg-gray-950 bg-opacity-95 text-white fixed h-full z-40 ease-in-out duration-300 ${
        showSidebar ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <VscChromeClose
        className="text-5xl text-slate-50 cursor-pointer absolute top-[10px] right-[10px]"
        onClick={setHidden}
      />
      <ul className="text-center">
        <li className="text-4xl font-semibold text-white mb-10 cursor-pointer">
          I am a sidebar
        </li>
        <li className="text-4xl font-semibold text-white mb-10 cursor-pointer">
          Home
        </li>
        <li className="text-4xl font-semibold text-white mb-10 cursor-pointer">
          Blog
        </li>
      </ul>
    </div>
  );
}
