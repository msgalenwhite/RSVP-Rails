class AddTopicToStories < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :includes_bride, :boolean, default: false, null: false
    add_column :stories, :includes_groom, :boolean, default: false, null: false
  end
end
