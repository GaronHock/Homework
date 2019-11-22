require_relative "slideable"
require_relative "piece"
require "byebug"

class Rook < Piece
    include Slideable

    def symbol
        '♜'.colorize(color)
    end

    def move_dirs
        new_move_array = HV_MOVES
        new_move_array
    end




end