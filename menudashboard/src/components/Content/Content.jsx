import React from "react";
import DropDown from "../DropDown/DropDown";
import SearchBar from "../SearchBar";
import Navigation from "../TextNavigation/Navigation";
import food from  '../../assets/images/Content/food.png'
import FoodCard from "../Cards/FoodCard";
export default function Content() {
  const date = new Date();
  const localeDate = date.toLocaleDateString();
  return (
    <div className="flex flex-1 h-full bg-secondary overflow-y-scroll p-9">
      <div className="w-full flex flex-col space-y-10">
        <div className="w-full flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-primary">Restaurant Name</h1>
            <p className="text-xl text-primary font-thin">{localeDate}</p>
          </div>
          <SearchBar />
        </div>
        <Navigation />

        <div className="w-full flex items-start justify-between mb-12">
          <div className="p-2">
            <h2 className="text-xl font-bold text-primary">Choose Dishes</h2>
          </div>
          <DropDown />
        </div>

        <div className="w-full flex flex-wrap gap-x-8 gap-y-24">

         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />

         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />
         <FoodCard image={food} />
        </div>
      </div>
    </div>
  );
}
