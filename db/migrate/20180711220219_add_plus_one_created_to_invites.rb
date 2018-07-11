class AddPlusOneCreatedToInvites < ActiveRecord::Migration[5.2]
  def change
    add_column :invites, :plus_one_created, :boolean, default: false
  end
end
