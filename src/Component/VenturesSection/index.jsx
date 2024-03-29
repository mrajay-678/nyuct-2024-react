import React from "react";
import Product from "./product";
import { productArray } from "../data/data";

const index = () => {
  return (
    <div
      id="ventures-main"
      className="main-section"
      data-entersection="ventures-section"
      data-height="500px"
    >
      <div className=" h-screen w-full bg-brand-200 p-10 rounded-lg mb-3 flex flex-col justify-between">
        <span className="text-brand-0 text-[150px]">02</span>
        <span className="text-brand-0 text-[200px] font-semibold">Ventures</span>
      </div>
      {/* <Product /> */}
      {productArray.map((item, index) => (
        <Product
          key={index}
          data={item}
        />
      ))}
    </div>
  );
};

export default index;
