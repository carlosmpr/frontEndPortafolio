import React from "react";
import Button from "../Buttons/Button";
import OutlineButton from "../Buttons/OutlineButton";
import food from '../../assets/images/Content/food.png'
import CheckoutItem from "./CheckoutItem";
export default function Checkout() {
  return (
    <div className="w-96 h-full bg-primary flex flex-col p-4 gap-y-5">
      <h5 className="text-2xl text-primary font-bold">Orders #34562</h5>
      <div className="flex gap-x-3">
        <Button text="Dive in" />
        <OutlineButton text="To go" />
        <OutlineButton text="Delivery" />
      </div>

      <div className="flex w-full gap-x-4">
        <p className="text-primary flex-1">Item</p>
        <p className="text-primary ">Qty</p>
        <p className="text-primary ">Price</p>
      </div>
      <div className="w-full h-3/5  border-t border-b border-primary overflow-y-scroll space-y-12">
       <CheckoutItem />
       <CheckoutItem />
       <CheckoutItem />
       <CheckoutItem />
       <CheckoutItem />

      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-primary font-thin">Discount</p>
        <p className="text-primary font-thin">$0</p>
      </div>

      <div className="w-full flex items-center justify-between">
        <p className="text-primary font-thin">Total</p>
        <p className="text-primary font-thin">$213</p>
      </div>
      <Button text="Complete payment" />
    </div>
  );
}
