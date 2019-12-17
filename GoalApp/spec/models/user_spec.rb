require 'rails_helper'

RSpec.describe User, type: :model do
  #pending "add some examples to (or delete) #{__FILE__}"
    subject(:user){ User.new(email: "Garon", password: "hunter12")}
    describe "validations" do 
      it { should validate_presence_of(:email) }
      it {should validate_presence_of(:password_digest)}
      it {should validate_presence_of(:session_token)}
    end

    # describe "User::generate_session_token" do
      
    # end

    describe "#is_password?" do 
      context "is a valid password" do
        it "returns true" do 
          expect(user.is_password?("hunter12")).to be(true)
        end
      end
      context "is an invalid password" do 
        it "returns false" do 
          expect(user.is_password?("hunter1")).to be(false)
        end 
      end
    end
    describe "User::find_by_credentials" do
        context "is a valid email" do
          expect(User.find_by_credentials(User.email, User.password)).to match(User.email, User.password)
        end
        it "should call is_password?" do
          expect(User.find_by_credentials(User.email, User.password)).to receive(:is_password?)
        end 
        it "should return the user if it's a valid email and password" do
          expect(User.find_by_credentials).to_include(User.email, User.password)
        end 
    end

end
