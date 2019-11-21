require_relative "slideable"
require_relative "piece"
require "byebug"
class Queen < Piece 
    include Slideable

    def move_dirs
        debugger
        new_move_array = HV_MOVES + DIAGONAL_MOVES
        new_move_array
    end
end