class ArticlesController < ApplicationController

  # The line bellow tells Ruby to run "find_article_by_id" method before the methods listed execute.
  before_action :find_article_by_id, only: [:show, :edit, :update, :destroy]

  private

  def find_article_by_id
    @article = Article.find(params[:id])
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
  end

  def show
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(create_article_from_params)
    if @article.save
      flash[:notice] = "Article saved successfully"
      redirect_to article_path(@article)
    else
      render 'new'
    end
  end

  def edit
  end

  def update
    if @article.update(create_article_from_params)
      flash[:notice] = "Article updated succesfully"
    else
      return render 'edit'
    end
  end

  def destroy
    @article.destroy
    redirect_to articles_path
  end

end
