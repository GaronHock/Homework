class UsersController < ApplicationController
    def index
        render :index
    end

    # def create
    # end
    def show
        @user = User.find_by(id: params[:id])
        render :show 
    end 

    private
    def user_params
        params.require(:user).permit(:email, :password_digest, :session_token)
    end
end