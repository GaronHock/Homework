  
  
  json.partial! "api/guests/guest", guest: @guest
  #json.gifts @guest.gifts, partial: "api/guests/gift", as: :gift
  json.gifts do
    json.array! @guest.gifts.map do |gift| 
      json.partial! "api/guests/gift", gift: gift
    end
 end 

 