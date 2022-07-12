import React from "react";
import "antd/dist/antd.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  MediumOutlined,
  InstagramOutlined,
  BookOutlined,
  UpCircleFilled,
} from "@ant-design/icons";
import * as Styled from "./style";
import { link } from "../../services/links";

const Footer = () => (
  <Styled.Footer id="contatos">
    <Styled.IconToUp href="#root">
      <UpCircleFilled />
    </Styled.IconToUp>

    <Styled.Logo>DR</Styled.Logo>
    <Styled.Title>Redes Sociais</Styled.Title>

    <Styled.Icons>
      <Styled.Icon href={link.github} target="_blank">
        <GithubOutlined />
      </Styled.Icon>

      <Styled.Icon href={link.linkedin} target="_blank">
        <LinkedinOutlined />
      </Styled.Icon>

      <Styled.Icon href={link.medium} target="_blank">
        <MediumOutlined />
      </Styled.Icon>

      <Styled.Icon href={link.instagram} target="_blank">
        <InstagramOutlined />
      </Styled.Icon>

      <Styled.Icon href={link.dev} target="_blank">
        <BookOutlined />
      </Styled.Icon>
    </Styled.Icons>
    <p>
      Copyright © 2020 - 2022 Todos os direitos reservados | Este site foi
      desenvolvido por
      <br />
      <a href="https://www.linkedin.com/in/diana-regina/">Diana Regina</a>
    </p>
  </Styled.Footer>
);

export default Footer;
