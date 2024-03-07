import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "./App.scss";
import Sidebar from "./Component/SideMenu";
import Hero from "./Component/HeroSection";
import Hello from "./Component/HelloSection";
import Ventures from "./Component/VenturesSection";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef();
  useGSAP(
    () => {
      let targets = gsap.utils.toArray(document.querySelectorAll(".main-section"));
      targets.forEach((item, index) => {
        // let tl = gsap.timeline({
        //   scrollTrigger: {
        //     trigger: "item",
        //     start: "0% 20%",
        //     end: "100% 90%",
        //   },
        // });
        // tl.to(`#${document.getElementById("hello-main").dataset.entersection} .dot`, { y: 360 });
        ScrollTrigger.create({
          trigger: item,
          start: "0% 20%",
          end: "100% 90%",
          ease: "power.In",
          scrub: 1,
          markers: true,
          onToggle: self => {
            if (
              document.querySelector(`#${self.trigger.dataset.entersection}`).clientHeight == self.trigger.dataset.height ||
              document.querySelector(`#${self.trigger.dataset.entersection}`).clientHeight == 100
            ) {
              document.querySelector(`#${self.trigger.dataset.entersection}`).style.height = self.trigger.dataset.height;
              document.querySelector(`#${self.trigger.dataset.entersection} .dot`).style.display = "block";
            } else {
              document.querySelector(`#${self.trigger.dataset.entersection} .dot`).style.display = "none";
              document.querySelector(`#${self.trigger.dataset.entersection}`).style.height = "100px";
            }
          },
          onEnter: () => {
            // if (index > 3) {
            //   document.querySelector(".sidebar-outer").style.top = "-600px";
            // }
          },
        });
      });
    },
    { scope: container }
  );
  return (
    <div className="bg-brand-0 relative flex w-screen p-4 gap-4">
      <Sidebar />
      <div
        ref={container}
        className="w-[calc(100%-230px)] me-4"
      >
        <Hero />
        <Hello />
        <Ventures />
        <div
          id="innovations-main"
          data-entersection="innovations-section"
          data-height="500px"
          className="h-screen main-section border-black border-2 w-full"
        >
          innovations-main
        </div>
        <div
          id="products-main"
          data-entersection="products-section"
          data-height="500px"
          className="h-screen main-section border-black border-2 w-full"
        >
          products-main
        </div>
        <div
          id="brands-main"
          data-entersection="brands-section"
          data-height="500px"
          className="h-screen main-section border-black border-2 w-full"
        >
          brands-main
        </div>
        <div
          id="experiences-main"
          data-entersection="experiences-section"
          data-height="500px"
          className="h-screen main-section border-black border-2 w-full"
        >
          experiences-main
        </div>
        <div
          id="impact-main"
          data-entersection="impact-section"
          data-height="500px"
          className="h-screen main-section border-black border-2 w-full"
        >
          impact-main
        </div>
        <div
          id="storytelling-main"
          data-entersection="storytelling-section"
          data-height="500px"
          className="h-screen main-section border-black border-2 w-full"
        >
          storytelling-main
        </div>
        <div
          id="contact-main"
          data-entersection="contact-section"
          data-height="500px"
          className=" main-sectio"
        >
          <div className=" h-screen w-full bg-brand-100 p-10 rounded-lg mb-3 flex flex-col justify-between">
            <span className="text-brand-0 text-[150px]">01</span>
            <span className="text-brand-0 text-[200px] font-semibold">Hello</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
