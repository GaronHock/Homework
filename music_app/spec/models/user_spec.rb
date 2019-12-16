require 'rails_helper'


RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  subject(:user){User.new(email: "garonhock", password_digest:"sdnfsjkfnsfkjvnsd", session_token:"lcksdmvskdmvsdjvn")}

  describe "validations" do
    it {should validate_presence_of(:email)}
    it {should validate_presence_of(:password_digest)}
    it {should validate_presence_of(:session_token)}
    
  end

  


end
