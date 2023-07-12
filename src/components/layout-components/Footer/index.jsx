import React from "react";
import { useAxios } from "@utils/useFetch";
import { GET_SERVICES } from "@constants/ApiConstants";
import { resetId, setPrefix } from "react-id-generator";
import nextId from "react-id-generator";
import AnimateOnScroll from "../../shared-components/AnimateOnScroll";
import SectionLoader from "../../shared-components/SectionLoader";
import { Link } from "react-router-dom";
import { getPhoneNumber } from "@utils";

const Footer = (props) => {
  const { aboutMe, address, social, phone, email } = props.data;

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
    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>{aboutMe}</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li>
                  <AnimateOnScroll>
                    <Link target="_blank" to={social.twitter}>
                      <span className="icon-twitter"></span>
                    </Link>
                  </AnimateOnScroll>
                </li>
                <li>
                  <AnimateOnScroll delay>
                    <Link target="_blank" to={social.facebook}>
                      <span className="icon-facebook"></span>
                    </Link>
                  </AnimateOnScroll>
                </li>
                <li>
                  <AnimateOnScroll delay>
                    <Link target="_blank" to={social.linkedin}>
                      <span className="icon-linkedin"></span>
                    </Link>
                  </AnimateOnScroll>
                </li>
                <li>
                  <AnimateOnScroll delay>
                    <Link target="_blank" to={social.github}>
                      <span className="icon-github"></span>
                    </Link>
                  </AnimateOnScroll>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Home
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>About
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Services
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Projects
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-long-arrow-right mr-2"></span>Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                {!isLoading && serviceList ? (
                  serviceList.map((item) => (
                    <li key={item._id}>
                      <Link to="#">
                        <span className="icon-long-arrow-right mr-2"></span>
                        {item.name}
                      </Link>
                    </li>
                  ))
                ) : (
                  <SectionLoader />
                )}
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker"></span>
                    <span className="text">{address}</span>
                  </li>
                  <li>
                    <Link to={`tel://+${phone}`}>
                      <span className="icon icon-phone"></span>
                      <span className="text">{getPhoneNumber(phone)}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`mailto:${email}`}>
                      <span className="icon icon-envelope"></span>
                      <span className="text">{email}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved |
              Developed By{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/umang-maheshwari01/"
              >
                Umang Maheshwari
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
