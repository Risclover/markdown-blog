import React from "react";
import Avatar from "../images/avatar.png";
export default function HomeHeader() {
  return (
    <div className="h-96 bg-blue-100 flex flex-col justify-end border-2 border-red">
      <div>
        <img className="w-96 m-auto border-black-4" src={Avatar} />
      </div>
    </div>
  );
}
