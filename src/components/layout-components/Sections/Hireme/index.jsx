import React from "react";
import Banner from "../../Banner";
import bgImage from '/images/bg_1.jpg'

const Hireme = () => {
  return (
    <>
      <Banner
        bgImage={`url(${bgImage})`}
        heading="I'm <span>Available</span> for freelancing"
        content={() => (
          <>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
            
              <a href="#" className="btn btn-primary py-3 px-5">
                Hire me
              </a>
            
          </>
        )}
      />
    </>
  );
};

export default Hireme;
