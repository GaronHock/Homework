require_relative "slideable"
require_relative "piece"
require "byebug"


class Bishop < Piece
    include Slideable

    def symbol
        '♝'.colorize(color)
        



    end

    def move_dirs
        new_move_array = DIAGONAL_MOVES
        new_move_array
    end


end