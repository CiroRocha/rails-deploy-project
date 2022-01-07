class UsersController < ApplicationController
  public

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
end
