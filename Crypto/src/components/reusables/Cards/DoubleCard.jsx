import React from "react";
import Button from "../Button";
import DropDown from "../DropDown/DropDown";
import Badge from "../../badge/Badge";
import MultiAxisLine  from "../../Chart"
export default function DoubleCard({ image }) {
  return (
    <div className="w-full">
      <div className="flex flex-1 h-72 justify-between gap-y-3">
        <div className="flex flex-1 mr-10 h-full bg-gradient-to-r from-purple-700  to-pink-500 rounded-lg">
          <div className="w-1/2 text-primary h-full flex flex-col  p-4 gap-y-4">
            <p className="text-sm">Ethereum 2.0</p>
            <p className="font-bold text-2xl">Your Gateway into Blockchain</p>
            <p className="text-sm">
              Paronia is a blockchain platform.We make blockchain accessible.
            </p>
            <Button text="Learn more" />
          </div>
          <div className="w-1/2  h-full flex justify-end">
            <img src={image} alt={image} className="w-full" />
          </div>
        </div>
        <div className="flex-1 h-full p-4 shadow-md border border-primary rounded-lg">
          <div className="w-full flex items-center justify-between">
            <DropDown />
            <div className="flex items-center text-primary gap-x-2">
              <Badge text={"1D"} />
              <Badge text={"1W"} />
              <Badge text={"1M"} />
            </div>
          </div>

          <div className="w-full h-48">
              <MultiAxisLine />
          </div>
        </div>
      </div>
    </div>
  );
}
