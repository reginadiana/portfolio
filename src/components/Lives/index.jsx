import React from 'react'
import TitleSection from '../TitleSection/index'
import { portfolio } from '@services/links'
import { useTranslation } from 'react-i18next'
import * as Styled from './style'
import Card from './Card'

const Lives = () => {
  const { t } = useTranslation()

  return (
    <Styled.Section id="lives">
      <TitleSection
        title={t('lives.title')}
        description={t('lives.description')}
      />
      <Styled.Cards>
        {portfolio.lives.map((live, index) => (
          <Card key={index} live={live} />
        ))}
      </Styled.Cards>
    </Styled.Section>
  )
}

export default Lives
