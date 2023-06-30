import React from "react";
import Avatar from "../images/avatar.png";
export default function HomeHeader() {
  return (
    <div class="h-96 bg-blue-100 flex-col justify-end">
      <div>
        <img class="w-9/12 m-auto border-black-4" src={Avatar} />
      </div>
    </div>
  );
}
