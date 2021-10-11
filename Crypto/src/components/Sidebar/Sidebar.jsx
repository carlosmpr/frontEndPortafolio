import React from "react";
import Logo from '../../assets/icons/logo.svg'
import SidebarItems from "./SidebarItems";
export default function Sidebar() {
  return (
    <div className="flex flex-col border-r border-primary  bg-primary w-32 h-full items-center   gap-y-5">
      <SidebarItems>
     <img src={Logo} alt={Logo} />
      </SidebarItems>
      <SidebarItems>
      <i class="fas fa-th"></i>
    
      </SidebarItems>
      <SidebarItems>
      <i class="fas fa-chart-bar"></i>
       
      </SidebarItems>
      <SidebarItems>
      <i class="fas fa-wallet"></i>
    
      </SidebarItems>
      <SidebarItems>
      <i class="fas fa-cog"></i>
       
      </SidebarItems>
    
    </div>
  );
}
