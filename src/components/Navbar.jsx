import React from "react";
import logo from "/logo.svg";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-between select-none">
      <div className="flex items-center font-bold">
        <img src={logo} alt="QuantaSight" className="size-15" />
        <h1 className="text-2xl font-mono">QUANTSIGHT</h1>
      </div>
      <div className="border-2 border-white/80 flex items-center p-2.5 rounded-lg">
        <input
          className="text-white focus:outline-none"
          placeholder="Search Here"
        />
        <i className="bx bx-search-alt-2 inline-block text-2xl rounded" />
      </div>
    </div>
  );
}

export default Navbar;
