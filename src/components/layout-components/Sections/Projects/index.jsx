import React, { useState } from "react";
import AnimateOnScroll from "../../../shared-components/AnimateOnScroll";
import Section from "../../../shared-components/SectionContainer";
import Heading from "../../../shared-components/Heading";
import { handleImage } from "@utils";
import { useAxios } from "@utils/useFetch";
import { GET_IMAGE, GET_PROJECTS } from "../../../../constants/ApiConstants";
import { Link } from "react-router-dom";
import SectionLoader from "../../../shared-components/SectionLoader";

const ProjectSection = () => {

  const [subtitle, setSubtitle] = useState('')
  const { data: projects, isLoading } = useAxios(
    {
      method: "GET",
      url: GET_PROJECTS,
    },
    function (res) {
      if(res.data?.subtitle) setSubtitle(res.data.subtitle)
      return res.data.projects;
    }
  );

  console.log(projects);

  return (
    <Section className="ftco-project" id="projects-section" noPb={false}>
      <div className="container">
        <div className="row justify-content-center pb-5">
          <Heading
            className={"col-md-12"}
            title="Projects"
            subtitle={subtitle}
            bgTitle="Projects"
          />
        </div>
        {isLoading && !projects ? (
          <>
            <SectionLoader />
          </>
        ) :
        (
          <div className="row">
            {projects.map((item, index) => (
              <div className={`col-md-${index % 2 == 0 ? 4 : 8}`}>
                <AnimateOnScroll
                  className="project img d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(${handleImage(
                      GET_IMAGE,
                      item.images[0].name
                    )})`,
                  }}
                >
                  <Link target="_blank" className="w-100" to={item.src}>
                    <div className="overlay"></div>
                    <div className="text text-center p-4">
                      <h3>
                        {item.name}
                      </h3>
                      <span>{item.type}</span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              </div>
            ))}
            {/* <div className="col-md-4">
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
          </div> */}
          </div>
        )}
      </div>
    </Section>
  );
};

export default ProjectSection;
