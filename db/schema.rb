# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_27_153603) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "invites", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "plus_one", default: false, null: false
    t.text "dietary_restrictions"
    t.boolean "baby", default: false, null: false
    t.boolean "plus_one_created", default: false
  end

  create_table "rsvps", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.boolean "is_attending", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "invite_id", null: false
    t.string "role", default: "guest", null: false
    t.text "email"
  end

  create_table "stories", force: :cascade do |t|
    t.string "submitter", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
