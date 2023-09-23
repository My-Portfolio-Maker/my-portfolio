import React from "react";
import AnimateOnScroll from "../../../shared-components/AnimateOnScroll";
import Section from "../../../shared-components/SectionContainer";
import Heading from "../../../shared-components/Heading";
import { useAxios } from "@utils/useFetch";
import { GET_SERVICES } from "@constants/ApiConstants";
import { resetId, setPrefix } from "react-id-generator";
import nextId from "react-id-generator";
import SectionLoader from "../../../shared-components/SectionLoader";

const ServicesSection = () => {
  
  const icons = [
    'flaticon-analysis',
    "flaticon-flasks",
    "flaticon-ideas",
    "flaticon-innovation",
    "flaticon-ux-design",
    "flaticon-web-design",
    "flaticon-idea"
  ]

  const getIconNumber = (max) => {
    return Math.floor(Math.random()*(max - 1))+1 
  }
  const { data: serviceList, isLoading } = useAxios(
    {
      method: "GET",
      url: GET_SERVICES,
    },
    function (res) {
      resetId();

      setPrefix("service-id-");
      // console.log("response", res); // handle response data here
      const { custom_services, services } = res.data;
      const newCustomServices = custom_services.map((item) => {
        return {
          _id: nextId(),
          name: item,
        };
      });
      const list = services.concat(newCustomServices);
      return list;
    }
  );

  return (
    <Section noPb={false} id={"services-section"}>
      <div className="container">
        <div className="row justify-content-center py-5 mt-5">
          <Heading
            className={"col-md-12"}
            title="Services"
            subtitle="An enthusiastic full stack web developer, having a strong foundation in front-end and back-end technologies."
            bgTitle="Services"
          />
        </div>
        {isLoading && !serviceList ? (
          <>
            <SectionLoader />
          </>
        ) : (
          <div className="row">
            {serviceList.map((service, index) => (
              <div key={service._id} className="col-md-4 text-center d-flex">
              <AnimateOnScroll style={{width: '100%'}}>
                
                  <a href="#" className="services-1">
                    <span className="icon">
                      <i className={`${icons[index>icons.length?getIconNumber(icons.length):index]}`}></i>
                    </span>
                    <div className="desc">
                      <h3 className="mb-5">{service.name}</h3>
                    </div>
                  </a>
                
              </AnimateOnScroll>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default ServicesSection;
