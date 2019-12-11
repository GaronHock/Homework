class ArtworkShare < ApplicationRecord
    validates :artwork_id, presence: true, uniqueness: { scope: :artist_id} 
    validates :artist_id, presence: true

    belongs_to :artwork, dependent: :destroy
    #  primary_key: :id,
    # foreign_key: :artwork_id,
    # class_name: :Artwork

    belongs_to :viewer,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :User



end