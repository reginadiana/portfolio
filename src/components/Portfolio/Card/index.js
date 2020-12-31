import React, { useState } from "react";
import { Img } from "../../Portfolio/style";
import { Modal, Button } from "antd";
import * as Styled from "./style";
import { themes } from "../../../themes";

const Card = ({ redirect, src, alt }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleRedirect = ({ path }) => {
    setIsModalVisible(false);

    if (path === "github")
      return (window.location.href =
        "https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator");

    if (path === "deploy")
      return (window.location.href =
        "https://certificates-for-everyone-womakerscode.netlify.app/");
  };

  return (
    <>
      <Modal
        title={"Certificates for Everyone"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button danger onClick={() => handleRedirect({ path: "github" })}>
            Ver no Gihub
          </Button>,
          <Button
            type="primary"
            danger
            onClick={() => handleRedirect({ path: "deploy" })}
          >
            Deploy
          </Button>,
        ]}
      >
        <Styled.Description>
          Uma plataforma para gerar certificados em PDF para participantes de
          eventos
        </Styled.Description>
        <Styled.Tags>
          <Styled.Tag color={themes.colors.orange}>html</Styled.Tag>
          <Styled.Tag color={themes.colors.orange}>css</Styled.Tag>
          <Styled.Tag color={themes.colors.orange}>javascript</Styled.Tag>
          <Styled.Tag color={themes.colors.orange}>react</Styled.Tag>
          <Styled.Tag color={themes.colors.orange}>react pdf</Styled.Tag>
          <Styled.Tag color={themes.colors.orange}>react router</Styled.Tag>
          <Styled.Tag color={themes.colors.orange}>antdesign</Styled.Tag>
          <Styled.Tag color={themes.colors.orange}>reactjs popup</Styled.Tag>
          <Styled.Tag color={themes.colors.orange}>
            react signature canvas
          </Styled.Tag>
          <Styled.Tag color={themes.colors.orange}>react spinkit</Styled.Tag>
        </Styled.Tags>
      </Modal>
      <Img alt={alt} src={src} onClick={showModal} />
    </>
  );
};

export default Card;
