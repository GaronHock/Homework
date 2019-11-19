require "byebug"
class PolyTreeNode
    attr_accessor :value, :children, :parent, :initial_position
    def initialize(value)
        @value = value
        @parent = nil  #if there is a parent
        @children = []
        @initial_position = nil
    end
      #    0 1 2 3 4 5 6 7 8                 [0,0] =>
    #    - - - - - - - - -
    # 0|                  |             [1, 2], [2,1] 
    # 1|                  |      
    # 2|                  |
    # 3|                  |
    # 4|                  |
    # 5|                  |
    # 6|                  |                   
    # 7|                  |
    # 8  - - - - - - - - - 

    def self.root_node(position)
        @initial_position = position
    end


    def parent=(node)   #2
        @parent.children.delete(self) unless @parent.nil?   #delete parent      
        @parent = node  #set parent to new node                                  
        node.children << self unless node.nil?  # pass self into children          
    end

    def add_child(child_node)
        child_node.parent = self   ###pass instance of polyTree
    end

    def remove_child(child_node)
        child_node.parent = nil
        raise "error" if child_node.parent != self
    end

    def dfs(target_value)  
        self.children.each do |child|                            
            results = child.dfs(target_value)               
            return results unless results.nil?         
        end                                           

        return self if self.value == target_value 
        nil
    end
   
    def bfs(target)
        queue = [self]
        until queue.empty? 
            root = queue.shift 
            if root.value == target    
                return root
            else 
                root.children.each {|child| queue << child } 
            end
        end
    end

end
