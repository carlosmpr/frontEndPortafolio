import React from "react";

export default function IconItem({text, desc, icon}) {
  return (
    <div className="w-full flex items-center gap-x-4 text-primary hover:bg-theme p-2">
     <i className={`text-xl ${icon}`}></i>
      <div className="flex flex-col flex-1">
        <p className="text-lg ">{text}</p>
        <p className="text-sm  font-thin">{desc}</p>
      </div>
    </div>
  );
}
