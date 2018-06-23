class AddInviteToRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :invite_id, :integer, null: false
  end
end
