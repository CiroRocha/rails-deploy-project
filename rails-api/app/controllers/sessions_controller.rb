require 'securerandom'

class SessionsController < ApplicationController

  private

  def add_session_token(user)
    user_session_token = user.session_token
    new_session_token = SecureRandom.hex(14)
    if user_session_token && user_session_token.length > 0
      user.session_token = user_session_token + ',' + new_session_token
    else
      user.session_token = new_session_token
    end

    user.save
    return new_session_token
  end

  public

  def new
  end

  def create
    user = User.find_by(email: params[:email].downcase)
    if user && user.authenticate(params[:password])
      session_token = add_session_token(user)
      response.set_header('Access-Control-Expose-Headers', 'Set-Cookie')
      response.set_header('Set-Cookie', 'sessionToken=' + session_token + '; Expires=' + 3.days.from_now.to_s + '; HttpOnly')
      return render json: {
        userData: user.as_json(:except => [:password_digest, :session_token]),
        sessionToken: session_token
      }, status: :ok
    else
      return render json: {
        message: 'Wrong email or password'
      }, status: :unauthorized
    end
  end

  def destroy
    session[:user_id] = nil
    return render json: {
      message: 'Succesfully logged out.'
    }
  end

end
