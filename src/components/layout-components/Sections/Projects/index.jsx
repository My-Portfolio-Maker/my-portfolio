import React from "react";
import AnimateOnScroll from "../../../shared-components/AnimateOnScroll";
import Section from "../../../shared-components/SectionContainer";
import Heading from "../../../shared-components/Heading";

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
              style={{ backgroundImage: "url(images/project-4.jpg)" }}
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
              style={{ backgroundImage: "url(images/project-5.jpg)" }}
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
              style={{ backgroundImage: "url(images/project-1.jpg)" }}
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
              style={{ backgroundImage: "url(images/project-6.jpg)" }}
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
                  style={{ backgroundImage: "url(images/project-2.jpg)" }}
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
                  style={{ backgroundImage: "url(images/project-3.jpg)" }}
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
