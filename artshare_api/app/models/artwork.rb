class Artwork < ApplicationRecord
    validates :title, presence: true, uniqueness: { scope: :artist} # no user can make two artworks with the same title
    # because i  specified that the uniqueness of the title is just to the scope of a specific user
    validates :image_url, presence: true, uniqueness: true 
    validates :artist_id, presence: true


    belongs_to :artist,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :User

    has_many :viewers,
    foreign_key: :artist_id,
    class_name: :ArtworkShare

    has_many :shared_viewers,
    through: :artist,
    source: :artwork_shares
    

 

end