import React from 'react'
import { Trans } from 'react-i18next'
import * as Styled from './style'

const Copyright = () => {
  return (
    <Styled.Copyright>
      <p>
        <Trans i18nKey="copyright" components={{ a: <a /> }} />
      </p>
    </Styled.Copyright>
  )
}

export default Copyright
