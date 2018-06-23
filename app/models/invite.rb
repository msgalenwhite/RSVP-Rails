class Invite < ApplicationRecord
  has_many :rsvps

  validates :plus_one, inclusion: {in: [true, false]}
end
