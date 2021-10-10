import React from "react";

export default function Items({ image, name, country, reverse }) {
  return (
    <div className={`flex items-center gap-x-4 ${reverse}`}>
      <div>
        <p className="font-bold">{name}</p>
        <p className="font-thin text-sm">{country}</p>
      </div>
      <img src={image} alt={image} className="w-20" />
    </div>
  );
}
