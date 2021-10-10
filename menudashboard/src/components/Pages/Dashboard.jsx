import React from "react";
import OutlineButton from "../Buttons/OutlineButton";
import RevenueCard from "../Cards/RevenueCard";
import DoughnutChart from "../Chart/Chart";
import Items from "../Items/Items";
import TableReport from "../Table/TableReport";
import DropDown from '../DropDown/DropDown'
export default function Dashboard() {
  const date = new Date();
  const localeDate = date.toLocaleDateString();
  return (
    <>
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
      <div className="flex-1 h-full space-y-6">
        <div className="w-full bg-primary h-96 rounded-md p-4 space-y-4 ">
          <div className="w-full flex items-center justify-between  ">
            <h3 className="text-xl text-primary"> Order Report</h3>
            <DropDown />
          </div>
          <hr />
          <div className="h-52 overflow-y-scroll space-y-4  p-2">
            <Items />
            <Items />
            <Items />
            <Items />
            <Items />
          </div>
          <hr />
          <OutlineButton text="View All" />
        </div>

        <DoughnutChart />
      </div>
    </>
  );
}
