import React from "react";
import SearchBars from "../components/reusables/SearchBars/SearchBar";

import Welcome from "./pages/Welcome";
export default function Content() {
  return (
    <div className="flex flex-1 h-full overflow-y-scroll pt-4 pb-4 pr-4">
      <div className="w-full h-full bg-secondary rounded-3xl p-9 space-y-4">
        <div className="flex w-full items-center text-2xl gap-x-6">
          <SearchBars />
          <i class="fas fa-user text-theme cursor-pointer hover:bg-primary p-2 rounded-md hover:text-white"></i>
          <i class="fas fa-bell text-theme cursor-pointer hover:bg-primary p-2 rounded-md hover:text-white"></i>
        </div>
        <div className="flex-1 bg-red-200 p-4 space-y-4">
        <p className="font-semibold text-2xl ">Course - Simple Swift App</p>
        <div className="relative w-full h-72 bg-red-400 rounded-3xl p-4 flex flex-col justify-between"></div>
      </div>
      </div>
    </div>
  );
}
