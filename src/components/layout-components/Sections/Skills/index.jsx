import React from "react";
import AnimateOnScroll from "../../../shared-components/AnimateOnScroll";
import Section from "../../../shared-components/SectionContainer";
import Heading from "../../../shared-components/Heading";
import { GET_SKILLS } from "@constants/ApiConstants";
import { useAxios } from "@utils/useFetch";
import SectionLoader from "../../../shared-components/SectionLoader";
import { Waypoint } from "react-waypoint";
import $ from 'jquery';

const SkillsSection = () => {
  const { data: skills, isLoading } = useAxios(
    {
      method: "GET",
      url: GET_SKILLS,
    },
    function (res) {
      // console.log("response", res); // handle response data here
      const { skills } = res.data;
      return skills;
    }
  );

  const handleEnter = (index, score)=>{
    if($('.progress-bar').hasClass(`color-${index+1}`)){
      $(`.progress-bar.color-${index+1}`).css({"width": score})
    }
  }


  return (
    <Section id={"skills-section"} noPb={false}>
      <div className="container">
        <div className="row justify-content-center pb-5">
          <Heading
            className={"col-md-12"}
            title="My Skills"
            subtitle=""
            bgTitle="Skills"
          />
        </div>
        {isLoading && !skills ? (
          <>
            <SectionLoader />
          </>
        ) : (
        <div className="row mt-4">
          {skills.map((data, index) => {
            const { _id, skill, score } = data;
            return (
              <div key={_id} className="col-md-6 animate-box">
                <AnimateOnScroll className="progress-wrap">
                  <h3>{skill.name}</h3>
                  <div className="progress">
                    <Waypoint onEnter={()=>handleEnter(index, score)}>
                    <div
                      className={`progress-bar color-${index+1}`}
                      role="progressbar"
                      aria-valuenow={score.substring(0, score.length-1)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span>{score}</span>
                    </div>
                    </Waypoint>
                  </div>
                </AnimateOnScroll>
              </div>
            );
          })}

          
        </div>
        )}
      </div>
    </Section>
  );
};

export default SkillsSection;
