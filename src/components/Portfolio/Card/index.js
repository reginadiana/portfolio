import React, { useState } from "react";
import { Img } from "../../Portfolio/style";
import { Modal, Button } from "antd";
import * as Styled from "./style";
import { themes } from "../../../themes";

const Card = ({ project, src, alt }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log(project.title);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleRedirect = (path) => {
    setIsModalVisible(false);

    window.location.href = path;
  };

  return (
    <>
      <Modal
        title={project.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button danger onClick={() => handleRedirect(project.github)}>
            Ver no Gihub
          </Button>,
          <Button
            type="primary"
            danger
            disabled={!project.deploy}
            onClick={() => handleRedirect(project.deploy)}
          >
            Deploy
          </Button>,
        ]}
      >
        <Styled.Description>{project.description}</Styled.Description>
        <Styled.Tags>
          {project.techs.map((tech) => (
            <Styled.Tag color={themes.colors.orange}>{tech}</Styled.Tag>
          ))}
        </Styled.Tags>
      </Modal>
      <Img alt={alt} src={src} onClick={showModal} />
    </>
  );
};

export default Card;
