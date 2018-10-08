class RemoveUserIdFromRsvps < ActiveRecord::Migration[5.2]
  def up
    remove_column :rsvps, :user_id, :integer, null: true
  end

  def down
    add_column :rsvps, :user_id, :integer, null: true
  end 
end
