class Rsvp < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :is_attending, presence: true
end
