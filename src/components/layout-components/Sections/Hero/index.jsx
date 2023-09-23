import React from "react";
import Section from "../../../shared-components/SectionContainer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { GET_IMAGE } from "@constants/ApiConstants";
import { Link } from "react-scroll";
import { handleImage } from "@utils";
import AnimateOnScroll from "../../../shared-components/AnimateOnScroll";
import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";

const HeroSection = ({ data }) => {
  const { name, designation, field, city, cv, images } = data;

  let options = {
    loop: true,
    autoplay: true,
    margin: 0,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    nav: false,
    autoplayHoverPause: false,
    items: 1,
    navText: [
      "<span class='ion-md-arrow-back'></span>",
      "<span class='ion-chevron-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <Section id={"home-section"} className="hero" ftco={false} noPb={false}>
      <OwlCarousel className="home-slider" {...options}>
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div className="one-third js-fullheight order-md-last">
                <LazyLoadImage
                  src={`${handleImage(
                    GET_IMAGE,
                    images[0].name,
                  )}`}
                  className="img"
                />
                <div className="overlay"></div>
              </div>
              <AnimateOnScroll className="one-forth d-flex align-items-center">
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I'm <span>{name}</span>
                  </h1>
                  <h2 className="mb-4">A {designation}</h2>
                  <p>
                    <Link
                      smooth={true}
                      spy={true}
                      to="contact-section"
                      className="btn btn-primary py-3 px-4 mr-3"
                    >
                      Hire me
                    </Link>
                    <Link
                     smooth={true}
                     spy={true}
                     to="projects-section"
                      className="btn btn-white btn-outline-white py-3 px-4"
                    >
                      My works
                    </Link>
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>

        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row d-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div className="one-third js-fullheight order-md-last">
                <LazyLoadImage
                  src={`${handleImage(
                    GET_IMAGE,
                    images[1].name,
                  )}`}
                  className="img"
                />
                <div className="overlay"></div>
              </div>
              <AnimateOnScroll className="one-forth d-flex align-items-center">
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I'm a <span>{field}</span> based in {city}
                  </h1>
                  <p>
                    <Link
                      smooth={true}
                      spy={true}
                      to="resume-section"
                      className="btn btn-primary py-3 px-4 mr-3"
                    >
                      My Experiences
                    </Link>
                    <Link
                      smooth={true}
                      spy={true}
                      to="footer-section"
                      className="btn btn-primary py-3 px-4 mr-3"
                    >
                      Social Links
                    </Link>
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </Section>
  );
};

export default HeroSection;
