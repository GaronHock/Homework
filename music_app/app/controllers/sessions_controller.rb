class SessionsController < ApplicationController
    def new
        render :new
    end
   
    def create 
        user = User.find_by_credentials(
            params[:email],
            params[:password]
        )
        if user
            session[:session_token] = user.session_token
            flash[:success] = "Logged In Successfully"
            redirect_to bands_url
        else 
            flash.now[:error] = "Wrong Email or Password"
            render :new, status: 401
        end 
    end

    def destroy
        current_user.reset_session_token!
        flash[:success] = "Successfully Logged Out!"
        session[:session_token] = nil
        redirect_to new_session_url
    end


end