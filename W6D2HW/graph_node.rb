require 'set'

class GraphNode
  attr_accessor :val, :neighbors

  def initialize(val)
    self.val = val
    self.neighbors = []
  end

def bfs(starting_node, target_value)
  queue = [starting_node]
  visited = Set.new()

  until queue.empty?
    root = queue.shift unless visited.include?(node)
        if root.val == target_value
            return root 
        end
       root.neighbors.each do |neighbor| 
        visited << neighbor unless visited.include?(neighbor)
       end
    end
  end
  nil
end








