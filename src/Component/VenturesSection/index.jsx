import React from "react";
import Himmaleh from "./Himmaleh";
const index = () => {
  return (
    <div id="ventures-main">
      <div className="h-screen w-full bg-brand-200 p-10 rounded-lg mb-3 flex flex-col justify-between">
        <span className="text-brand-0 text-[150px]">02</span>
        <span className="text-brand-0 text-[200px] font-semibold">Ventures</span>
      </div>
      <Himmaleh />
    </div>
  );
};

export default index;
