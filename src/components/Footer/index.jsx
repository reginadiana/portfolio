import React from "react";
import { useTranslation } from "react-i18next";
import { link } from "@services/links";
import * as Styled from "./style";
import {
  GithubOutlined,
  LinkedinOutlined,
  MediumOutlined,
  InstagramOutlined,
  BookOutlined,
} from "@ant-design/icons";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Styled.Footer id="contacts">
      <Styled.Logo>{t("initials")}</Styled.Logo>
      <Styled.Title>{t("social.title")}</Styled.Title>

      <Styled.Icons>
        <Styled.Icon
          href={link.github}
          target="_blank"
          rel="noreferrer"
          title={t("social.access.github")}
        >
          <GithubOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.linkedin}
          target="_blank"
          rel="noreferrer"
          title={t("social.access.linkedin")}
        >
          <LinkedinOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.medium}
          target="_blank"
          rel="noreferrer"
          title={t("social.access.mediumn")}
        >
          <MediumOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.instagram}
          target="_blank"
          rel="noreferrer"
          title={t("social.access.instagram")}
        >
          <InstagramOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.dev}
          target="_blank"
          rel="noreferrer"
          title={t("social.access.dev")}
        >
          <BookOutlined />
        </Styled.Icon>
      </Styled.Icons>
      <p>
        {t("footer.copyright")}
        <br />
        <Styled.Author
          href={link.linkedin}
          target="_blank"
          rel="noreferrer"
          title={t("social.access.linkedin")}
        >
          {t("author")}
        </Styled.Author>
      </p>
    </Styled.Footer>
  );
};

export default Footer;
