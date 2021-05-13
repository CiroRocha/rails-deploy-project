import React from 'react'

import { StyledNavigation } from './navigation.styled'

const Navigation = ({ links, new_article_path }) => {
  return (
    <StyledNavigation>
      {links.map((link, index) => {
        return <a href={ link.href } aria-labelledby={ link.aria || link.title } key={ index } >{ link.title }</a>
      })}
      <a href={new_article_path} className='new-article' aria-labelledby='New article' >Write something great</a>
    </StyledNavigation>
  )
}

export default Navigation
