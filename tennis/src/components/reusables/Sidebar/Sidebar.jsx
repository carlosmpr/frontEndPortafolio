import React from "react";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";
import { ReactComponent as Home } from "../../../assets/icons/Games.svg";
import { ReactComponent as Gear } from "../../../assets/icons/Live.svg";
import { ReactComponent as Data } from "../../../assets/icons/Scores.svg";
import { ReactComponent as Email } from "../../../assets/icons/Video.svg";
import { ReactComponent as Noti } from "../../../assets/icons/Statistic.svg";
import SidebarItems from "./SidebarItems";
export default function Sidebar() {
  return (
    <div className="flex flex-col bg-primary w-52 h-full items-center justify-evenly  ">
      <SidebarItems>
        <Logo />
        <p className="font-bold text-lg">Tennis</p>
      </SidebarItems>
      <SidebarItems>
        <Home />
        <p>All game</p>
      </SidebarItems>
      <SidebarItems>
        <Gear />
        <p>Live Events</p>
      </SidebarItems>
      <SidebarItems>
        <Data />
        <p>Score</p>
      </SidebarItems>
      <SidebarItems>
        <Email />
        <p>Video</p>
      </SidebarItems>
      <SidebarItems>
        <Noti />
        <p>Statistic</p>
      </SidebarItems>
      
    </div>
  );
}
