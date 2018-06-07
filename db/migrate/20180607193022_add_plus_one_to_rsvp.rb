class AddPlusOneToRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :plus_one, :boolean, default: false, null: false
    add_column :rsvps, :baby, :boolean, default: false, null: false
  end
end
