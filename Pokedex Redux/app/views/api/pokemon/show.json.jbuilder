
json.pokemon do  #THIS IS SETTING A POKEMONS KEY
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids
  json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
end

json.items do #THIS IS SETTING AN ITEMS KEY 
  @pokemon.items.each do |item|
  json.set! item.id do
    json.extract! item, :id, :pokemon_id, :name, :image_url, :happiness, :price 
    end
  end
end
#:happiness, :image_url, :name, :price, presence: true
#{
  #pokemon:{
  #       id: 1,
  #        name:Bulbasaur
          #etc...
  #   }
  #items:{
       #1:{ 
             #id: 1,
              #pokemon_id: 1,   
                #name: cherry
       #}
  #}
#}