require "exercises"

describe "exercises" do

    describe "uniq" do
        it "should receive one Array as an argument" do
            expect{ uniq([1, 2, 3]) }.to_not raise_error
        end

        it "should return unique elements" do 
            expect(uniq([1, 1, 4, 2, 2])).to eq([1, 4, 2])
        end

        it "should return them in the order that they first appeared" do
            expect(uniq([1, 1, 4, 2, 2])).to_not eq([1, 2, 4])
        end
    end

    describe "two sum" do 
        it "should receive an array as an arguemnt" do 
            expect{ two_sum([5,6,7]) }.to_not raise_error
        end
         it "should return indexes that sum to zero" do 
             expect(two_sum([1,-1,3,4,5,6])).to eq([[0,1]])
        end
        it "should return smaller indices first" do 
            expect(two_sum([1,-1,3,4,5,-3])).to_not eq([[2,5], [0,1]])
        end
    end

    describe "transpose" do 
        it "should receive a 2 dimensional array as an argument" do
            expect{ transpose([[1, 2, 3],[4, 5, 6],[7, 8, 9]])}.to_not raise_error
        end

        it "should return a transposed array" do
            expect(transpose([[1, 2, 3],[4, 5, 6],[7, 8, 9]])).to eq([[1, 4, 7], [2, 5, 8],[3, 6, 9]])
        end
    end
    # describe "stock_picker" do 
    #     it "should receive an array that has a length of seven" do
    #         expect{ stock_picker([1,2,3,4,5,6,7])
end