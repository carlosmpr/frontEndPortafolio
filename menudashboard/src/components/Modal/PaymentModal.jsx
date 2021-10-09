import React from "react";
import Button from "../Buttons/Button";
import OutlineButton from "../Buttons/OutlineButton";
import OutlineIconButton from "../Buttons/OutlineIconButton";
import DropDown from "../DropDown/DropDown";
import Input from "../Inputs/Input";

export default function Modal() {
  return (
    <div
      className={`h-screen  w-screen top-0 right-5  p-9 absolute rounded-tr-lg shadow-3xl w-1/5  flex  flex-col items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-25  z-20`}
    >
      <div className="w-1/2 flex flex-col h-full bg-primary rounded-lg p-4 gap-y-3">
        <h3 className="text-3xl font-bold text-primary">Payments</h3>
        <p className="text-primary font-thin">3 payment method available</p>
        <hr />
        <h2 className="text-xl font-bold text-primary">Payment Method</h2>
        <div className="flex w-full justify-evenly">
          <OutlineIconButton text="Credit Card" icon={"fas fa-credit-card"} />
          <OutlineIconButton text="Paypal" icon={"fab fa-paypal"} />
          <OutlineIconButton text="Cash" icon={"fas fa-money-bill-wave"} />
        </div>
        <Input text={"Cardholder Name"} placeholder={"Name"} />
        <Input text={"Card Number"} placeholder={"Number"} />
        <div className="flex  gap-x-3">
          <Input text={"Expiration Date"} placeholder={"Date"} />
          <Input text={"CVV"} placeholder={"cvv"} />
        </div>
        <div className="flex  gap-x-3">
          <DropDown />
          
          <Input text="Table no." placeholder="table"/>
        </div>

        <div className="w-full flex  justify-center gap-x-3">
        <OutlineButton text="Cancel" />
          <Button text={"Confirm Payment"}/>
          
          </div>
      </div>
    </div>
  );
}
