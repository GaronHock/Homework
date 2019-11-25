# A Very Hungry Octopus wants to eat the longest fish in an array of fish.


# ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# => "fiiiissshhhhhh"


# Sluggish Octopus
# Find the longest fish in O(n^2) time. Do this by comparing all fish lengths to all other fish lengths

def sluggish_octopus(arr)
    longest = Hash.new(0)
    arr.each_with_index do |ele, i| 
        longest[ele] = arr[i].length
    end
   sorted = longest.sort_by{|k,v| v}
   sorted[-1][0]
end

# fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

# p sluggish_octopus(fish)


# Dominant Octopus
# Find the longest fish in O(n log n) time. Hint: You saw a sorting algorithm that runs 
# in O(n log n) in the Sorting Complexity Demo. Remember that Big O is classified by the dominant term

class Array

  # Write an Array#merge_sort method; it should not modify the original array.

  def dominant_octopus_merge_sort(&prc)
    prc ||= Proc.new{|a,b| a<=>b}
    return self if self.length < 2 
    mid = self.length / 2 
    left = self.take(mid)
    right = self.drop(mid)

    sorted_left = left.dominant_octopus_merge_sort(&prc)
    sorted_right = right.dominant_octopus_merge_sort(&prc)

    Array.merge(sorted_left,sorted_right, &prc)

  end

  private
  
  def self.merge(left, right, &prc)
    sorted = [] 

    until left.empty? || right.empty? 
      if prc.call(left.first.length, right.first.length) == -1 
        sorted << left.shift 
      else
        sorted << right.shift 
      end
    end
    sorted + left + right

  end
end

fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
p fish.dominant_octopus_merge_sort


# Clever Octopus
# Find the longest fish in O(n) time. 
# The octopus can hold on to the longest fish that you have found so far
#  while stepping through the array only once.

