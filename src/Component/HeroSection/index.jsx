import React from "react";

const index = () => {
  return (
    <>
      <div
        id="nyuct-main"
        className="h-screen rounded-lg border-brand-200 border-1 w-full p-10 mb-3 flex flex-col justify-between"
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
        <marquee
          behavior="smooth"
          direction="left"
          className="text-[38vw] text-brand-200 leading-none"
        >
          NYUCT
        </marquee>
      </div>
    </>
  );
};

export default index;
