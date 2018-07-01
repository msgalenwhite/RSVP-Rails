class AddEmailToRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :email, :text
  end
end
