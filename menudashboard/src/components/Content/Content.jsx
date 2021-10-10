import React from "react";
import OutlineIconButton from "../Buttons/OutlineIconButton";
import RevenueCard from "../Cards/RevenueCard";
import Home from "../Pages/Home";
import TableReport from "../Table/TableReport";
export default function Content() {
  const date = new Date();
  const localeDate = date.toLocaleDateString();
  return (
    <div className="flex flex-1 h-full bg-secondary overflow-y-scroll p-9">
      <div className="w-4/6 flex flex-col space-y-10 p-4">
        <div className="w-full flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
            <p className="text-xl text-primary font-thin">{localeDate}</p>
          </div>
        </div>
        <hr />
        <div className="w-full flex justify-evenly">
          <RevenueCard
            icon={"fas fa-dollar-sign"}
            gain={"+32.40%"}
            desc={"Total revenue"}
            total={"$10,243"}
          />
          <RevenueCard
            icon={"fas fa-bookmark"}
            gain={"-12.40%"}
            desc={"Total Dish Ordered"}
            total={"23,243"}
          />
          <RevenueCard
            icon={"fas fa-user"}
            gain={"+2.40%"}
            desc={"Total Customer"}
            total={"23,243"}
          />
        </div>

        <TableReport />
      </div>
      <div className="flex-1 h-full bg-red-200"></div>
    </div>
  );
}
