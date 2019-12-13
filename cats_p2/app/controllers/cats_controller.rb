class CatsController < ApplicationController
  before_action :ensure_user_logged_in, only: [:create, :new, :edit, :update, :destroy]
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @cat = Cat.find(params[:id])
    render :show
  end

  def new
    @cat = Cat.new
    render :new
  end

  def create
    @cat = current_user.cats.new(cat_params) # this is using the association to make the cat belong to the user
    if @cat.save
      flash[:success] = "Successfully Engineered Cat!!!!"
      redirect_to cat_url(@cat)
    else
      flash.now[:errors] = @cat.errors.full_messages
      render :new, status: 422
    end
  end

  def edit
    @cat = current_user.cats.find_by(id: params[:id])
    if @cat
      render :edit
    else
      flash[:error] = "THAT CAT AINT YOURS!" 
      redirect_to cats_url
    end
  end

  def update
    @cat = current_user.cats.find(params[:id])
    if @cat.update_attributes(cat_params)
      redirect_to cat_url(@cat)
    else
      flash.now[:errors] = "THAT CAT AINT YOURS!" 
      render :edit, status: 422
    end
  end

  private

  def cat_params
    params.require(:cat).permit(:age, :birth_date, :color, :description, :name, :sex)
  end
end
