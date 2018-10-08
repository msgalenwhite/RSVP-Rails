class RemoveSubmitterPresenceRequirmentFromStories < ActiveRecord::Migration[5.2]
  def up
    change_column :stories, :submitter, :string, null: true
  end

  def down
    change_column :stories, :submitter, :string, null: false
  end
end
