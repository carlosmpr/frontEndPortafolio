import React from "react";
import SearchBar from "../components/reusables/SearchBars/SearchBar";
import Pic from "../assets/images/pic.png";
import DoubleCard from "./reusables/Cards/DoubleCard";
export default function Content() {
  return (
    <div className="flex flex-1 flex-col  h-full overflow-y-scroll p-4 gap-y-5">
      <div className="w-full flex text-primary items-center gap-x-12">
        <i class="fas text-2xl fa-chevron-circle-left "></i>
        <p>Home</p>
        <SearchBar />
        <i class="fas text-2xl  fa-bell"></i>
      </div>
      <DoubleCard image={Pic} />
    </div>
  );
}
