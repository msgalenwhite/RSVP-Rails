class InviteSerializer < ActiveModel::Serializer
  attributes :id, :baby, :plus_one, :plus_one_created

  has_many :rsvps
end
