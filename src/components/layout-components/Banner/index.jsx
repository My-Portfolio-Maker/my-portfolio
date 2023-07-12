import React from "react";
import Section from "../../shared-components/SectionContainer";
import { Parallax } from "react-scroll-parallax";
import AnimateOnScroll from "../../shared-components/AnimateOnScroll";

const Banner = ({ bgImage, heading, content = () => {} }) => {
  return (
    <Section
      style={{ backgroundImage: bgImage }}
      className="ftco-hireme img margin-top"
      noPb={false}
    >
      <div className="container">
        <div className="row justify-content-center">
          <AnimateOnScroll className="col-md-7 text-center">
            <Parallax
              speed={-20}
              easing={"easeOutQuad"}
              translateY={["80px", "-40px"]}
            >
              <h2 dangerouslySetInnerHTML={{ __html: heading }}></h2>
              {typeof content == "string" ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                content()
              )}
            </Parallax>
          </AnimateOnScroll>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
