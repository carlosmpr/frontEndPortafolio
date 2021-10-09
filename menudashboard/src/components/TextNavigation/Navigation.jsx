import React from "react";
import NavigationItem from "./NavigationItem";
export default function Navigation() {
  return (
    <div className="flex w-full text-primary items-center justify-evenly border-b border-primary">
      <NavigationItem text={"Hot dishes"} active={true} />
      <NavigationItem text={"Cold dishes"} />
      <NavigationItem text={"Soup"} />
      <NavigationItem text={"Grill"} />
      <NavigationItem text={"Appetizer"} />
      <NavigationItem text={"Dessert"} />
    </div>
  );
}
