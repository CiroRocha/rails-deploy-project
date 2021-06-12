import React from 'react'
import Link from 'next/link'

import { getCreateArticlePath } from '../../../lib/requestsLib'
import { StyledNavigation } from './StyledNavigation'
import CommonButton from '../../../components/Buttons/CommonButton/CommonButton'

const Navigation = ({ links = [] }) => {
  return (
    <StyledNavigation>
      {links.map((link, index) => {
        return (
          <Link href={link.href} key={index}>
            <a>{link.content}</a>
          </Link>
        )
      })}
      <Link href={getCreateArticlePath()}>
        <CommonButton backgroundColor="green" margin="0 0 0 16px">
          Create a new article
        </CommonButton>
      </Link>
    </StyledNavigation>
  )
}

export default Navigation
