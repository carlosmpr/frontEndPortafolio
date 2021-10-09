import React from "react";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as Gear } from "../../assets/icons/gear.svg";
import { ReactComponent as Data } from "../../assets/icons/data.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Noti } from "../../assets/icons/notifi.svg";
import { ReactComponent as Setting } from "../../assets/icons/setting.svg";
import { ReactComponent as Logoout } from "../../assets/icons/logout.svg";
import SidebarItems from "./SidebarItems";
export default function Sidebar() {
  return (
    <div className="flex flex-col bg-primary w-24 h-full items-center justify-evenly  rounded-r-2xl">
      <SidebarItems>
        <Logo />
      </SidebarItems>
      <SidebarItems>
        <Home />
      </SidebarItems>
      <SidebarItems>
        <Gear />
      </SidebarItems>
      <SidebarItems>
        <Data />
      </SidebarItems>
      <SidebarItems>
        <Email />
      </SidebarItems>
      <SidebarItems>
        <Noti />
      </SidebarItems>
      <SidebarItems>
        <Setting />
      </SidebarItems>

      <Logoout />
    </div>
  );
}
