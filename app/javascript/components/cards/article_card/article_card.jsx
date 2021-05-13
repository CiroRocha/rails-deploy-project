import React from 'react'

import { Link } from 'react-router-dom'

const ArticleCard = ({ article }) => {
  return (
    <div>
      <h5>{ article.title }</h5>
      <p>{ article.description.substr(0, 50) }</p>
      <Link to={`/articles/${ article.id }`} >Show</Link>
      <Link to={`/articles/${ article.id }/edit`} >Edit</Link>
      <Link to={`/articles/${ article.id }/delete`} >Delete</Link>
      {/* <%= link_to 'Show', article_path(article.id) %><!--, method: :get -->
      <%= link_to 'Edit', edit_article_path(article.id) %><!--, method: :get -->
      <%=
        link_to 'Delete',
        article_path(article.id),
        method: :delete,
        data: { confirm: "Delete article \"" + article.title + "\"?" }
      %> */}
    </div>
  )
}

export default ArticleCard
