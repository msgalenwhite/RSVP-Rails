class StorySerializer < ActiveModel::Serializer
  attributes :id, :submitter, :body
end
