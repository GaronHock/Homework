class Api::GuestsController < ApplicationController
  def index
    @guests = Guest.includes(gifts: :guest).all
    render :index
  end

  def show
    @guest = Guest.find_by(id: params[:id])
    render :show
  end
end
