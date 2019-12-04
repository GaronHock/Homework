# == Schema Information
#
# Table name: users
#
#  id         :integer(8)      not null, primary key
#  name       :string
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

class User < ApplicationRecord
    has_many :enrollments,
    class_name: "Enrollment",
    primary_key: :id,
    foreign_key: :student_id

    has_many :enrolled_courses,
    through: :enrollments,
    source: :course

end


# User < applicationRecord

# 	has_many: authored_bleats;
# 	class_name: “Bleat”,
# 	primary_key: :id,
# 	foreign_key: :author_id

# 		belongs_to :location
# 		class_name “location”



