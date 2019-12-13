class User < ApplicationRecord
    validates :user_name, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6}, allow_nil: true


    has_many :cats,
        foreign_key: :user_id,
        class_name: :Cat

    after_initialize :ensure_session_token
    attr_reader :password
    #self.class is an instance of the user class secure random generating a random string 10^64 
   #WERE JUST MAKING A COOKIE

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16) # this is just a cookie ingredient that will be put in a cookie
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(user_name: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password) # creating an encrypted password that is 
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
