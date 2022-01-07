class UsersController < ApplicationController
  public

  def new
    params.require(:user).permit(:username, :email, :password)
    encryptedPassword = BCrypt::Password.create(params[:password])
    User.create(username: params[:username], email: params[:email], password: encryptedPassword)
    return :status => :ok
  end
end
