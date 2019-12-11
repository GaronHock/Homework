class ArtworkSharesController < ApplicationController
     def index
    render json: ArtworkShare.find_by(artist_id: params[:artist_id])
  end

  def create
    artwork_share = ArtworkShare.new(artwork_share_params)
    if artwork_share.save
      render json: artwork_share
    else
      render json: artwork_share.errors.full_messages, status: :unprocessable_entity
      # 422 is the status code for an unprocessable entity.
      # You can either pass the status code or status symbol.
      # In other words, you can also return:
      # render json: user.errors.full_messages, status: 422
    end
  end

  def show
    render json: ArtworkShare.find(params[:id])
  end

  def destroy
    artwork = ArtworkShare.find(params[:id])
    artwork.destroy
    render json: artwork_share
  end

  def update
    artwork_share = ArtworkShare.find(params[:id])
    if artwork_share.update_attributes(artwork_params)
      render json: artwork_share
    else
      render json: artwork_share.errors, status: :unprocessable_entity
    end
  end

  private

  def artwork_share_params
    params.require(:artwork_share).permit(:artwork_id, :artist_id)
  end

end