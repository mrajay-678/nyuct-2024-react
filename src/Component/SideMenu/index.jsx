import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
let menu = [
  {
    no: "0",
    title: "Nyuct",
    id: "nyuct",
  },
  {
    no: "1",
    title: "Hello",
    id: "hello",
  },
  {
    no: "2",
    title: "Ventures",
    id: "ventures",
  },
  {
    no: "3",
    title: "Innovations",
    id: "innovations",
  },
  {
    no: "4",
    title: "Products",
    id: "products",
  },
  {
    no: "5",
    title: "Brands",
    id: "brands",
  },
  {
    no: "6",
    title: "Experiences",
    id: "experiences",
  },
  {
    no: "7",
    title: "Impact",
    id: "impact",
  },
  {
    no: "8",
    title: "Storytelling",
    id: "storytelling",
  },
  {
    no: "9",
    title: "Contact",
    id: "contact",
  },
];

const Index = () => {
  const container = useRef(null);
  let smoothScroll = item => {
    document.querySelector(`#${item}-main`).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      ref={container}
      className="sidebar-outer transition-all min-w-[200px] sticky top-0"
    >
      {menu.map(item => {
        return (
          <div
            onClick={() => smoothScroll(item.id)}
            key={item.no}
            className={`w-full relative transition-all duration-500 mb-3 rounded-lg px-5 py-4 min-h-[100px] h-[100px] flex flex-col justify-between  ${
              item.no === "0" ? "bg-white text-brand-200" : item.no === "1" ? "bg-brand-100 text-brand-200" : "bg-brand-200 text-brand-0"
            }`}
            id={`${item.id}-section`}
          >
            <div>0{item.no}</div>
            <div>{item.title}</div>
            <div className={`dot hidden dot-${item.no}`}>●</div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
