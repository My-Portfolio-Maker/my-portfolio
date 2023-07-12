import React from "react";
import AnimateOnScroll from "../../../shared-components/AnimateOnScroll";
import Section from "../../../shared-components/SectionContainer";
import Heading from "../../../shared-components/Heading";
import img4 from '/images/project-4.jpg'
import img5 from '/images/project-5.jpg'
import img1 from '/images/project-1.jpg'
import img6 from '/images/project-6.jpg'
import img2 from '/images/project-2.jpg'
import img3 from '/images/project-3.jpg'

const ProjectSection = () => {
  return (
    <Section className="ftco-project" id="projects-section" noPb={false}>
      <div className="container">
        <div className="row justify-content-center pb-5">
        <Heading
            className={"col-md-12"}
            title="Our Projects"
            subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            bgTitle="Projects"
          />
          
        </div>
        <div className="row">
          <div className="col-md-4">
            <AnimateOnScroll
              className="project img d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${img4})` }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </AnimateOnScroll>
          </div>
          <div className="col-md-8">
          <AnimateOnScroll
              className="project img d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${img5})` }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </AnimateOnScroll>

          </div>

          <div className="col-md-8">
            <AnimateOnScroll
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              className="project img d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${img6})` }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3>
                  <a href="#">Branding &amp; Illustration Design</a>
                </h3>
                <span>Web Design</span>
              </div>
            </AnimateOnScroll>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <AnimateOnScroll
                  className="project img d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: `url(${img2})` }}
                >
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Branding &amp; Illustration Design</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </AnimateOnScroll>
              </div>
              <div className="col-md-12">
                <AnimateOnScroll
                  className="project img d-flex justify-content-center align-items-center"
                  style={{ backgroundImage: `url(${img3})` }}
                >
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3>
                      <a href="#">Branding &amp; Illustration Design</a>
                    </h3>
                    <span>Web Design</span>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectSection;
