class Piece
    #include Slideable
    attr_accessor :value
    def initialize
        @value = value
    end

    def inspect
        return @value
    end

    def black
       self.value = :b
    end

    def white
       self.value = :w
    end

end