import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/index";
import AboutMe from "./components/AboutMe/index";
import Skills from "./components/Skills/index";
import Education from "./components/Education/index";
import Portfolio from "./components/Portfolio/index";
import Others from "./components/Others/index";
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
          <Portfolio />
          <Others />
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
