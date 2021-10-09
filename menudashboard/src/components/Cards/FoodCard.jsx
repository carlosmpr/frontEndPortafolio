import React from "react";
export default function FoodCard({
  name = "Italian Pasta",
  image,
  price = "2,99",
  available = "20 Bowls available",
}) {
  return (
    <div className="w-52 transition-all flex flex-col h-60 items-center justify-evenly rounded-xl bg-primary shadow-md cursor-pointer transform hover:-translate-y-4">
      <div className="w-36 -mt-10 h-36 bg-white rounded-full">
        <img src={image} alt={image} className="w-full" />
      </div>
      <h5 className="text-primary font-bold">{name}</h5>
      <p className="text-primary font-thin">${price}</p>
      <p className="text-primary font-thin">{available}</p>
    </div>
  );
}
