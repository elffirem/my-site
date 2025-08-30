import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatrixBackground from "./components/MatrixBackground";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <MatrixBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
