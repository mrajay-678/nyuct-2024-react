import React from "react";
import "./App.scss";
import Sidebar from "./Component/SideMenu";
import Hero from "./Component/HeroSection";
import Hello from "./Component/HelloSection";
import Ventures from "./Component/VenturesSection";

const App = () => {
  return (
    <div className="bg-brand-0 relative flex w-screen p-4 gap-4">
      <Sidebar />
      <div className="w-full me-4">
        <Hero />
        <Hello />
        <Ventures />
        <div
          id="innovations-main"
          className="h-screen border-black border-2 w-full"
        >
          innovations-main
        </div>
        <div
          id="products-main"
          className="h-screen border-black border-2 w-full"
        >
          products-main
        </div>
        <div
          id="brands-main"
          className="h-screen border-black border-2 w-full"
        >
          brands-main
        </div>
        <div
          id="experiences-main"
          className="h-screen border-black border-2 w-full"
        >
          experiences-main
        </div>
        <div
          id="impact-main"
          className="h-screen border-black border-2 w-full"
        >
          impact-main
        </div>
        <div
          id="storytelling-main"
          className="h-screen border-black border-2 w-full"
        >
          storytelling-main
        </div>
        <div
          id="contact-main"
          className="h-screen border-black border-2 w-full"
        >
          contact-main
        </div>
      </div>
    </div>
  );
};

export default App;
