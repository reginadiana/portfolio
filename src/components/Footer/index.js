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
import { socialMedia } from "../../services/links";

const Footer = () => (
  <Styled.Container id="contatos">
    <Styled.IconToUp href="#main">
      <UpCircleFilled />
    </Styled.IconToUp>

    <Styled.Logo>DR</Styled.Logo>
    <Styled.Title>Redes Sociais</Styled.Title>

    <Styled.Icons>
      <Styled.Icon href={socialMedia.github}>
        <GithubOutlined />
      </Styled.Icon>

      <Styled.Icon href={socialMedia.linkedin}>
        <LinkedinOutlined />
      </Styled.Icon>

      <Styled.Icon href={socialMedia.medium}>
        <MediumOutlined />
      </Styled.Icon>

      <Styled.Icon href={socialMedia.instagram}>
        <InstagramOutlined />
      </Styled.Icon>

      <Styled.Icon href={socialMedia.dev}>
        <BookOutlined />
      </Styled.Icon>
    </Styled.Icons>
    <p>
      Copyright ©2020 All rights reserved | This website was developed by Diana
      Regina
    </p>
  </Styled.Container>
);

export default Footer;
