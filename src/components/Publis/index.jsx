import React from 'react';
import TitleSection from '../TitleSection/index';
import { useTranslation } from 'react-i18next';
import * as Styled from './style';

import ImgTreinaDev5 from "@assets/publis/treina-dev-5.png";
import ImgTreinaDev9 from "@assets/publis/treina-dev-9.png";
import ImgTreinaDev9Meet from "@assets/publis/treina-dev-9-meet.png";

import { Image } from 'antd';

const Publis = () => {
  const { t } = useTranslation();

  return (
    <Styled.Section id="publis">
      <TitleSection
        title={'Publicações'}
        description={'Publicações mencionadas'}
        invertedTheme
      />

      <Styled.Images>
        <Image
          width={300}
          src={ImgTreinaDev9}
        />

        <Image
          width={300}
          src={ImgTreinaDev5}
        />

        <Image
          width={300}
          src={ImgTreinaDev9Meet}
        />
      </Styled.Images>
    </Styled.Section>
  );
};

export default Publis;
