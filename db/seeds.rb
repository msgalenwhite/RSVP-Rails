# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

plus_one_invites = [
  "Leah White",
  "Sonya Sowerby",
  "Michael Slanovits",
  "Chris Meade",
  "Amanda Berg",
  "Ben Chaney",
  "Eric Jones",
  "Zach Senchuk",
  "Scott Bacheller",
  "Joel Garret",
  "Sara Landry",
  "Victoria Harrington",
  "Test Account"
]

plus_one_invites.each do |person|
  invite = Invite.create!(plus_one: true)
  name = person.split()

  Rsvp.create!(
    first_name: name[0],
    last_name: name[1..name.length-1].join(" "),
    invite: invite,
    role: "has_plus_one"
  )
end

baby_invites = [
  ["Jonathon Chenoweth", "Emma Chenoweth"],
  ["Carrie Reisinger", "Andy Reisinger"],
  ["Cameron Jensen", "Lilly Jensen"],
]

baby_invites.each do |family_array|
  invite = Invite.create!(baby: true)
  family_array.each do |person|
    name = person.split()

    Rsvp.create!(
      first_name: name[0],
      last_name: name[1..name.length-1].join(" "),
      invite: invite,
      role: "guest"
    )
  end
end

invitees = [
  ### Galen's Family
  ["Bert White", "Lori Schwartz"],
  ["Eli White", "Holly Lowe"],
  ["Brian Schwartz", "Cindy Turner"],
  ["Emma Schwartz"],
  ["Ken Kaufman"],
  ["Erin Kaufman"],
  ["Bruce White", "Kristine White"],
  ["Steve White", "Anne White"],
  ["Valerie White"],
  ["Ivan White"],

  ### Bridesmaids
  ["Barbara Harrell", "Vern Harrell"],
  ["Cecily Burke", "David Taussig"],
  ["Sarah Huebsch", "Kelsey Schilling"],
  ["Mark Huebsch", "Mary Huebsch"],
  ["Leslie Allen", "Mike Monteiro"],

  ### Bride's Friends
  ["Lana Daniels", "Gary Daneils"],
  ["Katie D'Paulo"],

  ### Mom's Friends
  ["Trevor Morris", "Tamar Morris"],
  ["Bruce Gary", "Wendy Gary"],
  ["Jose Parejo", "Marci Parejo"],
  ["Harvey Fleisher", "Elaine Fleisher"],
  ["Philip Kerbis", "Marlene Kerbis"],

  ### Chris's Family
  ["Frank Bimbo", "Debbie Olauson", "Nicole Olauson"],
  ["Eddie Bimbo", "Deb Bimbo", "Amanda Killbride"],
  ["Teresa Bimbo Daly", "John Daly", "Angela Daly"],
  ["Amarie Yoder", "Sam Yoder", "Emma Yoder", "Rachel Yoder"],
  ["Susan Bimbo Nazzaro"],
  ["Will McCreary"],

  ### Groomsmen
  ["Evan Valdyke", "Jennifer Valdyke"],

  ### Chris's Friends
  ["Jason Haber", "Emily Haber"],
  ["Ian Rogers", "Noelle Rogers"],
  ["Mike Mammoser"],
  ["Jonny Plat", "Gretchen Plat"],

  ### Shared Friends
  ["Vicki Grant", "Eric Grant"],
  ["Sam Barrows", "Astrid Barrows"],
  ["Fallon Renee", "Katie Bowman"],
  ["Chrissy Volsci"]
]

invitees.each do |family_array|
  invite = Invite.create!()
  family_array.each do |person|
    name = person.split()

    Rsvp.create!(
      first_name: name[0],
      last_name: name[1..name.length-1].join(" "),
      invite: invite,
      role: "guest"
    )
  end
end
