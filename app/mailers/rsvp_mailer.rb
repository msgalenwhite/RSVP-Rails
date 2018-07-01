class RsvpMailer < ApplicationMailer
  def send_out(user)
    invite = user.rsvp.invite
    @rsvps = format_rsvps(invite.rsvps)
    @dietary_restrictions = invite.dietary_restrictions
    @send_to_name = user.full_name
    @send_to_email = user.email

    mail(
      to: @send_to_email,
      subject: "Thank you for RSVP-ing to Galen and Chris's Wedding",
      template_path: 'rsvp_mailer',
      template_name: 'send_out'
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
