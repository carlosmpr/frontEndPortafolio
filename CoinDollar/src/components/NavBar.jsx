import React from "react";
import Button from "./reusables/Button";
import Logo from '../assets/icons/coidollar.svg'
export default function NavBar() {
  return (
    <div className=" flex w-full h-24 p-4 items-center justify-between">
      <div className="flex items-center">
      <img src={Logo} alt={Logo} />
      <p className=" text-primary font-bold">CoinDollar</p>
      </div>
      <div className="flex gap-x-6 font-bold">
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <p>Sell Bitcoin/GiftCard</p>
      </div>
      <Button text={"Login"}></Button>
    </div>
  );
}
