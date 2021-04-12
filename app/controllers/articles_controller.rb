class ArticlesController < ApplicationController

  def show
    # @ means it will be an instance variable, meaning it will be passed down to the view.
    # /articles/:id
    @article = Article.find(params[:id])
  end

end
