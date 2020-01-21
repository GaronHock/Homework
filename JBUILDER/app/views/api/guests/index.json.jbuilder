
json.array! @guests do |guest|
#   json.name guest.name
#   json.age guest.name
    json.partial! "api/guests/guest", guest: guest
end