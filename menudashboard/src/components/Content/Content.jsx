import React from "react";
import IconItem from "../Items/IconItems";



export default function Content() {

  return (
    <div className="flex flex-1 h-full bg-secondary overflow-y-scroll p-9">
     <div className="w-full h-full flex flex-col space-y-5">
     <h1 className="text-2xl font-bold text-primary">Settings</h1>
     <div className="flex w-full h-full">
       <div className="flex flex-col w-72 bg-primary h-full gap-y-10 rounded-md shadow-md overflow-y-scroll p-4">
       <IconItem text="Appereance" desc="Dark and Light mode. Font size" icon="fas fa-heart"/>
       <IconItem text="Your Restaurant" desc="Dark and Light mode. Font size" icon="fas fa-home"/>
       <IconItem text="Product Management" desc="Manage your Products" icon="fas fa-life-ring"/>
       <IconItem text="Notification" desc="Customize your notification" icon="fas fa-bell"/>
       
       <IconItem text="Security" desc="Configure Passworn. Pin" icon="fas fa-lock"/>
       <IconItem text="About Us" desc="Fin more info" icon="fas fa-info-circle"/>
       
       

       </div>
     </div>
     </div>
   
    </div>
  );
}

