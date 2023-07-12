import React from "react";
import AnimateOnScroll from "../../../shared-components/AnimateOnScroll";
import Section from "../../../shared-components/SectionContainer";
import NumberCounter from "../../../shared-components/NumberCounter";
import { useAxios } from "../../../../utils/useFetch";
import { GET_EXTRAS } from "../../../../constants/ApiConstants";
import SectionLoader from "../../../shared-components/SectionLoader";
import { Waypoint } from "react-waypoint";

const CounterSection = () => {
  const { data: counter, isLoading } = useAxios(
    {
      url: GET_EXTRAS,
      method: "GET",
    },
    function (res) {
      const { extras } = res.data;
      return extras;
    }
  );

  const handleEnter = () => {
    var comma_separator_number_step =
      $.animateNumber.numberStepFactories.separator(",");
    $(".number").each(function () {
      var $this = $(this),
        num = $this.data("number");
      $this.animateNumber(
        {
          number: num,
          numberStep: comma_separator_number_step,
        },
        100
      );
    });
  };

  return (
    <Section className="ftco-counter img" id={"section-counter"} noPt={true}>
      <div className="container">
        {isLoading && !counter ? (
          <>
            <SectionLoader />
          </>
        ) : (
          <div className="row d-md-flex align-items-center">
            {counter.map((counter) => {
              const { _id, name, description } = counter;
              return (
                <AnimateOnScroll
                  key={_id}
                  className="col-md d-flex justify-content-center counter-wrap"
                >
                  <Waypoint topOffset={"95%"} onEnter={handleEnter}>
                    <div className="block-18">
                      <div className="text">
                        <NumberCounter number={parseInt(description)} />
                        <span>{name}</span>
                      </div>
                    </div>
                  </Waypoint>
                </AnimateOnScroll>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
};

export default CounterSection;
