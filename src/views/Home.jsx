import { useEffect, lazy } from "react";
import Navbar from "@components/layout-components/Navbar";
import ScriptLoad from "@utils/ScriptLoad";
import { useAxiosCallback } from "@utils/useFetch";
import { useNavigate } from "react-router-dom";
const HeroSection = lazy(() =>
  import("@components/layout-components/Sections/Hero")
);
import AboutSection from "@components/layout-components/Sections/About";
import Loader from "@components/shared-components/Loader";
const ResumeSection = lazy(() =>
  import("@components/layout-components/Sections/Resume")
);
const ServicesSection = lazy(() =>
  import("@components/layout-components/Sections/Services")
);
const SkillsSection = lazy(() =>
  import("@components/layout-components/Sections/Skills")
);
const ProjectSection = lazy(() =>
  import("@components/layout-components/Sections/Projects")
);
const BlogSection = lazy(() =>
  import("@components/layout-components/Sections/Blogs")
);
const CounterSection = lazy(() =>
  import("@components/layout-components/Sections/Counter")
);
const Hireme = lazy(() =>
  import("@components/layout-components/Sections/Hireme")
);
import ContactSection from "@components/layout-components/Sections/Contact";
import Footer from "@components/layout-components/Footer";
import { GET_PROFILE } from "@constants/ApiConstants";
import { Helmet } from "react-helmet";
import { APP_NAME } from "../configs/AppConfig";
import { GET_IMAGE } from "../constants/ApiConstants";
import { handleImage } from "../utils";

function Home() {
  const { data: profile, isLoading, callback: getProfile } = useAxiosCallback();
  let navigate = useNavigate();

  useEffect(() => {
    getProfile(
      {
        method: "GET",
        url: GET_PROFILE,
        error: (err) => {
          navigate("/404");
        },
      },
      "profile"
    );
  }, []);

  return (
    <>
      <ScriptLoad />
      
      {isLoading || !profile ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <link rel="icon" href={handleImage(GET_IMAGE, profile.avatar?.name)} />
            <title>
              {profile.name} - {APP_NAME}
            </title>
            <meta
              name="description"
              content={profile.short_description}
            />
            <link rel="apple-touch-icon" href="/logo.png" />
          </Helmet>
          <Navbar data={profile} />
          <HeroSection data={profile} />
          <AboutSection data={profile} />
          <ResumeSection type="experience" disableDownload cv={profile.cv} />
          <ResumeSection type="education" cv={profile.cv} />
          <ServicesSection />
          <SkillsSection />
          <ProjectSection />
          {/* <BlogSection /> */}
          <CounterSection />
          <Hireme />
          <ContactSection data={profile} />
          <Footer data={profile} />
        </>
      )}
    </>
  );
}

export default Home;
