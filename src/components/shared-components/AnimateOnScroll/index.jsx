import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

const AnimateOnScroll = ({
  children,
  repeat = false,
  type = "fadeInUp",
  delay = false,
  delay2 = false,
  style = {},
  className = "",
}) => {
  const [animateClass, setAnimateClass] = useState("");
  const [itemAnimateClass, setItemAnimateClass] = useState("");
  const handleEnter = () => {
    setItemAnimateClass(" item-animate");
    setTimeout(()=>{
      setAnimateClass(` ${type} ftco-animated${delay ? " delay" : ""}${delay2 ? " delay2" : ""}`);
    }, 200, 'easeInOutExpo')
    
  };
  const handleLeave = () => {
    setAnimateClass("");
    setItemAnimateClass("");
  };
  return (
    <>
      <Waypoint topOffset={'-95%'} onEnter={handleEnter} onLeave={repeat ? handleLeave : () => {}}>
        <div
          style={style}
          className={`ftco-animate${itemAnimateClass}${animateClass}${
            className && ` ${className}`
          }`}
        >
          {children}
        </div>
      </Waypoint>
    </>
  );
};

export default AnimateOnScroll;
