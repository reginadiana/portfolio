import React, { useState } from "react";
import { Modal, Button } from "antd";
import * as Styled from "./style";

const Card = ({ project, src, alt }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
    <Styled.Container>
      <Styled.Title>{project.title}</Styled.Title>
      <Styled.Description>{project.description}</Styled.Description>
      <Button
        type="primary"
        danger
        disabled={!project.link}
        onClick={() => handleRedirect(project.link)}
      >
        Artigo Completo
      </Button>
      {/* <Modal
        title={project.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            type="primary"
            danger
            disabled={!project.link}
            onClick={() => handleRedirect(project.link)}
          >
            Acessar Live
          </Button>,
        ]}
      >
        <Styled.Description>{project.description}</Styled.Description>
      </Modal>
      <Styled.Img alt={alt} src={src} onClick={showModal} /> */}
    </Styled.Container>
  );
};

export default Card;
