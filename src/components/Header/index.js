import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import IconBrasil from "./../../assets/brasil.png";
import PDFResumePT from "../../services/pt-BR_resume.pdf";
import PDFResumeEN from "../../services/en_resume.pdf";
import IconEUA from "./../../assets/eua.png";
import * as Styled from "./style";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const [active, setActive] = useState("about_me");

  const handleOnClick = (e) => {
    const name = e.target.name;
    setActive(name);
    scrollToSection(name);
    closeMenu();
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView();
    }
  };

  const closeMenu = () => setOpenMenu(false);

  const changeLangTo = (lang) => i18n.changeLanguage(lang);

  const items = ["about_me", "projects", "education", "skills", "contacts"];

  const resume = {
    "pt-BR": PDFResumePT,
    en: PDFResumeEN,
  };

  return (
    <header>
      <Styled.Menu openMenu={openMenu}>
        <Styled.Logo onClick={() => setOpenMenu(!openMenu)}>
          {t("initials")}
        </Styled.Logo>
        <Styled.I18nContainer>
          <Styled.BtnI18n
            title={t("translate.pt")}
            aria-label={t("translate.pt")}
            onClick={() => changeLangTo("pt-BR")}
          >
            <img
              src={IconBrasil}
              alt={t("translate.alt.pt")}
              width="24"
              height="24"
            />
          </Styled.BtnI18n>
          <Styled.BtnI18n
            title={t("translate.en")}
            aria-label={t("translate.en")}
            onClick={() => changeLangTo("en")}
          >
            <img
              src={IconEUA}
              alt={t("translate.alt.en")}
              width="24"
              height="24"
            />
          </Styled.BtnI18n>
        </Styled.I18nContainer>
        <Styled.List className={!openMenu && 'closed'}>
          {items.map((item, index) => (
            <Styled.ItemList
              key={index}
              active={active === item}
              onClick={handleOnClick}
              name={item}
            >
              {t(`menu.${item}`)}
            </Styled.ItemList>
          ))}
        </Styled.List>
      </Styled.Menu>

      <Styled.Main openMenu={openMenu}>
        <Styled.Hello>{t("welcome.hello")}</Styled.Hello>
        <Styled.Description>
          <Trans
            i18nKey="welcome.message"
            defaults={t("welcome.message")}
            components={{
              span: <span />,
            }}
          />
        </Styled.Description>
        <Styled.Author>{t("author")}</Styled.Author>
        <Styled.Download>
          {/* Não há casos de cvs indisponíveis por idioma */}
          <Styled.Link href={resume[i18n.language]} disabled={false}>
            {t("welcome.resume")}
          </Styled.Link>
        </Styled.Download>
      </Styled.Main>
    </header>
  );
};

export default Header;
