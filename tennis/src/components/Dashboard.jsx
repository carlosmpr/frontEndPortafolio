import React from "react";
import ExpandCard from "./reusables/Card/ExpandCard";
import Avatar from '../assets/images/Avatar.png'
import Avatar2 from '../assets/images/Avatar2.png'
import Items from "./reusables/Items/Items";
export default function Dashboard() {

  return (
    <>
      <div className="w-4/6 flex flex-col space-y-10 p-4">
        <div className="w-full flex items-start justify-between text-primary">
            <h1 className="text-2xl font-bold ">Dashboard</h1>
           <div className="flex gap-x-5">
           <i class="fas fa-search"></i>
           <i class="fas fa-cog"></i>
           <i class="fas fa-bell"></i>
           </div>
        </div>
       
       <ExpandCard >
        <div className="w-full flex flex-col items-center justify-center p-4">
          <div className="w-full flex justify-between">
          <h1 className="text-primary font-bold ">Your next Match</h1>
          <p className="font-thin text-sm">10/12/2021</p>
          </div>
          <div className="flex w-full  items-center justify-evenly">
          <Items image={Avatar} name="Naomi O" country="Japan"/>
          <p className="text-4xl text-primary">:</p>
          <Items image={Avatar2} name="Anindita R" country="USA" reverse={'flex-row-reverse'}/>
        </div>
        </div>
        </ExpandCard>
        <div className="w-full flex justify-between">
        <div className="w-56 rounded-lg bg-primary shadow-sm h-56 "></div>
        <div className="w-56 rounded-lg bg-primary shadow-sm  h-56"></div>
        </div>
  

       
      </div>
      <div className="flex-1 h-full space-y-6">
        <div className="w-full bg-primary h-96 rounded-md p-4 space-y-4 ">
          <div className="w-full flex items-center justify-between  ">
            <h3 className="text-xl text-primary"> Order Report</h3>
         
          </div>
          <hr />
          <div className="h-52 overflow-y-scroll space-y-4  p-2">
          
          </div>
          <hr />
          
        </div>

      
      </div>
    </>
  );
}
