import React from 'react'
import { Typography } from 'antd'

import { theme } from '@theme'
import * as Styled from './style'

const { Title } = Typography

const SectionTitle = ({ title, description, invertedTheme = false }) => {
  return (
    <Styled.Container invertedTheme={invertedTheme}>
      <Title
        level={2}
        style={{
          color: invertedTheme && theme.color.white,
          textAlign: 'center'
        }}
      >
        {title}
      </Title>
      <Styled.Paragraphy>{description}</Styled.Paragraphy>
      <Styled.Line />
    </Styled.Container>
  )
}

export default SectionTitle
