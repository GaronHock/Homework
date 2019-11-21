require_relative "Animal"
include Animal
class Dog
   attr_reader :name, :type, :gender
   def initialize(name, type, gender)
        @name = name 
        @type = type 
        @gender = gender 

    end
     
end