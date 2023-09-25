import React from "react";
import AnimateOnScroll from "../../../shared-components/AnimateOnScroll";
import Section from "../../../shared-components/SectionContainer";
import Heading from "../../../shared-components/Heading";
import { useAxios } from "@utils/useFetch";
import { GET_CV, GET_RESUME } from "@constants/ApiConstants";
import SectionLoader from "../../../shared-components/SectionLoader";
import { handleDate } from "@utils";
import { Link as ReactLink } from "react-router-dom";
import { getMonth, getYear, handleDownload } from "@utils";

const ResumeSection = (props) => {
  const { name, type } = props.cv;
  let { type: resumeType, disableDownload } = props;

  const { data: resume, isLoading } = useAxios(
    {
      method: "GET",
      url: GET_RESUME,
      params: {
        type: resumeType,
      },
    },
    function (res) {
      const { experiences } = res.data;
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      experiences.sort((a, b) => {
        if (
          getYear(resumeType === "experience" ? a.end_date : a.start_date) !==
          getYear(resumeType === "experience" ? b.end_date : b.start_date)
        )
          return (
            getYear(resumeType === "experience" ? b.end_date : b.start_date) -
            getYear(resumeType === "experience" ? a.end_date : a.start_date)
          );
        else
          return (
            months.indexOf(
              getMonth(resumeType === "experience" ? b.end_date : b.start_date)
            ) -
            months.indexOf(
              getMonth(resumeType === "experience" ? a.end_date : a.start_date)
            )
          );
      });
      return experiences;
    }
  );

  return (
    <Section
      id={`${
        resumeType === "experience" ? "resume-section" : "education-section"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center pb-5">
          <Heading
            className={"col-md-10"}
            title={`${resumeType === "experience" ? "Experience" : "My Education"}`}
            subtitle={`${
              resumeType === "experience"
                ? "Throughout my career, I have collaborated closely with teams, including designers, product managers and other clients to ensure smooth project execution and timely delivery"
                : ""
            }`}
            bgTitle={`${resumeType === "experience" ? "Experience" : "Education"}`}
          />
        </div>
        {isLoading && !resume ? (
          <>
            <SectionLoader />
          </>
        ) : (
          <div className="row">
            {resume.map((experience, index) => (
              <div key={experience._id} className="col-md-6">
                <AnimateOnScroll delay={index % 2 != 0 ? true : false}>
                  <div className="resume-wrap">
                    <span className="date">
                      {handleDate(experience.start_date)} -{" "}
                      {handleDate(experience.end_date)}
                    </span>
                    <h2>{experience.designation}</h2>
                    <span className="position">{experience.name}</span>
                    <span className="position location">
                      {experience.location}
                    </span>
                    <p className="mt-4">{experience.description}</p>
                  </div>
                </AnimateOnScroll>
              </div>
            ))}
          </div>
        )}
        {!disableDownload && (
          <AnimateOnScroll repeat>
            <div className="row justify-content-center mt-5">
              <div className="col-md-6 text-center">
                <p>
                  <ReactLink
                    target="_blank"
                    to={handleDownload(GET_CV, name, type)}
                    className="btn btn-primary py-4 px-5"
                  >
                    Download CV
                  </ReactLink>
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        )}
      </div>
    </Section>
  );
};

ResumeSection.defaultProps = {
  cv: [],
  type: "all",
  disableDownload: false,
};
export default ResumeSection;
