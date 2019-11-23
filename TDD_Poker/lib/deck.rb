require_relative 'card'

class Deck

    attr_reader :deck 

    def initialize
        @deck = Card.make_deck
    end

    
end