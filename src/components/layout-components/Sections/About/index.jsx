import React from "react";
import AnimateOnScroll from "../../../shared-components/AnimateOnScroll";
import Section from "../../../shared-components/SectionContainer";
import Heading from "../../../shared-components/Heading";
import NumberCounter from "../../../shared-components/NumberCounter";
import moment from "moment/moment";
import { handleDownload, handleImage } from "@utils";
import { GET_CV, GET_IMAGE } from "@constants/ApiConstants";
import {Link} from 'react-router-dom'
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import { getPhoneNumber } from "../../../../utils";

const AboutSection = ({data}) => {
 
  const {aboutMe, name, date_of_birth, address, pincode, email, phone, project_completed, cv, images} = data
  return (
    <Section id="about-section" className="ftco-about img">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div
                className="d-flex align-self-stretch align-items-center"
                
              >
                <LazyLoadImage className="img" src={`${handleImage(GET_IMAGE, images[0].name)}`} />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <Heading
                className={"col-md-12"}
                title="About Me"
                textAlign="left"
                subtitle={aboutMe}
                bgTitle="About"
              >
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>{name}</span>
                  </li>
                  <li className="d-flex">
                    <span>Date of birth:</span> <span>{moment(date_of_birth).format('LL')}</span>
                  </li>
                  <li className="d-flex">
                    <span>Address:</span>
                    <span>{address}</span>
                  </li>
                  <li className="d-flex">
                    <span>Zip code:</span> <span>{pincode}</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>{email}</span>
                  </li>
                  <li className="d-flex">
                    <span>Phone: </span> <span>{getPhoneNumber(phone)}</span>
                  </li>
                </ul>
              </Heading>
            </div>
            <AnimateOnScroll>
              <div className="counter-wrap d-flex mt-md-3">
                <div className="text">
                  <p className="mb-4">
                  <NumberCounter bold={true} number={project_completed} />
                    <span> {project_completed == 1?'Project':'Projects'} completed</span>
                  </p>
                  <p>
                    <Link target="_blank" to={handleDownload(GET_CV, cv.name, cv.type)} className="btn btn-primary py-3 px-3">
                      Download CV
                    </Link>
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
