class InviteRsvpsSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :is_attending, :plus_one, :baby

  def full_name
    object.full_name
  end
end
