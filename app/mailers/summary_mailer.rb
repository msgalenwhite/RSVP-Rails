class SummaryMailer < ApplicationMailer
  def send_out(user)
    @rsvps = format_rsvps

    mail(
      to: ENV["GALEN_EMAIL"],
      subject: "Thank you for RSVP-ing to Galen and Chris's Wedding",
      template_path: 'summary_mailer',
      template_name: 'send_out'
    )
  end

  private

  def format_rsvps
    rsvp_array = Rsvp.all

    attending = []
    not_attending = []

    rsvp_array.each do |person|
      if person.is_attending
        attending << "#{person.full_name} - Updated at: #{person.updated_at}"
      else
        not_attending << "#{person.full_name} - Updated at: #{person.updated_at}"
      end
    end

    {
      attending: attending,
      not_attending: not_attending
    }
  end
end
