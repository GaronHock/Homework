require "byebug"
# two_sum?

# Given an array of unique integers and a target sum, determine whether any two integers 
# in the array sum to that amount.

# def two_sum?(arr, target_sum)
#     # your code here...
# end

# arr = [0, 1, 5, 7]
# two_sum?(arr, 6) # => should be true
# two_sum?(arr, 10) # => should be false

# Brute force
# If we weren't worried about time complexity, what would be the most straightforward 
# way to solve this problem? To start with, we could check every possible pair. If we
#  sum each element with every other, we're sure to either find the pair that sums to 
#  the target, or determine that no such pair exists.

# This is the brute force solution. It's essentially hitting the problem with a sledge
#  hammer. There are faster and more elegant ways to solve the problem, but we know for
#   sure that this will get the job done.

# Let's start by implementing the brute force solution. Write a method called bad_two_sum?,
#  which checks every possible pair.

# Make sure that you don't pair an element with itself. However, you don't need to 
# bother checking for summing the same pair twice; that won't affect your result.

# (Note: you can cut the running-time significantly by returning early, and by 
# not checking pairs more than once. However, these micro-optimizations will not
#  improve the time complexity of the solution. Do you see why?)

# Once you're done, write a comment with your solution's time complexity.

#0(n2) time complexity
def bad_two_sum?(arr, target_sum)
    arr.each_with_index do |ele1,idx1|
        arr.each_with_index do |ele2,idx2|
             return true if idx2 > idx1 && ele1 + ele2 == target_sum
        end
    end
    false
end

arr = [0, 1, 5, 7]
#p bad_two_sum?(arr, 6) # => should be true
#p bad_two_sum?(arr, 10) # false


# Sorting
# As a person of elevated algorithmic sensibilities, the brute-force approach is beneath you. 
# Leave that nonsense to the riffraff. 
# Instead, you'll apply a refined and time-honored technique: sorting.

# Sort your data, then try to solve the problem.

# What does sorting do to the lower bound of your time complexity?
# How might sorting that make the problem easier?
# Write a second solution, called okay_two_sum?, which uses sorting. Make sure it works correctly.

# Hint: (There are a couple ways to solve this problem once it's sorted. One way involves using a
#  very cheap algorithm that can only be used on sorted data sets. What are some such algorithms you know?)

def okay_two_sum?(arr,target_sum)
  hash = {}

  arr.each_with_index do |el,idx|
     return true if hash[target_sum - el]
    hash[el] = true
  end
  false
end



arr = [7,10,10,1,1,1,5,1,0]
p okay_two_sum?(arr, 17) # => should be true
p okay_two_sum?(arr, 1000)


class Parent 
    protected
    def here
        puts "hi"

    end
end


class Child < Parent
    def hi 
        self.here
    end
end