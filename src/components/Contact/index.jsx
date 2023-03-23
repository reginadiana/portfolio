import React from "react";
import { MailOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { email } from "@services/links";
import * as Styled from "./style";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Styled.Section>
      <Styled.Title>
        {t("talk_to_me")} <MailOutlined />
      </Styled.Title>
      <Styled.Email href={`mailto:${email}`}>{email}</Styled.Email>
    </Styled.Section>
  );
};

export default Contact;
