# #PRIVATE 


# # class Foo
 
# #   def bar
# #     method1
# #   end
 
# #   private
 
# #   def method1
# #     puts "Hi this is #{self.class}"
# #   end
 
# # end
 
# # class Blah < Foo
 
# #   def main_method
# #     method1
# #   end
 
# # end
 
# # p Foo.new.bar # Hi this is Foo
# # p Blah.new.main_method # Hi this is Blah


 
# # class NewFoo < Foo
 
# #   def main_method
# #     self.method1
# #   end
 
# # end
# #  p NewFoo.new.main_method





# # PROTECTED ------- # 
# class Foo
 
#   def main_method
#     method1
#   end
 
#   protected
 
#   def method1
#     puts "Hi this is #{self.class}"
#   end
 
# end
 
# class Blah < Foo
 
#   def main_method
#     method1
#   end
 
# end
 
# class NewFoo < Foo
 
#   def main_method
#     self.method1
#   end
 
# end

# # class NewBlah
 
# #   def main_method      THIS WONT WORK, NO INTHERIANCE
# #     Blah.new.method1
# #   end
 
# # end

#  Foo.new.main_method # Hi this is Foo
#  Blah.new.main_method # Hi this is Blah
#  NewFoo.new.main_method # Hi this is NewFoo
# # NewBlah.new.main_method


class Vehicle
    attr_accessor :speed
    def initialize(speed)
        @speed = speed
    end
    def accelerate(amount)
        self.speed += amount  
    end
    def stop
        self.speed = 0
    end 
end
class Car < Vehicle
    attr_accessor :location
    def initialize(location, speed)
        super(speed)
        @location = location
    end
    def travel
        self.location += speed
    end 
end
class Train < Vehicle
    attr_accessor :route, :station
    def initialize(route, station, speed)
        super(speed)
        @route = route
        @station = station
    end
    def travel
        self.station = station.next
    end
    def switch_route(new_route)
        self.route = new_route
    end 
end
class SportsCar < Car
    def travel
        self.location += speed
        puts "VROOM!"
    end
end
class Sedan < Car
    attr_reader :trunk
    def initialize(location, speed)
        super(location, speed)
        @trunk = []
    end
    def load(item)
        trunk.push(item)
    end 
end