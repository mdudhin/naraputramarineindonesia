import React from "react";

const Hero: React.FC = () => (
  <section
    id="home"
    className="relative h-screen w-full flex items-center justify-center sm:justify-start text-white overflow-hidden"
  >
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1580162357874-77d7c1944cb5?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Shipyard"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </div>
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif tracking-tight animate-fade-in-down">
        Your Docking <br /> Solution
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg mx-auto sm:mx-0 animate-fade-in-up">
        End-to-end services for shipbuilding and repair.
      </p>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
      <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center pt-2">
        <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
);

export default Hero;
