import React from "react";
import "./component.scss";
const Marquee = ({ text, speed }) => {
  return (
    <>
      <div className="marquee-animation">
        <span
          className="marquee__inner"
          style={{ animationDirection: `${speed}` }}
        >
          {text}
        </span>
      </div>
    </>
  );
};

export default Marquee;
