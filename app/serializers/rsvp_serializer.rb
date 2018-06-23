class RsvpSerializer < ActiveModel::Serializer
  attributes :full_name, :id, :invite_id

  def full_name
    object.full_name
  end
end
