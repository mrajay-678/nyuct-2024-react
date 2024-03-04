import React from "react";
import "./App.scss";
import Sidebar from "./Component/SideMenu";

const App = () => {
  return (
    <div className="bg-brand-0 relative flex w-screen p-4 gap-4">
      <Sidebar />
      <div>
        <div className="nyuct-section h-screen w-full">nyuct</div>
        <div className="hello-section h-screen w-full">hello</div>
        <div className="ventures-section h-screen w-full">ventures</div>
        <div className="innovations-section h-screen w-full">innovations</div>
        <div className="products-section h-screen w-full">products</div>
      </div>
    </div>
  );
};

export default App;
