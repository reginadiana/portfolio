import React from "react";
import { useTranslation } from "react-i18next";
import { link } from "../../services/links";
import * as Styled from "./style";
import "antd/dist/antd.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  MediumOutlined,
  InstagramOutlined,
  BookOutlined,
  UpCircleFilled,
} from "@ant-design/icons";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Styled.Footer id="contatos">
      <Styled.IconToUp href="#root" title="Voltar para o inicio">
        <UpCircleFilled />
      </Styled.IconToUp>

      <Styled.Logo>DR</Styled.Logo>
      <Styled.Title>Redes Sociais</Styled.Title>

      <Styled.Icons>
        <Styled.Icon
          href={link.github}
          target="_blank"
          title="Ir para o meu perfil no Github"
        >
          <GithubOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.linkedin}
          target="_blank"
          title="Ir para o meu perfil no Linkedin"
        >
          <LinkedinOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.medium}
          target="_blank"
          title="Ir para o meu perfil no Medium"
        >
          <MediumOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.instagram}
          target="_blank"
          title="Ir para o meu perfil no Instagram"
        >
          <InstagramOutlined />
        </Styled.Icon>

        <Styled.Icon
          href={link.dev}
          target="_blank"
          title="Ir para o meu perfil no Dev."
        >
          <BookOutlined />
        </Styled.Icon>
      </Styled.Icons>
      <p>
        Copyright © 2020 - 2022 Todos os direitos reservados | Este site foi
        desenvolvido por
        <br />
        <Styled.Author
          href={link.linkedin}
          target="_blank"
          title="Ir para o meu perfil no linkedin"
        >
          Diana Regina
        </Styled.Author>
      </p>
    </Styled.Footer>
  );
};

export default Footer;
