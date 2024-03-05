import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
let menu = [
  {
    no: "00",
    title: "Nyuct",
    id: "nyuct",
  },
  {
    no: "01",
    title: "Hello",
    id: "hello",
  },
  {
    no: "02",
    title: "Ventures",
    id: "ventures",
  },
  {
    no: "03",
    title: "Innovations",
    id: "innovations",
  },
  {
    no: "04",
    title: "Products",
    id: "products",
  },
  {
    no: "05",
    title: "Brands",
    id: "brands",
  },
  {
    no: "06",
    title: "Experiences",
    id: "experiences",
  },
  {
    no: "07",
    title: "Impact",
    id: "impact",
  },
  {
    no: "08",
    title: "Storytelling",
    id: "storytelling",
  },
  {
    no: "09",
    title: "Contact",
    id: "contact",
  },
];

const Index = () => {
  const container = useRef(null);
  const allSection = menu.map(value => console.log(value["id"]));
  console.log(allSection);
  useGSAP(
    () => {
      // let targets = gsap.utils.toArray($(".class"));
    },
    { scope: container }
  );
  let smoothScroll = item => {
    document.querySelector(`#${item}-main`).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      ref={container}
      className="sidebar-outer min-w-[200px] sticky top-0"
    >
      {menu.map(item => {
        return (
          <div
            onClick={() => smoothScroll(item.id)}
            key={item.no}
            className={`w-full mb-3 rounded-lg px-5 py-4 min-h-[100px] flex flex-col justify-between  ${
              item.no === "00" ? "bg-white text-brand-200" : item.no === "01" ? "bg-brand-100 text-brand-200" : "bg-brand-200 text-brand-0"
            }`}
            id={`${item.id}-section`}
          >
            <div>{item.no}</div>
            <div>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
