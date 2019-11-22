class Piece
    #include Slideable
    attr_accessor :pos
    attr_reader :color
    def initialize(board, pos, color)
        @board = board
        @pos = pos
        @color = color

    end

    def empty?
        false
    end
    
    def inspect
        return self.symbol
    end

end