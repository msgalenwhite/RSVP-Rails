class Rsvp < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :is_attending, inclusion: {in: [true, false]}
  validates :role, presence: true, inclusion: {in: ["guest", "has_plus_one", "is_plus_one"]}

  belongs_to :invite

  def full_name
    "#{first_name} #{last_name}"
  end
end
