import React from "react";
import Banner from "../../Banner";
import bgImage from "/images/bg_1.jpg";
import { Link } from "react-scroll";

const Hireme = () => {
  return (
    <>
      <Banner
        bgImage={`url(${bgImage})`}
        heading="I'm <span>Available</span> for freelancing"
        content={() => (
          <>
            <p className="mb-4">
            An effective communicator and a problem-solver, always eager to learn and adapt to new technologies and industry trends.
            </p>

            <Link
              smooth={true}
              spy={true}
              to="contact-section"
              className="btn btn-primary py-3 px-5"
            >
              Hire me
            </Link>
          </>
        )}
      />
    </>
  );
};

export default Hireme;
