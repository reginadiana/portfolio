import React from "react";
import { PhoneFilled } from "@ant-design/icons";
import { Container, Title } from "./style";

function Contact(props) {
  return (
    <Container>
      <Title>
        Fale comigo <PhoneFilled />
      </Title>
      <h3>dianaregina22@outlook.com.br</h3>
      <h3>(11) 954660546</h3>
    </Container>
  );
}

export default Contact;
