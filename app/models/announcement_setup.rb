class AnnouncementSetup
  attr_reader :emails

  def initialize
    @emails = get_emails
  end

  def send_emails
    @emails.each do |email|
      RsvpMailer.rooms_available(email).deliver_now
      putc "."
    end
  end

  private

  def get_emails
    Rsvp.where(is_attending: true).pluck(:email).compact
  end
end
