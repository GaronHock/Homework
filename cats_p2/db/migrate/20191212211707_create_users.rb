class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name, null: false, unique: true 
      t.string :password_digest, null: false 
      t.string :session_token, null: false, unique: true
      t.index :user_name 

      t.timestamps
    end
  end
end
