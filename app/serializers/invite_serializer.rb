class InviteSerializer < ActiveModel::Serializer
  attributes :id, :baby, :plus_one

  has_many :rsvps
end
