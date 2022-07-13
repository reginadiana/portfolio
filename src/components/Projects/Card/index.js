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
      <Styled.Tags>
        {project.techs.map((tech, key) => (
          <Styled.Tag key={key}>{tech}</Styled.Tag>
        ))}
      </Styled.Tags>
      <div className="actions">
        <Button danger onClick={() => handleRedirect(project.github)}>
          Ver no Gihub
        </Button>
        ,
        <Button
          type="primary"
          danger
          disabled={!project.deploy}
          onClick={() => handleRedirect(project.deploy)}
        >
          Deploy
        </Button>
      </div>
      {/* <Modal
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
          {project.techs.map((tech, key) => (
            <Styled.Tag key={key}>{tech}</Styled.Tag>
          ))}
        </Styled.Tags>
      </Modal>
      <Styled.Img alt={alt} src={src} onClick={showModal} /> */}
    </Styled.Container>
  );
};

export default Card;
