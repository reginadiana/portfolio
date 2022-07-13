import React from "react";
import { MailOutlined } from "@ant-design/icons";
import * as Styled from "./style";

const Contact = () => (
  <Styled.Section>
    <Styled.Title>
      Fale comigo <MailOutlined />
    </Styled.Title>
    <Styled.Email href="mailto:dianaregina22@outlook.com.br">
      dianaregina22@outlook.com.br
    </Styled.Email>
  </Styled.Section>
);

export default Contact;
