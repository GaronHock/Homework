class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until game_over
    take_turn
    end
    if game_over == true 
      game_over_message
      reset_game
    end
  end

  def take_turn
    show_sequence
    require_sequence
    if @game_over == false
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    seq.each do |color| 
      sleep 0.5
      puts color 
      sleep 0.75
      system "clear"
    end
  end

  def require_sequence
  puts "Please enter each color first to last separated by a new line"
    seq.each do |color|
      user_input = gets.chomp
      if user_input != color
      @game_over = true
      end
    end
  end


  #  The goal of require_sequence is to prompt the user to repeat back the new 
  #  sequence that was just shown to them, one color at a time. 
  #  If they give an incorrect color, it should immediately set @game_over to be true

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "SUCCESS"
    system "clear"
  end

  def game_over_message
    puts "GAME OVER"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    seq.clear
  end
end



