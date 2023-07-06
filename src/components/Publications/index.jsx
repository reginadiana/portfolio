import React from 'react'
import Title from '@ui/Title'
import * as Styled from './style'
import { Carousel } from 'antd'

import ImgBootcampReact from '@assets/images/publications/bootcamp-react.png'
import ImgWomakersCodeLive from '@assets/images/publications/womakerscode-live.png'
import ImgTreinaDev5 from '@assets/images/publications/treina-dev-5.png'
import ImgTreinaDev9 from '@assets/images/publications/treina-dev-9.png'
import ImgTreinaDev9Meet from '@assets/images/publications/treina-dev-9-meet.png'

import { Image } from 'antd'

const Publications = () => {
  return (
    <Styled.Section id="publications">
      <Title
        title='Publicações'
        description='Publicações mencionadas'
        invertedTheme
      />

      <Styled.Container>
        <Styled.Images className="desktop">
          <div style={{ display: 'flex' }}>
            <a href='https://www.instagram.com/p/CffMA3gvrMc/' target="_blank" rel="noreferrer">
              <Image className="w-300" preview={false} src={ImgTreinaDev9} />
            </a>

            <a href='https://www.instagram.com/p/CGitDfqgEn1/' target="_blank" rel="noreferrer">
              <Image className="w-300" preview={false} src={ImgTreinaDev5} />
            </a>

            <a href='https://www.instagram.com/p/ClPI0KsAdbw/' target="_blank" rel="noreferrer">
              <Image
                className="w-300"
                preview={false}
                src={ImgTreinaDev9Meet}
              />
            </a>
          </div>

          <div style={{ display: 'flex' }}>
            <a href='https://www.youtube.com/watch?v=K0mvk8zctoM' target="_blank" rel="noreferrer">
              <Image className="w-200" preview={false} src={ImgBootcampReact} />
            </a>

            <a href='https://www.youtube.com/watch?v=2A_ebBA3jzM' target="_blank" rel="noreferrer">
              <Image
                className="w-200"
                preview={false}
                src={ImgWomakersCodeLive}
              />
            </a>
          </div>
        </Styled.Images>
        <Carousel className="mobile">
          <a href='https://www.instagram.com/p/CffMA3gvrMc/' target="_blank" rel="noreferrer">
            <Image preview={false} src={ImgTreinaDev9} />
          </a>

          <a href='https://www.instagram.com/p/CGitDfqgEn1/' target="_blank" rel="noreferrer">
            <Image preview={false} src={ImgTreinaDev5} />
          </a>

          <a href='https://www.instagram.com/p/ClPI0KsAdbw/' target="_blank" rel="noreferrer">
            <Image preview={false} src={ImgTreinaDev9Meet} />
          </a>
        </Carousel>
      </Styled.Container>
    </Styled.Section>
  )
}

export default Publications
