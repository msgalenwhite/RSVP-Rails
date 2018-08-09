class RemoveBrideAndGroomFromStories < ActiveRecord::Migration[5.2]
  def change
    remove_column :stories, :includes_bride, :boolean, default: false
    remove_column :stories, :includes_groom, :boolean, default: false
  end
end
