require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  let(:cookies) {Dessert.new("cookies", 50, "baker")}
  describe "#initialize" do
    it "sets a type" do
    expect(cookies.type).to eq("cookies")
    end
    it "sets a quantity" do
    expect(cookies.quantity).to eq(50)
    end
    it "starts ingredients as an empty array" do
    expect(cookies.ingredients).to be_empty
    end
    it "raises an argument error when given a non-integer quantity" do
    expect { cookies.quantity("50")}.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      cookies.add_ingredient("more")
    expect(cookies.ingredients).to include("more")
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do 
      cookies.add_ingredient("another")
      expect(cookies.ingredients).to shuffle("another")
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do 
      cookies.eat(30)
      expect(cookies.quantity).to eq(20)
    end 
    it "raises an error if the amount is greater than the quantity" do
      expect { cookies.eat("5000")}.to raise_error("NOTHING")
    end

  end

  describe "#serve" do
    it "contains the titleized version of the chef's name"
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in"
  end
end
