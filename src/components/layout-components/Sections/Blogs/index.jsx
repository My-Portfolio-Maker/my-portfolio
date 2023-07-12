import React from 'react';
import AnimateOnScroll from '../../../shared-components/AnimateOnScroll';
import Section from '../../../shared-components/SectionContainer';
import Heading from '../../../shared-components/Heading';

const BlogSection = () => {
    return (
      <Section id="blog-section" noPb={false}>
      <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
          <Heading
            className={"col-md-7"}
            title="Our Blog"
            subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            bgTitle="Blog"
          />
          </div>
          <div className="row d-flex">
            <AnimateOnScroll className="col-md-4 d-flex">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{ backgroundImage: "url('images/image_1.jpg')" }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">June 21, 2019</span>
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="col-md-4 d-flex">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{ backgroundImage: "url('images/image_2.jpg')" }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">June 21, 2019</span>
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll className="col-md-4 d-flex">
              <div className="blog-entry">
                <a
                  href="single.html"
                  className="block-20"
                  style={{ backgroundImage: "url('images/image_3.jpg')" }}
                ></a>
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">June 21, 2019</span>
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </Section>
    );
};

export default BlogSection;