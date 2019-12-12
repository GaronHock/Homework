class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper
   COLORS = ["red","orange","yellow","green","black", "white"]
   GENDERS = ["M", "F"]
    validates :color, inclusion: COLORS 
    validates :sex, inclusion: GENDERS
    validates :birth_date, :color, :name, :sex, :description, presence: true


    # def age 
    #     array = [] 
    #     array << self.birth_date
    #     Date.parse(array).to_s
        
    #   #  Date.self.class(birth_date).split.shift.join.parse
    # end

    # def self.test
    #     d = Date.new(1992, 6, 8)
    #     d
    #     # year = d.year
    #     # month = d.mon
    #     # day = d.mday
    #     # date = Date.commercial(year, month, day)
    #     # date
    # end
end

# 1992-06-08