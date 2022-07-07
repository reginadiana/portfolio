import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/index";
import AboutMe from "./components/AboutMe/index";
import Skills from "./components/Skills/index";
import Education from "./components/Education/index";
import Projects from "./components/Projects/index";
import Lives from "./components/Lives/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";
import Spinner from "./components/Spinner/index";

const App = () => {
  const [loading, setLoading] = useState(true);
  let timeToLoader = 1000; /* milliseconds */

  setTimeout(() => setLoading(false), timeToLoader);

  return (
    <div id="main">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <AboutMe />
          <Projects />
          <Lives />
          <Education />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
