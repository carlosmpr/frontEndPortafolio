import React, { useState } from "react";

export default function DropDown() {
  const [show, setShow] = useState(false);
  const [text , setText] = useState('Dine in')

  const setDropdown = (e) => {
      setText(e.target.innerText)
      setShow(false)
  }
  return (
    <div className="relative flex w-32 border bg-primary shadow-md rounded-md p-2 items-center justify-around">
      <i class="fas fa-sort-down text-primary"></i>
      <button onClick={() => setShow(!show)} className="text-primary">
        {text}
      </button>
      {show ? (
        <div  className="absolute flex top-10 flex-col p-4 bg-primary text-primary">
          <p className="cursor-pointer"onClick={setDropdown}>Dine in</p>
          <p className="cursor-pointer" onClick={setDropdown}>To Go </p>
          <p className="cursor-pointer" onClick={setDropdown}>Delivery</p>
        </div>
      ) : null}
    </div>
  );
}
