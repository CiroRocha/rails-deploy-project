import React from 'react'
import Link from 'next/link'

import { StyledHelloPage } from './StyledHelloPage'

const HelloPage = ({ title, secondaryMessage }) => {
  return (
    <StyledHelloPage>
      <div className="content-container">
        <h1>{title}</h1>
        <div className="divider" />
        <span>{secondaryMessage}</span>
        <div className="link-container">
          <Link href="/articles">See all articles</Link>
          <Link href="/article/new">Create an article</Link>
        </div>
      </div>
    </StyledHelloPage>
  )
}

export default HelloPage
