class RsvpMailer < ApplicationMailer
  def send_out(user_rsvp, dietary_restrictions, rsvps)
    @rsvps = format_rsvps(rsvps)
    @dietary_restrictions = dietary_restrictions
    @send_to_name = user_rsvp.full_name
    @send_to_email = user_rsvp.email

    mail(
      to: @send_to_email,
      subject: "Thank you for RSVP-ing to Galen and Chris's Wedding",
      template_path: 'rsvp_mailer',
      template_name: 'send_out'
    )
  end

  def rooms_available(email)
    mail(
      to: email,
      subject: "Galen and Chris's Wedding Announcements"
    )
  end

  def wedding_party(email)
    mail(
      to: email,
      subject: "Wedding Party Announcements"
    )
  end

  private

  def format_rsvps(rsvp_array)
    attending = []
    not_attending = []

    rsvp_array.each do |person|
      if person.is_attending
        attending << person.full_name
      else
        not_attending << person.full_name
      end
    end

    {
      attending: attending,
      not_attending: not_attending
    }
  end
end
