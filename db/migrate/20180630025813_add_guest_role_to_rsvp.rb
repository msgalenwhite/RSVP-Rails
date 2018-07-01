class AddGuestRoleToRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :role, :string, null: false, default: "guest"
  end
end
