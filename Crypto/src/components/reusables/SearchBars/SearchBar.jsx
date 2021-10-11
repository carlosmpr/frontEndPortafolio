import React from "react";

export default function SearchBar() {
  return (
    <div className="flex flex-1 items-center shadow-md border border-primary outline-none border-gray-50 bg-transparent rounded-lg p-2">
      <i class="fas text-lg fa-search"></i>
      <input
        className="p-2  flex-1 outline-none border-gray-50 bg-transparent rounded-md "
        placeholder={"Search"}
      />
    </div>
  );
}
