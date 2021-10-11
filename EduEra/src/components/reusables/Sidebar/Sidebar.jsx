import React from "react";

import SidebarItems from "./SidebarItems";
export default function Sidebar() {
  return (
    <div className="flex flex-col bg-primary w-52 h-full items-center justify-evenly  ">
      <SidebarItems>
        <p className="font-bold text-2xl">EduEra</p>
      </SidebarItems>
      <SidebarItems>
      <i class="fas fa-th"></i>
        <p>Home</p>
      </SidebarItems>
      <SidebarItems>
      <i class="fas fa-chart-bar"></i>
        <p>Progress</p>
      </SidebarItems>
      <SidebarItems>
      <i class="far fa-comment"></i>
        <p>Message</p>
      </SidebarItems>
      <SidebarItems>
      <i class="fas fa-cog"></i>
        <p>Settings</p>
      </SidebarItems>
    
    </div>
  );
}
