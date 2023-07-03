import React from 'react'
import TitleSection from '../TitleSection/index'
import * as Styled from './style'
import { link } from '@services/links'
import { Carousel } from 'antd'

import ImgBootcampReact from '@assets/publis/bootcamp-react.png'
import ImgWomakersCodeLive from '@assets/publis/womakerscode-live.png'
import ImgTreinaDev5 from '@assets/publis/treina-dev-5.png'
import ImgTreinaDev9 from '@assets/publis/treina-dev-9.png'
import ImgTreinaDev9Meet from '@assets/publis/treina-dev-9-meet.png'

import { Image } from 'antd'

const Publis = () => {
  return (
    <Styled.Section id="publis">
      <TitleSection
        title='Publicações'
        description='Publicações mencionadas'
        invertedTheme
      />

      <Styled.Container>
        <Styled.Images className="desktop">
          <div style={{ display: 'flex' }}>
            <a href={link.treina_dev_delas} target="_blank" rel="noreferrer">
              <Image className="w-300" preview={false} src={ImgTreinaDev9} />
            </a>

            <a href={link.treina_dev_5} target="_blank" rel="noreferrer">
              <Image className="w-300" preview={false} src={ImgTreinaDev5} />
            </a>

            <a href={link.treina_dev_visit} target="_blank" rel="noreferrer">
              <Image
                className="w-300"
                preview={false}
                src={ImgTreinaDev9Meet}
              />
            </a>
          </div>

          <div style={{ display: 'flex' }}>
            <a href={link.womakerscode_live} target="_blank" rel="noreferrer">
              <Image className="w-200" preview={false} src={ImgBootcampReact} />
            </a>

            <a href={link.readme_live} target="_blank" rel="noreferrer">
              <Image
                className="w-200"
                preview={false}
                src={ImgWomakersCodeLive}
              />
            </a>
          </div>
        </Styled.Images>
        <Carousel className="mobile">
          <a href={link.treina_dev_delas} target="_blank" rel="noreferrer">
            <Image preview={false} src={ImgTreinaDev9} />
          </a>

          <a href={link.treina_dev_5} target="_blank" rel="noreferrer">
            <Image preview={false} src={ImgTreinaDev5} />
          </a>

          <a href={link.treina_dev_visit} target="_blank" rel="noreferrer">
            <Image preview={false} src={ImgTreinaDev9Meet} />
          </a>
        </Carousel>
      </Styled.Container>
    </Styled.Section>
  )
}

export default Publis
