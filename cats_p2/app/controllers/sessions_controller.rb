class SessionsController < ApplicationController
    def new
        render :new
    end

    def create
        user = User.find_by_credentials(
            params[:username],
            params[:password]
        )
        if user
            session[:session_token] = user.session_token
            flash[:success] = "Logged in!" #this is refereneced in application.html
            redirect_to cats_url
        else
            flash.now[:error] = "Wrong email or password!"
            render :new, status: 401
        end
    end

    def destroy
        current_user.reset_session_token!
        flash[:success] = "Logged out successfully!"
        session[:session_token] = nil
        redirect_to cats_url
    end
end

