import React from "react";
import food from '../../assets/images/Content/food.png'
export default function Items() {
  return (
    <div className="w-full flex items-center gap-x-2">
      <img src={food} alt={food} className="w-14" />
      <div className="flex flex-col flex-1">
        <p className="text-lg text-primary">Italian Pasta</p>
        <p className="text-sm text-primary font-thin">200 dish ordered</p>
      </div>
    </div>
  );
}
