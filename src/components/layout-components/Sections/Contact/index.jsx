import React from "react";
import AnimateOnScroll from "../../../shared-components/AnimateOnScroll";
import Section from "../../../shared-components/SectionContainer";
import Heading from "../../../shared-components/Heading";
import { getPhoneNumber } from "../../../../utils";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAxiosCallback } from "../../../../utils/useFetch";
import { SEND_MESSAGE } from "../../../../constants/ApiConstants";
import { message, notification } from "antd";
import bgImage from '/images/about.jpg'

const ContactSection = (props) => {
  const { address, phone, email, social } = props.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [messageApi, contextHolder] = message.useMessage()

  const { isLoading, callback: sendMessage } = useAxiosCallback();
  const onSubmit = (data) => {
    const key = "updatable";
    messageApi.open({
      key,
      type: "loading",
      content: "Submitting request...",
      duration: 0
    });
    sendMessage({
      method: "POST",
      url: SEND_MESSAGE,
      data,
      success: (res) => {
        messageApi.open({
          key,
          type: "success",
          content: res.message,
          duration: 2
        });
      },
      error: (err)=>{
        messageApi.open({
          key,
          type: 'error',
          content: err.message,
          duration: 2
        });
      }
    });
  };

  return (
    <>
    {contextHolder}
    <Section className="contact-section" id={"contact-section"}>
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <Heading
            className={"col-md-7"}
            title="Contact Me"
            subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
            bgTitle="Contact"
          />
        </div>

        <div className="row d-flex contact-info mb-5">
          <AnimateOnScroll className="col-md-6 col-lg-3 d-flex">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-map-signs"></span>
              </div>
              <h3 className="mb-4">Address</h3>
              <p>{address}</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="col-md-6 col-lg-3 d-flex">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-phone2"></span>
              </div>
              <h3 className="mb-4">Contact Number</h3>
              <p>
                <Link to={`tel://+${phone}`}>{getPhoneNumber(phone)}</Link>
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="col-md-6 col-lg-3 d-flex">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-paper-plane"></span>
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p>
                <Link to={`mailto:${email}`}>{email}</Link>
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="col-md-6 col-lg-3 d-flex">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="icon-linkedin"></span>
              </div>
              <h3 className="mb-4">LinkedIn</h3>
              <p>
                <Link target="_blank" to={social.linkedin}>
                  {social.linkedin}
                </Link>
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="row no-gutters block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-light p-4 p-md-5 contact-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Your Name *"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name?.type === "required" && (
                  <small>* Name is required</small>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Your Email *"
                  {...register("email", {
                    required: "Email is required",
                    validate: {
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "Email address must be a valid address",
                    },
                  })}
                />
                {errors.email?.message && (
                  <small>* {errors.email.message}</small>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  {...register("subject")}
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message *"
                  {...register("message", {
                    required: "Message is required",
                  })}
                ></textarea>
                {errors.message?.message && (
                  <small>* {errors.message.message}</small>
                )}
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>

          <div className="col-md-6 d-flex">
            <div
              className="img"
              style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
          </div>
        </div>
      </div>
    </Section>
    </>
  );
};

export default ContactSection;
