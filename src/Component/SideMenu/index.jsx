import React from "react";
import { Link } from "react-scroll";
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

const index = () => {
  return (
    <div className="sidebar-outer min-w-[200px] sticky top-0">
      {menu.map(item => {
        return (
          <Link
            to={`${item.id}-section`}
            spy={true}
            smooth={true}
            offset={100}
            key={item.no}
            className={`w-full my-2 rounded-lg px-5 py-4 min-h-[100px] flex flex-col justify-between  ${
              item.no == 0 ? "bg-white text-brand-200" : item.no == 1 ? "bg-brand-100 text-brand-200" : "bg-brand-200 text-brand-0"
            }`}
            id={`${item.id}-section`}
          >
            <div>{item.no}</div>
            <div>{item.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default index;
