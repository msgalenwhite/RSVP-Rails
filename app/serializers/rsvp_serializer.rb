class RsvpSerializer < ActiveModel::Serializer
  attributes :full_name, :id, :invite_id, :is_attending

  def full_name
    object.full_name
  end

  belongs_to :invite
end
