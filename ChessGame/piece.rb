class Piece
    #include Slideable
    attr_accessor :board, :pos
    attr_reader :color
    def initialize(board, pos, color)
        @board = board
        @pos = pos
        @color = color
    end

    def inspect
        return @value
    end

end