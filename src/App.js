import React from "react";
import "./App.css";
import Header from "./components/header/index";
import AboutMe from "./components/about_me/index";
import Skills from "./components/skills/index";
import Education from "./components/education/index";
import Portfolio from "./components/portfolio/index";
import Contact from "./components/contact/index";
import Footer from "./components/footer/index";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { withTranslation } from "react-i18next";
import pt from "./locales/en/translation.json";

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
    <I18nextProvider i18n={i18next}>
      <Header />
      <AboutMe />
      <Portfolio />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </I18nextProvider>
  </div>
);

export default withTranslation()(App);
