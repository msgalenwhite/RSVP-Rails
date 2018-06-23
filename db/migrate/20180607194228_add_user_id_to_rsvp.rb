class AddUserIdToRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :user_id, :integer, null: true
  end
end
