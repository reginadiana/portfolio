import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import AboutMe from "./components/AboutMe/index";
import Skills from "./components/Skills/index";
import Education from "./components/Education/index";
import Portfolio from "./components/Portfolio/index";
import Contact from "./components/Contact/index";
import Footer from "./components/Footer/index";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { withTranslation } from "react-i18next";
import pt from "./locales/en/translation.json";
import Spinner from "./components/Spinner/index";

const resources = {
  pt: {
    common: pt["pt-BR"],
  },
};

i18next.init({
  resources,
});

const App = ({ t }) => (
  <div id="main">
    <Spinner />
    {/* <I18nextProvider i18n={i18next}>
      <Header />
      <AboutMe />
      <Portfolio />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </I18nextProvider> */}
  </div>
);

export default withTranslation()(App);
