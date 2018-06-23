class MoveBabyToInvite < ActiveRecord::Migration[5.2]
  def up
    add_column :invites, :baby, :boolean, default: false, null: false
    remove_column :rsvps, :baby
  end

  def down
    add_column :rsvps, :baby, :boolean, default: false, null: false
    remove_column :invites, :baby, :boolean, null: false
  end
end
