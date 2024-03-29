import React from "react";

const index = () => {
  return (
    <div
      id="hello-main"
      className="main-section"
      data-entersection="hello-section"
      data-height="300px"
    >
      <div className=" h-screen w-full bg-brand-100 p-10 rounded-lg mb-3 flex flex-col justify-between">
        <span className="text-brand-0 text-[140px]">01</span>
        <span className="text-brand-0 text-2xl md:text-[240px] font-semibold">Hello</span>
      </div>
      <div className="py-2 tracking-wider bg-brand-300 rounded-lg mb-3 text-[45px] text-brand-0 overflow-hidden ">
        <div className="marquee-animation">
          <span
            className="font-semibold marquee__inner"
            style={{ animationDuration: "20s" }}
          >
            ● WE ARE VENTURE DESIGNERS ● WE ARE VENTURE DESIGNERS ● WE ARE VENTURE DESIGNERS ● WE ARE VENTURE DESIGNERS{" "}
          </span>
        </div>
      </div>
      <div className="w-full bg-brand-0 border-brand-200 border p-10 rounded-lg mb-3 pt-20">
        <span className="text-brand-200 text-[29px] ">
          As Venture Designers we help forward-thinking organisations, founders and makers grow transformative ideas into amazing ventures, products, IPs, brands, experiences and innovations. As a
          design lab we also conduct hackathons, ideation sprints and work on concept development for new futures. Our journey has spanned diverse industries - healthcare, government, lifestyle,
          impact, retail, travel, tourism, real estate, hospitality, venture capital, legal, luxury.
        </span>
        <br />
        <div className="pt-20 text-[5.5vw] text-brand-200 font-semibold">
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
