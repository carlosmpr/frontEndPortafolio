import React from "react";
import food from '../../assets/images/Content/food.png'
export default function CheckoutItem() {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <div className="w-full flex items-center gap-x-2">
        <img src={food} alt={food} className="w-10" />
        <div className="flex flex-col flex-1">
          <p className="text-sm text-primary">Italian Pasta</p>
          <p className="text-sm text-primary">$2.95</p>
        </div>
        <div className="flex items-center  justify-center bg-secondary rounded-md text-primary text-center  h-12 w-12 w-4">
          2
        </div>
        <div className="flex items-center  justify-center text-primary text-center  h-10 w-10 w-4">
          $4.98
        </div>
      </div>
      <div className="w-full flex gap-x-2">
        <input
          className="flex-1 outline-none bg-secondary text-primary p-2"
          placeholder="Note"
        />
        <div className="flex items-center  justify-center bg-secondary rounded-md text-primary text-center  h-12 w-12 w-4">
          <i class="fas fa-trash text-secondary"></i>
        </div>
      </div>
    </div>
  );
}
