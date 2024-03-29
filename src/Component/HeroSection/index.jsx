import React from "react";
import Marquee from "../Marquee";

const index = () => {
  return (
    <>
      <div
        id="nyuct-main"
        data-entersection="nyuct-section"
        data-height="100px"
        className="main-section h-screen rounded-lg border-brand-200 border w-full p-10 mb-3 flex flex-col justify-between"
      >
        <div className="flex justify-between">
          <div className="text-brand-200 font-bold text-[21px]">
            NYUCT <br />
            Design Labs
          </div>
          <div className="text-brand-200 font-bold text-right text-[21px]">
            Venture Design <br />& Innovation
          </div>
        </div>
        <div className="text-[38vw] marquee-animation text-brand-200 leading-none">
          <Marquee
            text={"NYUCT"}
            speed="1s"
          />
        </div>
      </div>
    </>
  );
};

export default index;
