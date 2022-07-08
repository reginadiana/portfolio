import React from "react";
import { MailOutlined } from "@ant-design/icons";
import * as Styled from "./style";

const Contact = () => (
  <Styled.Section>
    <Styled.Title>
      Fale comigo <MailOutlined />
    </Styled.Title>
    <a href="mailto:dianaregina22@outlook.com.br">
      dianaregina22@outlook.com.br
    </a>
  </Styled.Section>
);

export default Contact;
