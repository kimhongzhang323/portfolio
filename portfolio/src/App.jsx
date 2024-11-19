import React from "react";
import Navbar from "./components/ui/navbar";
import Hero from "./components/ui/Hero";



const App = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Navbar />
      <Hero />

    </div>
  );
}

export default App;

