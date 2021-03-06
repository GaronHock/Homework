class Board

  attr_accessor :cups, :stones_arrays

  def initialize(name1, name2)
    @cups = Array.new(14) {Array.new}
    @name1 = name1 
    @name2 = name2
  
    @cups.each_with_index do |cup, idx| 
      if idx < 6 || idx > 6 && idx < 13 
        @cups[idx] = [:stone, :stone, :stone, :stone]
      end
    end
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
  end

  def valid_move?(start_pos)
    if start_pos > 13 || start_pos < 0
      raise "Invalid starting cup"
    end
    if @cups[start_pos].empty?
      raise "Starting cup is empty"
    end
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []
    i = start_pos
    until stones.empty?
      if i == 13 
        i = 1
      end
      i += 1
     @cups[i] << stones.pop
     if @cups[i] == 6 && current_player_name == @name1 
      @cups[i] << stones.pop
     end
      if cups[i] == 13 && current_player_name == @name2 
        @cups[i] << stones.pop
      end
      
    end

  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
