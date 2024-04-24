import React, { useRef, useEffect } from "react";
import { Collapse, Card, CardBody } from "@material-tailwind/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Product = ({ data, height }) => {
  gsap.registerPlugin(ScrollTrigger);
  const [divopen, setdivOpen] = React.useState(false);

  const toggledivOpen = () => {
    divopen ? setdivOpen(false) : setdivOpen(true);
    !divopen ? (document.querySelector(".root-child").style.backgroundColor = "#323e48a6") : (document.querySelector("#root div").style.backgroundColor = "#fff");
  };
  const container = useRef();
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: "#divopen-main",
        start: "0% 0%",
        end: `bottom 100%`,
        ease: "power.In",
        scrub: 1,
        markers: true,
        onToggle: self => {
          // !divopen && setdivOpen(cur => !cur);
        },
      });
    },
    { dependencies: [divopen], scope: container }
  );
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [divopen]);
  return (
    <>
      <div
        className=" bg-brand-200 rounded-lg mb-3 p-10 "
        onClick={toggledivOpen}
        ref={container}
      >
        <div className="flex justify-between items-center h-full">
          <div className="text-3xl w-4/12 text-brand-0">{data.name}</div>
          <div className="text-xl text-center w-4/12 text-brand-100">{data.type}</div>
          <div className="w-4/12"></div>
        </div>
        {divopen && <div className=" py-20 text-brand-0 text-3xl">Making of the world's first 100% Himalayan distillery. From farm to bottle</div>}
      </div>
      <Collapse
        className={`transition-all ${divopen ? "duration-1000" : "duration-0"} `}
        open={divopen}
      >
        <Card className="my-4 w-full bg-transparent shadow-inherit">
          <CardBody className="p-0 bg-transparent">
            <div className="border border-brand-200 bg-brand-0 rounded-lg p-10">
              <div className="pt-20 text-[7.5vw] font-semibold">
                {data.headingArray.map((item, index) => (
                  <p
                    key={index}
                    className={`${data.headingArray.length - 1 !== index && "border-b border-brand-200"}`}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className="flex justify-between pt-20">
                <div className="w-5/12">{data.para[0]}</div>
                <div className="w-5/12">{data.para[1]}</div>
              </div>
            </div>
            <div className=" text-2xl px-5 md:px-10 py-4 rounded md:rounded-full bg-brand-200 text-brand-0 text-left md:text-center mt-3">{data.capsule[0]}</div>
            <div className="flex gap-3 mt-3">
              {data.firstImg.map((item, index) => (
                <div
                  key={index}
                  className="w-4/12 h-full md:min-h-[75vh] md:h-[75vh] rounded-lg bg-brand-100 "
                >
                  <img
                    src={require(`../assets/img/${data.folder}/${item}`)}
                    alt=""
                    className="w-full h-[200px] md:h-full object-contain"
                    srcSet=""
                  />
                </div>
              ))}
            </div>
            <div className="mt-3">
              <video
                className="w-full"
                src={require(`../assets/img/${data.folder}/${data.video}`)}
                autoPlay
                playsInline
                loop
                muted
              ></video>
            </div>
            <div className="flex gap-3 mt-3">
              {data.secondImg.map((item, index) => (
                <div
                  key={index}
                  className={`${index == 0 ? "w-8/12" : "w-4/12"} rounded-lg bg-brand-100 `}
                >
                  <img
                    src={require(`../assets/img/${data.folder}/${item}`)}
                    alt=""
                    className="w-full h-full object-contain"
                    srcSet=""
                  />
                </div>
              ))}
            </div>
            <div className="px-5 md:px-10 py-3 rounded md:rounded-full bg-brand-300 text-brand-0 mt-3">{data.capsule[1]}</div>
            <div className="flex gap-3 mt-3">
              {data.thirdImg.map((item, index) => (
                <div
                  key={index}
                  className="w-6/12 bg-brand-200 rounded-lg"
                >
                  <img
                    src={require(`../assets/img/${data.folder}/${item}`)}
                    alt=""
                    className="w-full h-full object-contain"
                    srcSet=""
                  />
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
};

export default Product;
