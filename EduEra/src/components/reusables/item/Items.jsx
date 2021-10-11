import React from "react";

export default function Items({ image, title, username }) {
  return (
    <div className="w-full flex items-center gap-x-2">
      <img src={image} alt={image} className="w-14" />
      <div className="flex flex-col flex-1">
        <p className="text-lg ">{title}</p>
        <div className="flex w-full items-center justify-between">
          <p className="text-sm  font-thin">{username}</p>
          <div className="flex text-md gap-x-3 ">
            <i class="far fa-thumbs-up cursor-pointer"></i>
            <i class="far fa-thumbs-down cursor-pointer"></i>
            <i class="fas fa-share-alt-square cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
