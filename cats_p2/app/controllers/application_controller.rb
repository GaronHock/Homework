class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def ensure_user_logged_in
        unless logged_in? 
            flash[:error] = "Must be logged in to complete action"
            redirect_to new_session_url
        end
    end

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end


    def logged_in?
        !!current_user #either a user or nil evaluates to false even if its nil
    end

end
