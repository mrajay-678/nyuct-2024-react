import React from "react";

const index = () => {
  return (
    <div id="hello-main">
      <div className="h-screen w-full bg-brand-100 p-10 rounded-lg mb-3 flex flex-col justify-between">
        <span className="text-brand-0 text-[150px]">01</span>
        <span className="text-brand-0 text-[200px] font-semibold">Hello</span>
      </div>
      <marquee
        behavior="smooth"
        direction="left"
        className="py-2 tracking-wider bg-brand-300 rounded-lg mb-3 text-[40px] text-brand-0 "
      >
        ● <span className="font-semibold"> WE ARE VENTURE DESIGNERS </span>
      </marquee>
      <div className="w-full bg-brand-0 border-brand-200 border-1 p-10 rounded-lg mb-3 pt-20">
        <span className="text-brand-200 text-[24px] font-semibold">
          As Venture Designers we help forward-thinking organisations, founders and makers grow transformative ideas into amazing ventures, products, IPs, brands, experiences and innovations. As a
          design lab we also conduct hackathons, ideation sprints and work on concept development for new futures. Our journey has spanned diverse industries - healthcare, government, lifestyle,
          impact, retail, travel, tourism, real estate, hospitality, venture capital, legal, luxury.
        </span>
        <br />
        <div className="pt-20 text-[5.5vw] font-semibold">
          <p className="border-b border-brand-200">NYUCT Design Labs operates</p>
          <p className="border-b border-brand-200"> at the intersection of design,</p>
          <p className="border-b border-brand-200"> strategy, technology and</p>
          <p className="border-b border-brand-200"> entrepreneurial action to</p>
          <p className="border-b border-brand-200"> make the amazing – from</p>
          <p className="border-b border-brand-200">
            blueprint to market. <span className="text-brand-100">This is</span>
          </p>
          <span className="text-brand-100">what we call as 0 to 1.</span>
        </div>

        <div className="flex justify-between pt-20">
          <div
            className="pointer"
            onClick={() => document.querySelector(`#hello-main`).scrollIntoView({ behavior: "smooth" })}
          >
            ↑ Hello
          </div>
          <div
            className="pointer"
            onClick={() => document.querySelector(`#ventures-main`).scrollIntoView({ behavior: "smooth" })}
          >
            Venture ↓
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
