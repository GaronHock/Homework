require_relative "slideable"
require_relative "piece"
require_relative "board"
require "byebug"
class Queen < Piece 
    include Slideable

    def symbol
        '♛'.colorize(color)
    end

    def move_dirs
        new_move_array = HV_MOVES + DIAGONAL_MOVES
        new_move_array
    end
end