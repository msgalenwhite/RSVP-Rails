class CreateRsvps < ActiveRecord::Migration[5.2]
  def change
    create_table :rsvps do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.boolean :is_attending, default: false

      t.timestamps
    end
  end
end
