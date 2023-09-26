import React, { useState } from "react";
import AnimateOnScroll from "../../../shared-components/AnimateOnScroll";
import Section from "../../../shared-components/SectionContainer";
import Heading from "../../../shared-components/Heading";
import { handleImage } from "@utils";
import { useAxios } from "@utils/useFetch";
import { GET_IMAGE, GET_PROJECTS } from "../../../../constants/ApiConstants";
import { Link } from "react-router-dom";
import SectionLoader from "../../../shared-components/SectionLoader";
import Fallback from '/images/fallback.png'

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
              <div key={item._id} className={`col-md-${index % 2 == 0 ? 4 : 8}`}>
                <AnimateOnScroll
                  className="project img d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(${item.images.length?handleImage(
                      GET_IMAGE,
                      item.images[0].name
                    ):Fallback})`,
                    backgroundPosition: `${!item.images.length && 'center'}`
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
            
          </div>
        )}
      </div>
    </Section>
  );
};

export default ProjectSection;
