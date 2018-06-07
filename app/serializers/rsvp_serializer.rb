class RsvpSerializer < ActiveModel::Serializer
  attributes :full_name, :id

  def full_name
    object.full_name
  end
end
