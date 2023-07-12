import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    {
      id: "home-section",
      name: "Home",
    },
    {
      id: "about-section",
      name: "About",
    },
    {
      id: "resume-section",
      name: "Resume",
    },
    {
      id: "education-section",
      name: "Education",
    },
    {
      id: "services-section",
      name: "Services",
    },
    {
      id: "skills-section",
      name: "Skills",
    },
    {
      id: "projects-section",
      name: "Projects",
    },
    {
      id: "contact-section",
      name: "Contact",
    },
  ];

  const [currentNav, setCurrentNav] = useState(navLinks[0].id);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      var current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 160) {
          current = section.getAttribute("id");
          setCurrentNav(current);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
      id="ftco-navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Umang
        </a>
        <button
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            {navLinks.map(({ id, name }) => (
              <li key={id} className="nav-item">
                <Link
                  duration={800}
                  smooth
                  to={`${id}`}
                  className={`${
                    currentNav === id ? "nav-link active" : "nav-link"
                  }`}
                >
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
