import React from 'react'
import { CodeSandboxOutlined } from '@ant-design/icons'
import TitleSection from '../TitleSection/index'
import { useTranslation } from 'react-i18next'
import * as Styled from './style'

const Skills = () => {
  const { t } = useTranslation()

  return (
    <Styled.Section id="skills">
      <TitleSection
        title={t("skills.title")}
        description={t("skills.description")}
      />

      <Styled.Title>Frontend</Styled.Title>
      <Styled.Cards>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.react.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.typescript.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.vue.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.html.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.css.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.javascript.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.antd.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.vimeo.title')}</Styled.Subtitle>
        </Styled.Card>
      </Styled.Cards>
      <Styled.Title>Backend</Styled.Title>
      <Styled.Cards>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.ruby.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.rails.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.elixir.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.phoenix.title')}</Styled.Subtitle>
        </Styled.Card>
      </Styled.Cards>

      <Styled.Title>Ferramentas</Styled.Title>

      <Styled.Cards className='last__card__g'>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.docker.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.git.title')}</Styled.Subtitle>
        </Styled.Card>
        <Styled.Card className='last__card'>
          <Styled.Icon>
            <CodeSandboxOutlined />
          </Styled.Icon>
          <Styled.Subtitle>{t('skills.aws.title')}</Styled.Subtitle>
        </Styled.Card>
      </Styled.Cards>
    </Styled.Section>
  )
}

export default Skills
