require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    describe "GET #index" do
        it "renders the users index" do
            get :index 
            expect(response).to render_template(:index)
        end
    end

    describe "GET #show" do
        it "renders the show template" do
            user = User.create!(email: "cindy@app.com", password_digest: "aoijweoiwe8383974ryiuhaod", session_token: "938479dsdsdasdjoij8")
            get :show, params: {id: user.id}
            expect(response).to render_template(:show)
        end 

        context "if a user does not exist" do
            it "is not a success" do
                begin 
                    get :show, id: -1
                rescue
                    ActiveRecord::RecordNotFound 
                end
                expect(response).not_to render_template(:show)
            end
        end
    end


end