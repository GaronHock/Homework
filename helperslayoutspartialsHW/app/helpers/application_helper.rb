module ApplicationHelper
    def auth_token
        "<input
  type=hidden
  name=authenticity_token
  value=#{form_authenticity_token}/>".html_safe
    end
end

#First of all, we'll need to wrap the input tag in a string and call #html_safe on it. 

# Secondly, now that our input tag is little more than a string in Ruby-land, we shouldn't
#  interpolate the actual form_authenticity_token using erb tags. 
# Instead, just interpolate form_authenticity_token using the string interpolation syntax we know and love (#{}).