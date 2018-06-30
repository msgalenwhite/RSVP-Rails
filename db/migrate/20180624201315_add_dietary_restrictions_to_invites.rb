class AddDietaryRestrictionsToInvites < ActiveRecord::Migration[5.2]
  def change
    add_column :invites, :dietary_restrictions, :text
  end
end
