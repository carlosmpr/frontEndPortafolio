import React from "react";
import Button from "./reusables/Button";
export default function NavBar() {
  return (
    <div className=" flex w-full h-14 p-4 items-center justify-between">
      <p className=" text-primary font-bold">g-plans</p>
      <div className="flex gap-x-6 ">
        <p>Programs</p>
        <p>About</p>
        <p>Suplements</p>
        <p>Blog</p>
        <p>Help Center</p>
      </div>
      <Button text={"Book a Call"}></Button>
    </div>
  );
}
