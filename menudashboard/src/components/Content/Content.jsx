import React from "react";
import SearchBar from "../SearchBar";
import Navigation from "../TextNavigation/Navigation";
export default function Content() {
  const date = new Date();
  const localeDate = date.toLocaleDateString();
  return (
    <div className="flex flex-1 h-full bg-secondary overflow-y-scroll p-9">
      <div className="w-full flex flex-col space-y-5">
        <div className="w-full flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-primary">Restaurant Name</h1>
            <p className="text-xl text-primary font-thin">{localeDate}</p>
          </div>
          <SearchBar />
        </div>
     <Navigation />
      </div>
    </div>
  );
}
