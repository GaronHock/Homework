#require "./pieces/piece"
require "byebug"
require_relative "piece"
require "colorize"

class Board

    attr_reader :grid

    def initialize
        @grid = Array.new(8) { Array.new(8, NullPiece.instance) }
    end
    

    def populate_white_pawns
        [6].each do |row| 
            @grid[row].each_index do |col|
                piece = Pawn.new(@board,[row,col], :w)
                self[[row,col]] = piece
            end
        end
    end

    def populate_black_pawns
          [1].each do |row| 
            @grid[row].each_index do |col|
                piece = Pawn.new(@board,[row,col], :b)
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
        self[start_pos] = NullPiece.instance
    end

    def valid_move?(pos)
        x, y = pos 
        if (x < 0 || y < 0 || x > 7 || y > 7)
            return false 
        else 
            return true 
        end
    end

    def empty?(pos)
        x,y = pos 
        # if @grid[x][y].nil?
        #     piece = NullPiece.new
        #     @grid[x][y] = piece
        #     true
        # end
        @grid[x][y].empty?
    end
end


