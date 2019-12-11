class AddIndexOnArtworkShares < ActiveRecord::Migration[5.2]
  def change
    add_index :artwork_shares, :artist_id
    add_index :artwork_shares, [:artwork_id, :artist_id], unique: true 
  end
 
end
