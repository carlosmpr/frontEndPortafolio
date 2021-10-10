import React from "react";

export default function RevenueCard({gain, total, desc, icon}) {
  return (
    <div className=" w-48 h-32 rounded-md shadow-md bg-primary p-4 space-y-2">
      <div className="w-full flex items-center gap-x-2 ">
        <i className={`text-purple ${icon} p-2 bg-secondary rounded-md`}></i>
        <p className="text-green">{gain}</p>
        <i className="fas fa-arrow-up p-2 bg-secondary rounded-full text-green"></i>
      </div>
      <h5 className="text-2xl text-primary">{total}</h5>
      <p className="font-thin text-primary text-sm">{desc}</p>
    </div>
  );
}
