require_relative "tree_node.rb"

class KnightPathFinder 
    attr_reader :considered_positions, :root
    def initialize(starting_pos)
        @root = PolyTreeNode.new(starting_pos)
        @considered_positions = [@root.value]  #[0.0]
    end
    def self.valid_moves(pos)
        i,j = pos
        raise "Not a valid pos" if (i < 0 || i > 7) || (j < 0 || j > 7)
        possible_positions = [
            [i + 1, j + 2],
            [i + 2, j + 1],
            [i + 1, j - 2],
            [i + 2, j -2], 
            [i - 1, j + 2], 
            [i - 1,j - 2],
            [i - 2,j + 2], 
            [i - 2,j - 2] 
            ]
        possible_positions.select do |pos_pos|
            (pos_pos[0] >= 0 && pos_pos[0] <= 7) && (pos_pos[1] >= 0 && pos_pos[1] <= 7)
       end
    end
    
    def new_move_positions(pos)
        possible_moves = KnightPathFinder.valid_moves(pos) ##[[?, ?], [A, B], [X, Y]]
        new_positions = []
        possible_moves.each do |possible_move|                                         
            unless @considered_positions.include?(possible_move)
                @considered_positions << possible_move                                             
                new_positions << possible_move
            end
        end
        new_positions
    end

    def build_move_trees
        queue = [@root]
        until queue.empty? 
            node = queue.shift 
            self.new_move_positions(node.value).each do |position|  #root [0,0] 
                new_node = PolyTreeNode.new(position)
                node.add_child(new_node)
                queue << new_node
            end
        end
    end
    def find_path(end_pos)
        queue = [@root]
        until queue.empty? 
            node = queue.shift 
            if node.value == end_pos    
                return node
            else
              self.new_move_positions(node.value).each do |position|
                new_node = PolyTreeNode.new(position)
                node.add_child(new_node)
                queue << new_node
              end
            end
        end
    end

    def trace_path_back(end_pos)
        queue = [@root]
        path = []
        until queue.empty? 
            node = queue.shift 
            if node.value == end_pos
                path << node.value
                until node.parent.nil?   
                    path << node.parent.value    
                    node = node.parent
                end
                return path.reverse
            else
              self.new_move_positions(node.value).each do |position|
                new_node = PolyTreeNode.new(position)
                new_node.parent = node
                node.add_child(new_node)
                queue << new_node
              end
            end
        end
    end
end
    #               
                    #return path
    #             
    #  Write an instance method #new_move_positions(pos); 
    #  this should call the ::valid_moves class method, 
    #  but filter out any positions that are already in @considered_positions.
    #  It should then add the remaining new positions to @considered_positions and
    #   return these new positions.
    #    0 1 2 3 4 5 6 7 8  exit               [0,0] =>
    #    - - - - - - - - -
    # 0|                  |             [1, 2], [2,1] 
    # 1|                  |      
    # 2|                  |
    # 3|                  |
    # 4|                  |
    # 5|                  |
    # 6|                  |                   
    # 7|                  |
    # 8  - - - - - - - - - '

    # we are building a tree that shows all possible moves on a chess board given 
    # A SINgle starting position
    # [0,0] couuld be  a root 
    # every child could be every possible move 
    # dont want any position more than once 
    ## tree of poly node instances whose value is position