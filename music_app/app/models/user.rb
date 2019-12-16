class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true 


    after_initialize :ensure_session_token
    
    attr_reader :password
    def self.generate_session_token
        SecureRandom::urlsafe_base64(16) #generates a random session token
    end

    def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def reset_session_token! 
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)# creating an encrypted password that is 
        #saved into a string when it is entered into the user class as an attribute
    end

    def is_password?(password)
       bcrypt_password = BCrypt::Password.new(self.password_digest) #The bcrpyt::password.new is not making a new
         #password its just changing it from a string into a bcrpyt object 
        bcrypt_password.is_password?(password) #Bcrypt class has a method called is_password?   
    end
    private 
     def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end
end
