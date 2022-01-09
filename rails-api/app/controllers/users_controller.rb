class UsersController < ApplicationController
  public

  def index
    users = User.all
    user_response = []

    for user in users do
      user_data = {
        username: user.username,
        email: user.email
      }
      user_response.push(user_data)
    end

    return render json: {
      users: user_response
    }
  end

  def new
    params.require(:user).permit(:username, :email, :password)
    encryptedPassword = BCrypt::Password.create(params[:password])
    User.create(username: params[:username], email: params[:email], password: encryptedPassword)
    return :status => :ok
  end

  def edit
    params.require(:user).permit(:username, :email, :id)
    user = User.find(params[:id])
    user.username = params[:username]
    user.email = params[:email]
    user.save
  end

  def articles
    params.require(:id)
    user = User.find(params[:id])
    return render json: {
      userArticles: user.articles
    }
  end
end
