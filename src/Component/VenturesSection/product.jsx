import React from "react";
import { Collapse, Card, CardBody } from "@material-tailwind/react";

const Product = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => {
    setOpen(cur => !cur);
    !open ? (document.querySelector(".root-child").style.backgroundColor = "#323e48a6") : (document.querySelector("#root div").style.backgroundColor = "#fff");
  };
  return (
    <>
      <div
        className=" bg-brand-200 rounded-lg mb-3 p-10 "
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center h-full">
          <div className="text-3xl text-brand-0">{data.name}</div>
          <div className="text-xl text-brand-100">{data.type}</div>
          <div></div>
        </div>
        {open && <div className=" py-20 text-brand-0 text-3xl">Making of the world's first 100% Himalayan distillery. From farm to bottle</div>}
      </div>
      <Collapse
        className={`transition-all ${open ? "duration-1000" : "duration-0"} `}
        open={open}
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
            <div className=" text-2xl px-10 py-4 rounded-full bg-brand-200 text-brand-0 text-center mt-3">{data.capsule[0]}</div>
            <div className="flex gap-3 mt-3">
              {data.firstImg.map((item, index) => (
                <div
                  key={index}
                  className="w-4/12 min-h-[75vh] h-[75vh] rounded-lg bg-brand-100 "
                >
                  <img
                    src={require(`../assets/img/${item}`)}
                    alt=""
                    className="w-full h-full object-contain"
                    srcSet=""
                  />
                </div>
              ))}
            </div>
            <div className="mt-3">
              <video
                className="w-full"
                src={data.video}
                autoPlay
                playsInline
              ></video>
            </div>
            <div className="flex gap-3 mt-3">
              {data.secondImg.map((item, index) => (
                <div
                  key={index}
                  className={`${index == 0 ? "w-8/12" : "w-4/12"} rounded-lg bg-brand-100 `}
                >
                  <img
                    src={require(`../assets/img/${item}`)}
                    alt=""
                    className="w-full h-full object-contain"
                    srcSet=""
                  />
                </div>
              ))}
            </div>
            <div className="h-[10vh] px-10 py-3 rounded-full bg-brand-300 text-brand-0 mt-3">{data.capsule[1]}</div>
            <div className="flex gap-3 mt-3">
              {data.thirdImg.map((item, index) => (
                <div
                  key={index}
                  className="w-6/12 bg-brand-200 rounded-lg"
                >
                  <img
                    src={require(`../assets/img/${item}`)}
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
