import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center px-8 py-4 bg-black/40 backdrop-blur-md shadow-lg text-white">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
        <h1 className="text-xl font-bold">React Bits</h1>
      </div>
    </nav>
  );
}
