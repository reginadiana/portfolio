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
import { Container, IconToUp, Logo, Title, Icons, Icon } from "./style";
import { socialMedia } from "../../services/links";

const Footer = () => (
  <Container id="contatos">
    <IconToUp href="#main">
      <UpCircleFilled />
    </IconToUp>
    <Logo>DR</Logo>
    <Title>Follow Me</Title>
    <Icons>
      <Icon href={socialMedia.github}>
        <GithubOutlined />
      </Icon>
      <Icon href={socialMedia.linkedin}>
        <LinkedinOutlined />
      </Icon>
      <Icon href={socialMedia.medium}>
        <MediumOutlined />
      </Icon>
      <Icon href={socialMedia.instagram}>
        <InstagramOutlined />
      </Icon>
      <Icon href={socialMedia.dev}>
        <BookOutlined />
      </Icon>
    </Icons>
    <p>
      Copyright ©2020 All rights reserved | This website was developed by Diana
      Regina
    </p>
  </Container>
);

export default Footer;
