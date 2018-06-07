class AddInviteToRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :invitation_id, :integer, null: false
  end
end
