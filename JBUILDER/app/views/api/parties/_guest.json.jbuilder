# if (json.age guest.age > 39) && (json.age guest.age < 50)
    json.name guest.name  
    json.age guest.age
    json.gifts do
        json.array! guest.gifts do |gift|
        json.partial! "api/parties/gift", gift: gift
        end
    end

