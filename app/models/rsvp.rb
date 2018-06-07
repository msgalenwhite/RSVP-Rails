class Rsvp < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :is_attending, inclusion: {in: [true, false]}
  validates :plus_one, inclusion: {in: [true, false]}
  validates :baby, inclusion: {in: [true, false]}

  belongs_to :invite
  belongs_to :user
end
