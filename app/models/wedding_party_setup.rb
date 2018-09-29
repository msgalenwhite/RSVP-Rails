class WeddingPartySetup
  attr_reader :emails

  WEDDING_PARTY = [
    "Eric Jones",
    "Cameron Jansen",
    "Lilly Jansen",
    "Evan Valdyke",
    "Jennifer Valdyke",
    "Frank Bimbo",
    "Debbie Olauson",

    "Carrie Reisinger",
    "Andy Reisinger",
    "Sarah Huebsch",
    "Ava Taussig",
    "Bert White",
    "Lori Schwartz",
    "Leslie Allen",
    "Mike Monteiro"
  ]

  def initialize
    @emails = wedding_party_emails
  end

  def wedding_party_emails
    emails = WEDDING_PARTY.map do |name|
      full_name = name.split()
      Rsvp.where(first_name: full_name[0], last_name: full_name[1]).pluck(:email)
    end
    emails.compact
  end

  def send_out
    @emails.each do |email|
      RsvpMailer.wedding_party(email).deliver_now
      putc "."
    end
  end
end
