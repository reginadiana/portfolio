import React, { useState } from "react";
import Education from "@components/Education/index";
import Projects from "@components/Projects/index";
import Articles from "@components/Articles/index";
import AboutMe from "@components/AboutMe/index";
import Contact from "@components/Contact/index";
import Spinner from "@components/Spinner/index";
import Header from "@components/Header/index";
import Skills from "@components/Skills/index";
import Footer from "@components/Footer/index";
import Lives from "@components/Lives/index";
import "./style.css";

const TIME_LOADING_MILLISECONDS = 1000;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), TIME_LOADING_MILLISECONDS);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <AboutMe />
          <Projects />
          <Lives />
          <Articles />
          <Education />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
