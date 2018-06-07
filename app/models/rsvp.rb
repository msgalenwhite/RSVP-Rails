class Rsvp < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :is_attending, inclusion: {in: [true, false]}

  belongs_to :invite
end
