require_relative "stepable"
require_relative "piece"
require "byebug"

class Knight < Piece 
    include Stepable

    def symbol
        '♞'.colorize(color)
    end

    def move_dirs
        new_move_array = KNIGHT_MOVES
        new_move_array
    end

end

