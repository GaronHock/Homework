#require_relative "slideable"
require_relative "stepable"
require_relative "piece"
require "byebug"
require "colorize"


class Pawn < Piece

    def symbol
        '♟'.colorize(color)
    end


    def pawn_move
        self.color == :w ?  -1  : 1  
    end

    def moves
        movez = []
        x, y = pos
        x += pawn_move
        if board.valid_move?(pos)
            movez << pos
        end
        movez
    end


end