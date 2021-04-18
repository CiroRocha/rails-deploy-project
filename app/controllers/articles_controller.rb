class ArticlesController < ApplicationController

  def index
    @articles = Article.all
  end

  def show
    # @ means it will be an instance variable, meaning it will be passed down to the view.
    # /articles/:id
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new
  end

  def create
    params.permit(:title, :description)
    article_data = {
      title: params[:title],
      description: params[:description]
    }
    @article = Article.new(article_data)
    if @article.save
      flash[:notice] = "Article saved successfully"
      redirect_to article_path(@article)
    else
      render 'new'
    end
  end

end
