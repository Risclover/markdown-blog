import React from "react";
import Avatar from "../images/avatar.png";
export default function HomeHeader() {
  return (
    <div className="h-72 flex flex-col justify-end">
      <div>
        <img className="w-96 m-auto border-black-4" src={Avatar} />
      </div>
    </div>
  );
}
