import React from "react";
import ExpandCard from "./reusables/Card/ExpandCard";
import Avatar from "../assets/images/Avatar.png";
import Avatar2 from "../assets/images/Avatar2.png";
import Items from "./reusables/Items/Items";
import PieChart from "./Pie";
import GroupedBar from "./Bar";
import StatisticCard from "./reusables/Card/StatisticCard";
import Player from "../assets/images/Human.png"

export default function Dashboard() {
  return (
    <>
      <div className="w-4/6 flex flex-col space-y-8 p-4">
        <div className="w-full flex items-start justify-between text-primary">
          <h1 className="text-2xl font-bold ">Dashboard</h1>
          <div className="flex gap-x-5">
            <i class="fas fa-search"></i>
            <i class="fas fa-cog"></i>
            <i class="fas fa-bell"></i>
          </div>
        </div>

        <ExpandCard>
          <div className="w-full flex flex-col items-center justify-center p-4">
            <div className="w-full flex justify-between">
              <h1 className="text-primary font-bold ">Your next Match</h1>
              <p className="font-thin text-sm">10/12/2021</p>
            </div>
            <div className="flex w-full  items-center justify-evenly">
              <Items image={Avatar} name="Naomi O" country="Japan" />
              <p className="text-4xl text-primary">:</p>
              <Items
                image={Avatar2}
                name="Jessica R"
                country="USA"
                reverse={"flex-row-reverse"}
              />
            </div>
          </div>
        </ExpandCard>
        <p className="text-primary">Statistic</p>
        <div className="w-full flex justify-between">
          <div className="w-5/12 rounded-lg bg-primary shadow-sm  p-4">
            <GroupedBar />
          </div>
          <div className="w-5/12 rounded-lg bg-primary shadow-sm  p-4">
            <PieChart />
          </div>
        </div>
        <div className="space-y-4">
        <p className="text-primary ">Rankings</p>
        <div className="w-full flex gap-x-3 ">
          <StatisticCard name="Single " number="18" color="pink" />
          <StatisticCard name="Doubles " number="20" color="yellow" />
          <StatisticCard name="Mixed doubles " number="16" color="indigo" />
          </div>
          </div>
      </div>
      <div className="flex-1 h-full space-y-6 ">
        <div className="w-full relative bg-primary h-96 rounded-2xl overflow-hidden shadow-md">
          <div className="w-full p-4  h-36 bg-gradient-to-r   from-purple-500 to-purple-700">
            <div className="flex-col w-1/2 text-white">
            <h3 className="text-xl font-bold "> Jessica Rogers</h3>
            <p className="font-thin">Usa</p>
            </div>
          </div>
          <div className="w-1/2 p-4 text-xs space-y-2">
            <p>Biography</p>
            <img src={Avatar2} alt={'player'} className="w-10"/>
            <p>Age: 27</p>
            <p>Birth:24-02-1993</p>
            <p>sex: Women</p>
            <p>WTA:10</p>
            <p>Social Media</p>
            <div className="flex items-center space-x-1 ">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <img src={Player} alt={Player} className="absolute top-0 right-0"/>
            </div>

          </div>
     
        </div>

        <div className=" w-full h-48 relative bg-primary  rounded-2xl overflow-hidden shadow-md p-4 space-y-2">
        <div className="w-full flex justify-between">
        <p>Latest Scores</p>
        <p className="text-primary text-sm">View All</p>
        </div>
        <table className="text-sm " >
            <tr className="border-b" >
              <th>Name</th>
              <th>Single</th>
              <th>Doubles</th>
              <th>Mixed</th>
            </tr>
            <tr>
              <td className="font-bold">Jess R</td>
              <td className="font-thin">2</td>

              <td className="font-thin">6</td>
              <td>
                6
              </td>
            </tr>
            <tr>
              <td className="font-bold">Nao. O</td>
              <td className="font-thin">0</td>

              <td className="font-thin">3</td>
              <td>
                1
              </td>
            </tr>
            </table>

        </div>
      </div>
    </>
  );
}
