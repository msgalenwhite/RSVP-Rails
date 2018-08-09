class Story < ApplicationRecord
  validates :body, presence: true

  def self.newest_first
    order('created_at asc')
  end
end
