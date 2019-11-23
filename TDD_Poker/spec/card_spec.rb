require "card"
describe "card" do

    let(:card) { Card.new(:diamond, 5) }
     
    describe "#initialize" do
        it "should create an instance of card" do
            card
        end

        it "should set the suit of the card to a suit" do
            expect(card.suit).to eq(:diamond)
        end

        it "should set a value" do
            expect(card.val).to eq(5)
        end

    end


end