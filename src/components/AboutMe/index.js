import React from "react";

import AboutWebsite from "@assets/about/site.jpeg";
import AboutMeImg from "@assets/about/me.jpeg";

import { useTranslation, Trans } from "react-i18next";
import TitleSection from "../TitleSection/index";
import * as Styled from "./style";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Styled.Section id="about_me">
      <Styled.Img src={AboutMeImg} alt={t("about.me.alt")} />
      <div>
        <TitleSection
          title={t("about.me.title")}
          description={t("about.me.description")}
        />
        <Styled.Paragraphy>
          <Trans
            i18nKey="about.me.p_1"
            defaults={t("about.me.p_1")}
            components={{
              span: <span />,
            }}
          />
        </Styled.Paragraphy>
        <Styled.Paragraphy>{t("about.me.p_2")}</Styled.Paragraphy>
        <Styled.Paragraphy>
          <Trans
            i18nKey="about.me.p_3"
            defaults={t("about.me.p_3")}
            components={{
              span: <span />,
            }}
          />
        </Styled.Paragraphy>
      </div>

      <div>
        <TitleSection
          title={t("about.site.title")}
          description={t("about.site.description")}
        />
        <Styled.Paragraphy>
          <Trans
            i18nKey="about.site.p_1"
            defaults={t("about.site.p_1")}
            components={{
              span: <span />,
            }}
          />
        </Styled.Paragraphy>
        <Styled.Paragraphy>{t("about.site.p_2")}</Styled.Paragraphy>
        <Styled.Paragraphy>{t("about.site.p_3")}</Styled.Paragraphy>
      </div>
      <Styled.Img src={AboutWebsite} alt={t("about.site.alt")} />
    </Styled.Section>
  );
};

export default AboutMe;
