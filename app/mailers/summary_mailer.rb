class SummaryMailer < ApplicationMailer
  def send_out(email)
    @sorted_responses = format_rsvps

    mail(
      to: email,
      subject: "Your Daily RSVP Summary",
      template_path: 'summary_mailer',
      template_name: 'send_out'
    )
  end

  private

  def format_rsvps
    rsvp_array = Rsvp.all

    attending = []
    not_attending = []
    has_not_responded = []

    rsvp_array.each do |person|
      if person.email
        if person.is_attending
          attending << "#{person.full_name} - Updated at: #{person.updated_at}"
        else
          not_attending << "#{person.full_name} - Updated at: #{person.updated_at}"
        end
      else
        has_not_responded << person.full_name
      end
    end

    {
      attending: attending,
      not_attending: not_attending,
      has_not_responded: has_not_responded
    }
  end
end
