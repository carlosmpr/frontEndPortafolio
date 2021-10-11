import React from "react";
import SearchBars from "../components/reusables/SearchBars/SearchBar";
import Class from "./pages/Class";
import Welcome from "./pages/Welcome";
export default function Content() {
  return (
    <div className="flex flex-1 h-full overflow-y-scroll pt-4 pb-4 pr-4">
      <div className="w-full h-full bg-secondary rounded-3xl p-9 space-y-4 overflow-y-scroll">
        <div className="flex w-full items-center text-2xl gap-x-6">
          <SearchBars />
          <i class="fas fa-user text-theme cursor-pointer hover:bg-primary p-2 rounded-md hover:text-white"></i>
          <i class="fas fa-bell text-theme cursor-pointer hover:bg-primary p-2 rounded-md hover:text-white"></i>
        </div>
    <Welcome />
      </div>
    </div>
  );
}


<i class="fas fa-book-open"></i>