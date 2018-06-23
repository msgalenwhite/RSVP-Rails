class MovePlusOneToInvite < ActiveRecord::Migration[5.2]
  def up
    add_column :invites, :plus_one, :boolean, default: false, null: false
    remove_column :rsvps, :plus_one
  end

  def down
    add_column :rsvps, :plus_one, :boolean, default: false, null: false
    remove_column :invites, :plus_one, :boolean, null: false
  end
end
