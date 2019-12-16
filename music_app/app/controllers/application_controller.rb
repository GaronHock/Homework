class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def ensure_user_logged_in
        unless logged_in?
            flash[:error] = "You gotta be logged in to do that, bruh"
            redirect_to bands_url
        end
    end

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in
        !!current_user
    end
end
