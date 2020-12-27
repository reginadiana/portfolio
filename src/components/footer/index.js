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
import { GITHUB, MEDIUM, LINKEDIN, DEV, INSTAGRAM } from "../../links";

const Footer = () => (
  <Container id="contatos">
    <IconToUp href="#main">
      <UpCircleFilled />
    </IconToUp>
    <Logo>DR</Logo>
    <Title>Follow Me</Title>
    <Icons>
      <Icon href={GITHUB}>
        <GithubOutlined />
      </Icon>
      <Icon href={LINKEDIN}>
        <LinkedinOutlined />
      </Icon>
      <Icon href={MEDIUM}>
        <MediumOutlined />
      </Icon>
      <Icon href={INSTAGRAM}>
        <InstagramOutlined />
      </Icon>
      <Icon href={DEV}>
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
