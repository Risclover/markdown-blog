import React from "react";
import Avatar from "../images/avatar2.png";

export default function HomeHeader() {
  return (
    <div className="sm:h-72 flex flex-col justify-end">
      <div>
        <img className="w-96 m-auto" src={Avatar} />
      </div>
    </div>
  );
}
