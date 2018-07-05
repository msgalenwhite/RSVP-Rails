class Invite < ApplicationRecord
  validates :plus_one, inclusion: {in: [true, false]}
  validates :baby, inclusion: {in: [true, false]}

  has_many :rsvps
end
