import React, { useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
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
      var st = window.scrollY;
      var navbar = $(".ftco_navbar");
      var sd = $(".js-scroll-wrap");
      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
      var current = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
          current = section.getAttribute("id");
          setCurrentNav(current);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleBurgerMenu = (event) => {
    event.preventDefault();
    if ($("#ftco-nav").is(":visible")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target"
      id="ftco-navbar"
    >
      <div className="container">
        <ReactLink className="navbar-brand" to="/">
          Umang
        </ReactLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#dd"
          aria-controls="dd"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="dd">
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
