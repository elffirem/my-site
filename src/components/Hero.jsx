import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen text-white px-4">
      <div className="bg-black/90 backdrop-blur-md rounded-3xl p-16 max-w-4xl mx-auto shadow-2xl">
        <h1 className="text-7xl font-black mb-4 drop-shadow-lg text-white leading-tight" style={{color: 'white'}}>Am I finally a real hacker</h1>
        <h2 className="text-6xl font-bold mb-12 text-white leading-tight" style={{color: 'white'}}>now, mom?</h2>
        <div className="flex gap-6 justify-center flex-wrap">
          <Button text="Get Started" onClick={() => console.log('Get Started clicked')} />
          <Button 
            text="Learn More" 
            onClick={() => console.log('Learn More clicked')}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}
