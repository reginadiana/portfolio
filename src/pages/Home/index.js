import React, { useState } from "react";
import Education from "../../components/Education/index";
import Projects from "../../components/Projects/index";
import Articles from "../../components/Articles/index";
import AboutMe from "../../components/AboutMe/index";
import Contact from "../../components/Contact/index";
import Spinner from "../../components/Spinner/index";
import Header from "../../components/Header/index";
import Skills from "../../components/Skills/index";
import Footer from "../../components/Footer/index";
import Lives from "../../components/Lives/index";
import "./style.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const timeToLoader = 1000; /* milliseconds */

  setTimeout(() => setLoading(false), timeToLoader);

  return (
    <>
      {loading ? (
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
