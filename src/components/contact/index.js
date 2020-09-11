import React from 'react';
import { PhoneFilled } from '@ant-design/icons'; 
import { Container, Title, Email, Phone } from './style'

function Contact(props) {
  return(
    <Container>
      <Title>Fale comigo <PhoneFilled /></Title>
      <Email>dianaregina22@outlook.com.br</Email>
      <Phone>(11) 954660546</Phone>
    </Container>
  );
}

export default Contact;