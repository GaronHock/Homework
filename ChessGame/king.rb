#require_relative "slideable"
require_relative "stepable"
require_relative "piece"
require "byebug"

class King < Piece
    include Stepable

    def symbol
        '♚'.colorize(color)
    end


    def move_dirs
        new_move_array = CARD_MOVES
        new_move_array
    end



end