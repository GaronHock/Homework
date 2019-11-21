require "byebug"
module Slideable
    HV_MOVES = [[-1,0],[1,0],[0,1],[0,-1]]
    DIAGONAL_MOVES = [[-1,-1], [-1,1], [1,-1],[1,1]]
def hv_moves
    HV_MOVES
end

def diagonals   
    DIAGONAL_MOVES
end


def moves    
    possible_moves = []
    move_dirs.each do |dx,dy|
        possible_moves.concat(find_path(dx,dy))
    end
    possible_moves
end

def find_path(dx, dy)
    moves = []
    startx, starty = pos 
    loop do
    currentx = startx + dx 
    currenty = starty + dy  

        current_pos = [currentx,currenty] 
        break unless board.valid_move?(current_pos)
        if board.empty?(current_pos)
            moves << current_pos
        else
            moves << current_pos if board[current_pos].color != color 
            break 
        end
    end

    moves 
end






end