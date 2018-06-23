# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


family_one = ["Luke Skywalker", "Leah Skywalker", "Han Solo"]
family_invite = Invite.create!

family_one.each do |character|
  name = character.split()
  Rsvp.find_or_create_by!(
    first_name: name[0],
    last_name: name[1],
    invite: family_invite
  )
end

individual_invite = Invite.create!
Rsvp.find_or_create_by!(first_name: "Anakin", last_name: "Skywalker", invite: individual_invite)

plus_one_invite = Invite.create!(plus_one: true)
Rsvp.find_or_create_by!(first_name: "Kylo", last_name: "Ren", invite: plus_one_invite)

# baby_invite = Invite.create!
# family_two = ["Carrie Reisinger", "Andy Reisinger"]
# ### = CHANGE BABY NOTATION TO BE ON INVITATION, NOT EACH RSVP.  THAT WAY IT IS EASILY ACCESSIBLE WITHOUT LOOPING.
