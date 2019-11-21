#require "./pieces/piece"
require "byebug"
require_relative "piece"
class Board

    attr_reader :grid

    def initialize
        @grid = Array.new(8) { Array.new(8, nil) }
    end

    def populate_white
        [6,7].each do |row| 
            @grid[row].each_index do |col|
                piece = Piece.new(self, [row,col], :w)
                self[[row,col]] = piece
            end
        end
    end

    def populate_black
          [0,1].each do |row| 
            @grid[row].each_index do |col|
                piece = Piece.new(self, [row,col], :b)
                self[[row,col]] = piece
            end
        end
    end

    def get_queen(pos)
        self[pos] = Queen.new(self, pos, :w)
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
        raise "invalid move" unless valid_move?(end_pos)
        self[end_pos] = self[start_pos]
        self[start_pos] = nil 
    end

    def valid_move?(pos)
        debugger
        x, y = pos 
        if (x < 0 || y < 0 || x > 7 || y > 7)
            return false 
        else 
            return true 
        end
    end

    def empty?(pos)
        x,y = pos 
        @grid[x][y].nil?
    end
end


