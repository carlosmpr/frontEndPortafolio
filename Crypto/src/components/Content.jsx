import React from "react";
import SearchBar from "../components/reusables/SearchBars/SearchBar";
import Pic from "../assets/images/pic.png";
import DoubleCard from "./reusables/Cards/DoubleCard";
import FinancialCard from "./reusables/Cards/FinancialCard";
export default function Content() {
  return (
    <div className="w-full  h-full overflow-y-scroll p-4 space-y-5">
      <div className="w-full flex text-primary items-center gap-x-12">
        <i class="fas text-2xl fa-chevron-circle-left "></i>
        <p>Home</p>
        <SearchBar />
        <i class="fas text-2xl  fa-bell"></i>
      </div>
      <DoubleCard image={Pic} />
      <div className="w-full  flex overflow-x-scroll gap-x-4">
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      </div>
      <div className="w-full  flex overflow-x-scroll gap-x-4">
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      </div>
      <div className="w-full  flex overflow-x-scroll gap-x-4">
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      <FinancialCard />
      </div>
      
    
     
    </div>
  );
}
