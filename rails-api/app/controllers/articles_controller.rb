class ArticlesController < ApplicationController

  # The line bellow tells Ruby to run "find_article_by_id" method before the methods listed execute.
  before_action :find_article_by_id, only: [:show, :edit, :update, :destroy]

  private

  def find_article_by_id
    @article = Article.find(params[:id])
  rescue ActiveRecord::RecordNotFound => err
    render json: {
      error: err.to_s
    }, status: :not_found
  end

  def create_article_from_params
    params.permit(:title, :description)
    return article_data = {
      title: params[:title],
      description: params[:description]
    }
  end

  public

  def index
    @articles = Article.all
    return render json: @articles
  end

  def show
    user = @article.user
    render json: {
      article: @article,
      user: user
  }
  end

  def create
    @article = Article.new(create_article_from_params)
    if @article.save
      render json: @article, :status => :created
    else
      render json: { error: @article.errors }, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @article.update(create_article_from_params)
      render json: @article
    end
  end

  def destroy
    if @article.destroy
      return :status => :no_content
    end
    return :status => :internal_server_error
  end

end
