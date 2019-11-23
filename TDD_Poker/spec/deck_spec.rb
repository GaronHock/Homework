require 'deck.rb'
require 'card.rb'
require "byebug"
describe "deck" do 
    let(:deck) {Deck.new}
    let(:card) {Card.new(:spade, 2)}
    describe "#initialize" do 
        it "should create an instance of deck" do
        deck
        end
        
        it "should set the deck to be an empty array" do
        expect(deck.deck.empty?).to eq(true)
        end
    end

    describe "#make_deck" do 
        it "should fill the deck with instances of card" do
            deck.deck << card
            expect(deck.deck[0]).to be_an_instance_of(Card)
        end

        it "should amount to 52 card instances" do
            made_deck = deck.make_deck
            expect(made_deck.length).to eq(52)
        
        
        
    #         it "should call Board::print_grid with the #hidden_ships_grid as an arg" do
    #     board.place_random_ships
    #     expect(Board).to receive(:print_grid).with(board.hidden_ships_grid)
    #     board.print
    #   end
        end
    end
end