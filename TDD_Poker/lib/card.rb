class Card

    CARD_SUITS = [:heart, :diamond, :club, :spade]

    CARD_VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    def self.make_deck
        deck = []
        CARD_SUITS.each do |suit| 
            CARD_VALUES.each do |val|
                deck << Card.new(suit, val)
            end
        end
        deck
    end

    attr_reader :suit, :val
    def initialize(suit, val)
        @suit = suit
        @val = val
    end
end