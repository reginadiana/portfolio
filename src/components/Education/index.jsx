import React from "react";
import TitleSection from "../TitleSection/index";
import { useTranslation } from "react-i18next";
import { link } from "@services/links";
import * as Styled from "./style";

const Education = () => {
  const { t } = useTranslation();

  const educations = [
    {
      title: "eletronic_collage",
      link: link.etec,
      current: false,
    },
    {
      title: "mecatronic_collage",
      link: link.fatec,
      current: false,
    },
    {
      title: "eletronic_job",
      link: link.etec,
      current: false,
    },
    {
      title: "monitor",
      link: link.fatec,
      current: false,
    },
    {
      title: "womakerscode",
      link: link.womakerscode,
      current: false,
    },
    {
      title: "dev",
      link: link.campus,
      current: false,
    },
    {
      title: "rebase",
      link: link.rebase,
      current: true,
    },
  ];

  return (
    <Styled.Section id="education">
      <TitleSection
        title={t("education.title")}
        description={t("education.description")}
      />
      <Styled.Cards>
        {educations.map(({ title, link, current }, index) => (
          <Styled.Card key={index} current={current}>
            <div>
                <Styled.Title>{t(`education.${title}.title`)}</Styled.Title>
                <Styled.Location href={link}>
                  {t(`education.${title}.location`)}
                </Styled.Location>
                <p>{t(`education.${title}.date`)}</p>
            </div>
            <Styled.Description>
              {t(`education.${title}.description`)}
            </Styled.Description>
          </Styled.Card>
        ))}
      </Styled.Cards>
    </Styled.Section>
  );
};

export default Education;
