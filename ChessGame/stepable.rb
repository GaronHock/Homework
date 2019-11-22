
require "byebug"

module Stepable
    CARD_MOVES = [[-1,0],[1,0],[0,1],[0,-1]]
    KNIGHT_MOVES = [[2,1],[-2,1],[2,-1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]

    def card_moves   
        CARD_MOVES
    end

    def knight_moves   
        KNIGHT_MOVES
    end



    def moves    
        possible_moves = []
        move_dirs.each do |dx,dy|
            possible_moves << find_move(dx,dy)
        end
        possible_moves
    end
    
    def find_move(dx, dy)
      #  moves = []
        currentx, currenty = pos 
        currentx += dx
        currenty += dy  
        pos = [currentx, currenty] 
        if board.valid_move?(pos)
            return pos
        end
        nil
    end





end