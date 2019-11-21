require_relative "piece"
require "byebug"

class Board

    attr_reader :grid

    def initialize
        @grid = Array.new(8) { Array.new(8, nil) }
    end

    def populate_white
        [6,7].each do |row| 
            @grid[row].each_index do |col|
                piece = Piece.new 
                self[[row,col]] = piece.white
            end
        end
    end

    def populate_black
          [0,1].each do |row| 
            @grid[row].each_index do |col|
                piece = Piece.new 
                self[[row,col]] = piece.black
            end
        end
    end


    def[](pos)
        row, col = pos
        @grid[row][col]
    end

    def []=(pos,value)
        row,col = pos 
        @grid[row][col] = value 
    end

    def move_piece(start_pos, end_pos)
        raise "no piece" unless self[start_pos]
        x,y = end_pos
        if (x < 0 || y < 0 || x > 7 || y > 7 || !self[end_pos].nil?)
            raise "invalid move"
        end
        self[end_pos] = self[start_pos]
        self[start_pos] = nil 
    end
end


