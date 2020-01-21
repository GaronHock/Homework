#  json.partial! "api/guests/guest", guest: @guest
#   #json.gifts @guest.gifts, partial: "api/guests/gift", as: :gift
#   json.gifts do
#     json.array! @guest.gifts.map do |gift| 
#       json.partial! "api/guests/gift", gift: gift
#     end
#  end 



json.guests do 
  json.array! @party.guests do |guest|
    json.partial! "api/parties/guest", guest: guest
  end
end


# json.guests do 
#     json.array! @party.guests.map do |guest|
#       json.partial! "api/parties/gift", guest: guest.gift
#  
#    end
# end