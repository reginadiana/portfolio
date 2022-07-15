import React from "react";
import TitleSection from "../TitleSection/index";
import { useTranslation } from "react-i18next";
import { link } from "../../services/links";
import * as Styled from "./style";

const Education = () => {
  const { t } = useTranslation();

  return (
    <Styled.Section id="education">
      <TitleSection
        title={t("education.title")}
        description={t("education.description")}
      />
      <Styled.Cards>
        <Styled.Card>
          <Styled.Info>
            <div>
              <Styled.Title>
                {t("education.eletronic_collage.title")}
              </Styled.Title>
              <Styled.Location href={link.etec}>
                {t("education.eletronic_collage.location")}
              </Styled.Location>
            </div>
            <Styled.Date>{t("education.eletronic_collage.date")}</Styled.Date>
          </Styled.Info>
          <Styled.Description>
            {t("education.eletronic_collage.description")}
          </Styled.Description>
        </Styled.Card>

        <Styled.Card>
          <Styled.Info>
            <div>
              <Styled.Title>
                {t("education.mecatronic_collage.title")}
              </Styled.Title>
              <Styled.Location href={link.fatec}>
                {t("education.mecatronic_collage.location")}
              </Styled.Location>
            </div>
            <Styled.Date>{t("education.mecatronic_collage.date")}</Styled.Date>
          </Styled.Info>
          <Styled.Description>
            {t("education.mecatronic_collage.description")}
          </Styled.Description>
        </Styled.Card>

        <Styled.Card>
          <Styled.Info>
            <div>
              <Styled.Title>{t("education.eletronic_job.title")}</Styled.Title>
              <Styled.Location href={link.etec}>
                {t("education.eletronic_job.location")}
              </Styled.Location>
            </div>
            <Styled.Date>{t("education.eletronic_job.date")}</Styled.Date>
          </Styled.Info>
          <Styled.Description>
            {t("education.eletronic_job.description")}
          </Styled.Description>
        </Styled.Card>

        <Styled.Card>
          <Styled.Info>
            <div>
              <Styled.Title>{t("education.monitor.title")}</Styled.Title>
              <Styled.Location href={link.fatec}>
                {t("education.monitor.location")}
              </Styled.Location>
            </div>
            <Styled.Date>{t("education.monitor.date")}</Styled.Date>
          </Styled.Info>
          <Styled.Description>
            {t("education.monitor.description")}
          </Styled.Description>
        </Styled.Card>

        <Styled.Card>
          <Styled.Info>
            <div>
              <Styled.Title>{t("education.womakerscode.title")}</Styled.Title>
              <Styled.Location href={link.womakerscode}>
                {t("education.womakerscode.location")}
              </Styled.Location>
            </div>
            <Styled.Date>{t("education.womakerscode.date")}</Styled.Date>
          </Styled.Info>
          <Styled.Description>
            {t("education.womakerscode.description")}
          </Styled.Description>
        </Styled.Card>

        <Styled.Card>
          <Styled.Info>
            <div>
              <Styled.Title>{t("education.dev.title")}</Styled.Title>
              <Styled.Location href={link.campus}>
                {t("education.dev.location")}
              </Styled.Location>
            </div>
            <Styled.Date>{t("education.dev.date")}</Styled.Date>
          </Styled.Info>
          <Styled.Description>
            {t("education.dev.description")}
          </Styled.Description>
        </Styled.Card>

        <Styled.Card>
          <Styled.Info>
            <div>
              <Styled.Title>{t("education.rebase.title")}</Styled.Title>
              <Styled.Location href={link.rebase}>
                {t("education.rebase.location")}
              </Styled.Location>
            </div>
            <Styled.Date>{t("education.rebase.date")}</Styled.Date>
          </Styled.Info>
          <Styled.Description>
            {t("education.rebase.description")}
          </Styled.Description>
        </Styled.Card>
      </Styled.Cards>
    </Styled.Section>
  );
};

export default Education;
