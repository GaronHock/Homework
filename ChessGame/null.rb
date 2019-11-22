
require 'singleton'
require_relative "piece"
class NullPiece < Piece
    include Singleton
    attr_reader :color, :symbol

    def initialize
        @color = :glass
        @symbol = " "
    end

    def moves
        []
    end

    def inspect
        return self.symbol
    end

    def empty?
       true 
    end



end