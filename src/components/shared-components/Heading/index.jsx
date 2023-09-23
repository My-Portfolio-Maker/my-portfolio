import React from "react";
import { Parallax } from "react-scroll-parallax";
import AnimateOnScroll from "../AnimateOnScroll";

const Heading = ({
  children,
  className,
  animate = true,
  title = "",
  bgTitle = "",
  subtitle = "",
  textAlign = "center",
}) => {
  return (
    <AnimateOnScroll className={`${
      className ? `${className} ` : ""
    }heading-section text-${textAlign}`}>
        <Parallax
          speed={-40}
          easing={"easeInOutQuad"}
          translateY={["80px", "0px"]}
        >
          <div>
            <h1 className="big big-2">{bgTitle}</h1>
          </div>
        </Parallax>
        <h2 className="mb-4">{title}</h2>

        <p className={`${!subtitle && "mb-5"}`}>{subtitle}</p>
        {children}
      
    </AnimateOnScroll>
  );
};

export default Heading;
