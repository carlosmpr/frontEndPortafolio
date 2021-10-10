import React from "react";
import Settings from "../Pages/Settings";
import Home from '../Pages/Home'
import Dashboard from "../Pages/Dashboard";
export default function Content() {
  return (
    <div className="flex flex-1 h-full bg-secondary overflow-y-scroll p-9">
    <Dashboard />
    </div>
  );
}
